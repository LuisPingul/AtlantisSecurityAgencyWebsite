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
    <section className="bg-[#F5F3EE] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology & Field Supervision"
          title="Technology Supports—Not Replaces—"
          highlight="The Professional Guard"
          description="Modern cameras and sensors are only as effective as the trained, supervised officer responding on the ground. We combine real-time surveillance with unannounced field inspections."
        />

        {/* Split Block 1: Tech + Human Security */}
        <div className="mt-12 grid items-center gap-8 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <figure className="overflow-hidden rounded-md border border-slate-200 bg-[#081120]">
              <div className="relative aspect-[16/10.5] w-full">
                <Image
                  src="/images/operations/cctv-command.jpg"
                  alt="Atlantis surveillance operator monitoring multi-feed CCTV displays"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-white/10 bg-[#0C182E] px-4 py-2.5 text-xs text-slate-200">
                <span className="font-mono font-semibold text-[#E3BC5A]">
                  COMMAND INTEGRATION:
                </span>{" "}
                Synchronized CCTV monitoring with instant radio dispatch to ground officers.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#8A6510]">
              <Radio className="h-4 w-4" aria-hidden="true" />
              <span>Integrated Tactical Stack</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold text-[#0B1324]">
              Human Judgment Backed by Live Telemetry
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
              Our guards operate inside a connected communication and surveillance loop—preventing blind spots while keeping courteous human professionals at every threshold.
            </p>

            <div className="mt-6 grid gap-5 border-t border-slate-200 pt-5 sm:grid-cols-2">
              {TECH_HUMAN_PILLARS.map((item) => (
                <div key={item.title} className="border-l-2 border-[#C89B2B] pl-3.5">
                  <p className="text-sm font-bold text-[#0B1324]">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#475569]">
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
          <div className="flex flex-col justify-between rounded-lg border border-[#0C182E] bg-[#0C182E] p-6 text-white sm:p-8 lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E3BC5A]">
                <Eye className="h-4 w-4 text-[#C89B2B]" aria-hidden="true" />
                <span>Field Supervision · Consistency Is Managed</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white">
                Two (2) Full-Time Inspectors Conducting Unannounced Spot Checks
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Discipline doesn&apos;t happen by chance. Our Security Operation Officers and two dedicated full-time field inspectors conduct routine and unannounced 24/7 post inspections.
              </p>

              <ul className="mt-6 divide-y divide-white/10 border-t border-white/10">
                {SUPERVISION_PILLARS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 py-3.5">
                    <ClipboardCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E3BC5A]"
                      aria-hidden="true"
                    />
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
          <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6510]">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                <span>Professional Training &amp; Campus Seminars</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#0B1324]">
                6 Core Competency Pillars + Room-to-Room Safety Briefings
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Beyond rigorous pre-deployment drills, Atlantis conducts active Room-to-Room Safety Briefings and Institutional Awareness Seminars for partner schools and organizations.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
                {TRAINING_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6510]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#0B1324]">
                        {pillar.title}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#475569]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Seminar Photo Strip */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-slate-200">
                <Image
                  src="/images/operations/campus-seminar-2.jpg"
                  alt="Atlantis security awareness seminar at Jose Maria College Foundation College of Law"
                  fill
                  sizes="(max-width: 768px) 50vw, 22vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-slate-200">
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

            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-xs font-medium text-[#475569]">
                Documented at Jose Maria College Foundation, Inc.
              </span>
              <Link
                href="/welfare-standards"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0C182E] hover:text-[#8A6510]"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
