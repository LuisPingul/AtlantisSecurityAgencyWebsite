"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy, ShieldCheck, X, Building2 } from "lucide-react";
import { COMPANY, CREDENTIALS } from "@/data/company";

let cachedDisplayTransitionSupport: boolean | undefined;

function canTransitionDisplay(): boolean {
  if (cachedDisplayTransitionSupport !== undefined) {
    return cachedDisplayTransitionSupport;
  }
  if (
    typeof window === "undefined" ||
    !window.CSS?.supports?.("transition-behavior", "allow-discrete") ||
    !document.body
  ) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText =
    "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  void getComputedStyle(probe).display;
  probe.style.display = "none";
  cachedDisplayTransitionSupport = getComputedStyle(probe).display === "block";
  probe.remove();
  return cachedDisplayTransitionSupport;
}

function supportsTopLayerExit(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(
    window.CSS?.supports?.("overlay", "auto") && canTransitionDisplay()
  );
}

interface ComplianceModalProps {
  open: boolean;
  onClose: () => void;
}

export function ComplianceModal({ open, onClose }: ComplianceModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const closeAnimated = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) {
      onClose();
      return;
    }

    if (!supportsTopLayerExit()) {
      dialog.setAttribute("data-closing", "");
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 400)),
        ]);
      }
      if (!dialog.hasAttribute("data-closing")) return;
      dialog.removeAttribute("data-closing");
    }

    if (dialog.open) {
      dialog.close();
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.removeAttribute("data-closing");
      dialog.showModal();
    } else if (!open && dialog.open) {
      void closeAnimated();
    }
  }, [open, closeAnimated]);

  // Mandatory Safari fallback for light-dismiss when closedby isn't natively supported,
  // plus intercepting native cancel so Esc animates smoothly on Firefox/Safari.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      void closeAnimated();
    };

    const handleClose = () => {
      dialog.removeAttribute("data-closing");
      onClose();
    };

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!inside) {
        void closeAnimated();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);

    const needsLightDismissFallback =
      typeof HTMLDialogElement !== "undefined" &&
      !("closedBy" in HTMLDialogElement.prototype);

    if (needsLightDismissFallback) {
      dialog.addEventListener("click", handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
      if (needsLightDismissFallback) {
        dialog.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [closeAnimated, onClose]);

  const copyValue = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Clipboard API unavailable
    }
  };

  const copyFullLedger = async () => {
    const lines = [
      `${COMPANY.legalName} — Official Vendor Accreditation Summary`,
      `Established: ${COMPANY.established} (${COMPANY.ownership})`,
      `Licensee / Manager: ${COMPANY.licenseeManager}`,
      `Main Office: ${COMPANY.offices[0].address}`,
      `Branch Office: ${COMPANY.offices[1].address}`,
      `Contacts: ${COMPANY.contacts.phones.map((p) => p.display).join(" / ")} | ${COMPANY.contacts.email}`,
      "",
      ...CREDENTIALS.map((c) => `${c.label}: ${c.value}`),
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2200);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="compliance-dialog-title"
      className="atlantis-dialog"
      {...({ closedby: "any" } as Record<string, string>)}
    >
      <div className="overflow-hidden rounded-2xl border border-[#E5B63B]/35 bg-[#0C0A24] text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-[#14103B] px-6 py-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#F5D576]">
              <ShieldCheck className="h-4 w-4 text-[#E5B63B]" />
              <span>B2B Vendor Accreditation Ledger</span>
            </div>
            <h2
              id="compliance-dialog-title"
              className="mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl"
            >
              {COMPANY.legalName}
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              {COMPANY.ownership} · Est. {COMPANY.established} · Licensee:{" "}
              {COMPANY.licenseeManager}
            </p>
          </div>

          <button
            type="button"
            onClick={() => void closeAnimated()}
            aria-label="Close accreditation ledger"
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-slate-300 transition-colors hover:border-[#E5B63B]/60 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 shrink-0 text-[#00C2F0]" />
              <span>
                Click any registration ID to copy directly into procurement or accreditation forms.
              </span>
            </div>
            <button
              type="button"
              onClick={() => void copyFullLedger()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5B63B]/50 bg-[#E5B63B]/15 px-3 py-1.5 font-semibold text-[#F5D576] transition-colors hover:bg-[#E5B63B]/25"
            >
              {copiedAll ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Full Ledger Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy All Credentials</span>
                </>
              )}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#E5B63B]/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00C2F0]">
                      {cred.category}
                    </span>
                    {cred.isPlaceholder ? (
                      <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-200">
                        Placeholder
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-white">
                    {cred.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{cred.authority}</p>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#070816]/80 px-3 py-2">
                  <code className="truncate font-mono text-xs font-medium text-[#F5D576]">
                    {cred.value}
                  </code>
                  {!cred.isPlaceholder ? (
                    <button
                      type="button"
                      onClick={() => void copyValue(cred.id, cred.value)}
                      aria-label={`Copy ${cred.label}`}
                      className="shrink-0 rounded p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {copiedId === cred.id ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#09081B] px-6 py-4 text-xs text-slate-400">
          <span>
            Need certified true copies for RFP submission? Email{" "}
            <a
              href={`mailto:${COMPANY.contacts.email}`}
              className="font-medium text-[#F5D576] underline-offset-2 hover:underline"
            >
              {COMPANY.contacts.email}
            </a>
          </span>
          <button
            type="button"
            onClick={() => void closeAnimated()}
            className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white transition-colors hover:bg-white/20"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
