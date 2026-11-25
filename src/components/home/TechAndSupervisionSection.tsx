import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  GraduationCap,
  Radio,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  SUPERVISION_PILLARS,
  TECH_HUMAN_PILLARS,
  TRAINING_PILLARS,
} from "@/data/welfare";

export function TechAndSupervisionSection() {
  return (
    <section className="bg-[#F6F5F0] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology + Human Security"
          title="Technology Supports—Not Replaces—"
          highlight="The Professional Guard"
          description="Modern cameras and sensors are only as effective as the trained, supervised officer responding on the ground. We combine real-time surveillance with unannounced field inspections."
        />

        {/* Split Block 1: Tech + Human Security */}
        <div className="mt-12 grid items-center gap-8 rounded-2xl border border-[#1B1654]/12 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-[#1B1654]/15 bg-[#070816]">
              <Image
                src="/images/operations/cctv-command.jpg"
                alt="Atlantis surveillance operator monitoring multi-feed CCTV displays"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/15 bg-[#09081E]/90 px-4 py-2.5 text-xs text-white backdrop-blur-md">
                <span className="font-mono font-semibold text-[#00C2F0]">
                  LIVE COMMAND INTEGRATION:
                </span>{" "}
                Synchronized CCTV monitoring with instant radio dispatch to ground officers.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1B1654]">
              <Radio className="h-4 w-4 text-[#C6921E]" />
              <span>Integrated Tactical Stack</span>
            </div>
            <h3 className="mt-2 text-2xl font-extrabold text-[#11102B]">
              Human Judgment Backed by Live Telemetry
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#4A4968]">
              Our guards operate inside a connected communication and surveillance loop—preventing blind spots while keeping courteous human professionals at every threshold.
            </p>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {TECH_HUMAN_PILLARS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#1B1654]/10 bg-[#F6F5F0] p-4"
                >
                  <p className="text-sm font-bold text-[#11102B]">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#4A4968]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Split Block 2: Strong Supervision + 6-Pillar Training & Seminars */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Strong Supervision */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5B63B]/35 bg-[#120F34] p-6 text-white sm:p-8 lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#F5D576]">
                <Eye className="h-4 w-4 text-[#E5B63B]" />
                <span>Strong Supervision · Consistency Is Managed</span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold text-white">
                Two (2) Full-Time Inspectors Conducting Unannounced Spot Checks
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Discipline doesn&apos;t happen by chance. Our Security Operation Officers and two dedicated full-time field inspectors conduct routine and unannounced 24/7 post inspections.
              </p>

              <ul className="mt-6 space-y-3">
                {SUPERVISION_PILLARS.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                  >
                    <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#00C2F0]" />
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Training & Room-to-Room Briefings */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#1B1654]/12 bg-white p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#1B1654]">
                <GraduationCap className="h-4 w-4 text-[#C6921E]" />
                <span>Professional Training &amp; Campus Seminars</span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold text-[#11102B]">
                6 Core Competency Pillars + Room-to-Room Safety Briefings
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4968]">
                Beyond rigorous pre-deployment drills, Atlantis conducts active Room-to-Room Safety Briefings and Institutional Awareness Seminars for partner schools and organizations.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {TRAINING_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-2 rounded-xl border border-[#1B1654]/10 bg-[#F6F5F0]/80 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16123D]" />
                    <div>
                      <p className="text-xs font-bold text-[#11102B]">
                        {pillar.title}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#4A4968]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Seminar Photo Strip */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#1B1654]/15">
                <Image
                  src="/images/operations/campus-seminar-2.jpg"
                  alt="Atlantis security awareness seminar at Jose Maria College Foundation College of Law"
                  fill
                  sizes="(max-width: 768px) 50vw, 22vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#1B1654]/15">
                <Image
                  src="/images/operations/campus-seminar-1.jpg"
                  alt="Atlantis room-to-room student safety briefing session"
                  fill
                  sizes="(max-width: 768px) 50vw, 22vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#1B1654]/10 pt-4">
              <span className="text-xs font-medium text-[#4A4968]">
                Documented at Jose Maria College Foundation, Inc.
              </span>
              <Link
                href="/welfare-standards"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#16123D] hover:text-[#B8861A]"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
