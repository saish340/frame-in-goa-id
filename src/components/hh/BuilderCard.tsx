import { forwardRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { UserRound } from "lucide-react";
import { builderCode, cleanHandle, type Builder } from "@/lib/hh";

const up = (s: string, fallback: string) => (s.trim() ? s.trim().toUpperCase() : fallback);

export const BuilderCard = forwardRef<HTMLDivElement, { data: Builder }>(function BuilderCard(
  { data },
  ref,
) {
  const handle = cleanHandle(data.handle);
  const code = builderCode(handle || data.name);

  return (
    <div
      ref={ref}
      className="bg-deep relative w-full max-w-[380px] overflow-hidden border-[3px] border-primary"
      style={{ aspectRatio: "2 / 3", boxShadow: "var(--shadow-pass)" }}
    >
      <div className="grid-canvas absolute inset-0" />
      <div className="sun-rays absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full" />

      <div className="relative flex h-full flex-col p-[5.5%]">
        {/* masthead */}
        <div className="flex items-start justify-between border-b border-border pb-3">
          <div>
            <p className="font-display text-[2.1rem] leading-[0.82] font-bold tracking-tight text-primary">
              HH GOA
            </p>
            <p className="font-display text-[2.1rem] leading-[0.86] font-bold tracking-tight text-primary">
              2026
            </p>
            <p className="label-mono text-muted-foreground pt-1.5 text-[9px]">HACKER HOUSE GOA</p>
          </div>
          <div className="text-right">
            <span className="label-mono bg-accent px-2 py-1 text-[9px] font-bold text-accent-foreground">
              BUILDER ID
            </span>
            <p className="label-mono text-muted-foreground pt-2 text-[9px]">TASK 01</p>
          </div>
        </div>

        {/* photo */}
        <div className="relative mt-4 border-2 border-primary/70 bg-ink/70">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
            {data.photo ? (
              <img
                src={data.photo}
                alt={`${data.name || "Builder"} portrait`}
                className="h-full w-full object-cover"
                style={{ filter: "saturate(1.05) contrast(1.04)" }}
              />
            ) : (
              <div className="grid h-full w-full place-items-center gap-2">
                <UserRound className="text-primary/35 h-14 w-14" />
              </div>
            )}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.21 0.055 158 / 0.55), transparent 55%)",
              }}
            />
          </div>
          <p className="label-mono absolute bottom-1.5 left-2 text-[8px] text-primary/80">
            #FRAMEINGOA
          </p>
        </div>

        {/* identity */}
        <div className="pt-4">
          <p className="font-display text-[1.6rem] leading-[0.95] font-bold text-primary">
            {up(data.name, "YOUR NAME")}
          </p>
          <p className="label-mono text-accent pt-1.5 text-[10px] font-bold">
            @{(handle || "XUSERNAME").toUpperCase()}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 border-y border-border py-3">
          <Meta k="STACK / ROLE" v={up(data.stack, "—")} />
          <Meta k="CLASS" v={up(data.builderClass, "—")} />
          <Meta k="LOCATION" v={up(data.location, "—")} />
          <Meta k="EDITION" v="28–31 OCT" />
        </div>

        <p className="label-mono text-muted-foreground pt-3 text-[9px] normal-case tracking-[0.08em] italic">
          {data.tagline.trim() || "Building in public."}
        </p>

        {/* footer */}
        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="label-mono text-muted-foreground text-[8px]">BUILDER ID NO.</p>
            <p className="label-mono pt-1 text-[11px] font-bold text-primary">{code}</p>
            <p className="label-mono text-muted-foreground pt-2 text-[7px] tracking-[0.14em]">
              REV 01 · 2:47 PM STUDIO · GOA, IN
            </p>
          </div>
          <div className="bg-primary p-1.5">
            <QRCodeSVG
              value={`https://x.com/${handle || "hackerhousegoa"}`}
              size={54}
              bgColor="transparent"
              fgColor="#1c3f2b"
              level="M"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="label-mono text-muted-foreground text-[7.5px]">{k}</p>
      <p className="label-mono pt-1 text-[10px] font-bold text-primary">{v}</p>
    </div>
  );
}
