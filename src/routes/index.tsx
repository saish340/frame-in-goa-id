import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import { Download, Plus, RotateCcw, Sparkles, Trash2, Twitter, Users } from "lucide-react";
import {
  builderCode,
  cleanHandle,
  emptyBuilder,
  sampleBuilder,
  shareOnX,
  type Builder,
  type Member,
} from "@/lib/hh";
import { BuilderCard } from "@/components/hh/BuilderCard";
import { TeamFrameCard } from "@/components/hh/TeamFrame";
import { PhotoUpload } from "@/components/hh/PhotoUpload";
import { HHButton, HHField, SectionTag } from "@/components/hh/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HH Goa 2026 Builder ID Generator · #FrameInGoa Task 01" },
      {
        name: "description",
        content:
          "Create your Hacker House Goa 2026 Builder ID: add your details and photo, preview it live, download a high-res pass and build a team frame.",
      },
      { property: "og:title", content: "HH Goa 2026 Builder ID Generator · #FrameInGoa" },
      {
        property: "og:description",
        content:
          "Design your official-style HH Goa 2026 builder credential, download it in high resolution and share it on X.",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const newMember = (): Member => ({
  id: Math.random().toString(36).slice(2),
  name: "",
  handle: "",
  stack: "",
  photo: null,
});

async function exportNode(node: HTMLElement, filename: string) {
  const dataUrl = await toPng(node, {
    pixelRatio: 3,
    cacheBust: true,
    backgroundColor: undefined,
  });
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

function Index() {
  const [builder, setBuilder] = useState<Builder>(emptyBuilder);
  const [generated, setGenerated] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<Member[]>([newMember(), newMember()]);

  const cardRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Builder) => (v: string) => setBuilder((b) => ({ ...b, [k]: v }));
  const code = useMemo(
    () => builderCode(cleanHandle(builder.handle) || builder.name),
    [builder.handle, builder.name],
  );

  const download = async (ref: typeof cardRef, name: string, key: string) => {
    if (!ref.current) return;
    setBusy(key);
    try {
      await exportNode(ref.current, name);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* HEADER */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-4">
            <p className="font-display text-xl leading-none font-bold tracking-tight text-primary">
              HH GOA <span className="text-accent">2026</span>
            </p>
            <span className="label-mono text-muted-foreground hidden sm:inline">#FrameInGoa</span>
          </div>
          <div className="flex items-center gap-3">
            <SectionTag>TASK 01</SectionTag>
            <HHButton tone="solid" className="px-5 py-2.5" onClick={shareOnX}>
              SHARE
            </HHButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-canvas absolute inset-0" />
        <motion.div
          className="sun-rays absolute -bottom-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <motion.h1
            {...fadeUp}
            className="font-display text-[clamp(2.9rem,11vw,8rem)] leading-[0.84] font-bold tracking-[-0.02em] text-primary"
          >
            BUILD YOUR
            <br />
            BUILDER ID
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="label-mono text-muted-foreground max-w-md pt-7 leading-[1.9] normal-case tracking-[0.1em]"
          >
            Create your HH Goa 2026 Builder ID, customize your identity, and share your frame.
          </motion.p>
          <div className="label-mono text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 pt-8">
            <span>GOA, INDIA · 28 – 31 OCT 2026</span>
            <span className="text-primary">{code}</span>
          </div>
        </div>
      </section>

      {/* BUILDER */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 pb-8">
              <Sparkles className="h-4 w-4 text-accent" />
              <h2 className="font-display text-2xl font-bold text-primary">Builder Information</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <HHField
                label="Full Name"
                placeholder="Saish Vikas"
                value={builder.name}
                onChange={(e) => set("name")(e.target.value)}
              />
              <HHField
                label="X / Twitter Username"
                placeholder="@saish____"
                value={builder.handle}
                onChange={(e) => set("handle")(e.target.value)}
              />
              <HHField
                label="Stack / Role"
                placeholder="AI / ML Builder"
                value={builder.stack}
                onChange={(e) => set("stack")(e.target.value)}
              />
              <HHField
                label="Builder Class"
                placeholder="AI Architect"
                value={builder.builderClass}
                onChange={(e) => set("builderClass")(e.target.value)}
              />
              <HHField
                label="Location"
                placeholder="India"
                value={builder.location}
                onChange={(e) => set("location")(e.target.value)}
              />
              <HHField
                label="Tagline"
                placeholder="Building intelligent systems."
                value={builder.tagline}
                onChange={(e) => set("tagline")(e.target.value)}
              />
            </div>

            <div className="pt-8">
              <PhotoUpload
                photo={builder.photo}
                onChange={(photo) => setBuilder((b) => ({ ...b, photo }))}
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-9">
              <HHButton tone="pink" onClick={() => setGenerated(true)}>
                GENERATE BUILDER ID
              </HHButton>
              <HHButton
                disabled={busy === "card"}
                onClick={() =>
                  download(
                    cardRef,
                    `HHGOA-Builder-ID-${cleanHandle(builder.handle) || "builder"}.png`,
                    "card",
                  )
                }
              >
                <Download className="h-3.5 w-3.5" />
                {busy === "card" ? "EXPORTING…" : "DOWNLOAD ID CARD"}
              </HHButton>
              <HHButton tone="outline" onClick={shareOnX}>
                <Twitter className="h-3.5 w-3.5" /> SHARE ON X
              </HHButton>
              <HHButton
                tone="outline"
                onClick={() => {
                  setBuilder(emptyBuilder);
                  setGenerated(false);
                }}
              >
                <RotateCcw className="h-3.5 w-3.5" /> RESET
              </HHButton>
              <HHButton tone="outline" onClick={() => setBuilder(sampleBuilder)}>
                FILL SAMPLE
              </HHButton>
            </div>
            {generated && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="label-mono text-accent pt-5"
              >
                ID {code} locked in — download or share it.
              </motion.p>
            )}
          </motion.div>

          {/* LIVE CARD */}
          <motion.div {...fadeUp} className="lg:sticky lg:top-10 lg:self-start">
            <div className="label-mono text-muted-foreground flex items-center justify-between pb-4">
              <span>LIVE PREVIEW</span>
              <span className="text-primary">2:47 PM STUDIO</span>
            </div>
            <div className="flex justify-center">
              <BuilderCard ref={cardRef} data={builder} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM FRAME */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4 pb-8">
            <div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-accent" />
                <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  Team Frame
                </h2>
              </div>
              <p className="label-mono text-muted-foreground pt-3">2 – 6 BUILDERS · ONE FRAME</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <HHButton
                tone="outline"
                disabled={members.length >= 6}
                onClick={() => setMembers((m) => [...m, newMember()])}
              >
                <Plus className="h-3.5 w-3.5" /> ADD MEMBER
              </HHButton>
              <HHButton
                disabled={busy === "team"}
                onClick={() =>
                  download(
                    teamRef,
                    `HHGOA-Team-Frame-${teamName.trim().replace(/\s+/g, "-").toLowerCase() || "team"}.png`,
                    "team",
                  )
                }
              >
                <Download className="h-3.5 w-3.5" />
                {busy === "team" ? "EXPORTING…" : "DOWNLOAD TEAM FRAME"}
              </HHButton>
            </div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div {...fadeUp} className="space-y-8">
              <HHField
                label="Team Name"
                placeholder="Signal Over Noise"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
              {members.map((m, i) => (
                <div key={m.id} className="border-t border-border pt-6">
                  <div className="label-mono flex items-center justify-between pb-4">
                    <span className="text-primary font-bold">MEMBER {String(i + 1).padStart(2, "0")}</span>
                    {members.length > 2 && (
                      <button
                        onClick={() => setMembers((all) => all.filter((x) => x.id !== m.id))}
                        className="text-muted-foreground hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> REMOVE
                      </button>
                    )}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-3">
                    <HHField
                      label="Name"
                      placeholder="Builder name"
                      value={m.name}
                      onChange={(e) =>
                        setMembers((all) =>
                          all.map((x) => (x.id === m.id ? { ...x, name: e.target.value } : x)),
                        )
                      }
                    />
                    <HHField
                      label="X Username"
                      placeholder="@handle"
                      value={m.handle}
                      onChange={(e) =>
                        setMembers((all) =>
                          all.map((x) => (x.id === m.id ? { ...x, handle: e.target.value } : x)),
                        )
                      }
                    />
                    <HHField
                      label="Stack / Role"
                      placeholder="Frontend"
                      value={m.stack}
                      onChange={(e) =>
                        setMembers((all) =>
                          all.map((x) => (x.id === m.id ? { ...x, stack: e.target.value } : x)),
                        )
                      }
                    />
                  </div>
                  <div className="pt-5">
                    <PhotoUpload
                      label="MEMBER PHOTO"
                      photo={m.photo}
                      onChange={(photo) =>
                        setMembers((all) => all.map((x) => (x.id === m.id ? { ...x, photo } : x)))
                      }
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="lg:sticky lg:top-10 lg:self-start">
              <TeamFrameCard ref={teamRef} teamName={teamName} members={members} />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="label-mono text-muted-foreground mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-5 py-8 sm:px-8">
          <span>HACKER HOUSE GOA 2026 · #FRAMEINGOA TASK 01</span>
          <span>GOA, INDIA · 28 – 31 OCT 2026</span>
        </div>
      </footer>
    </div>
  );
}
