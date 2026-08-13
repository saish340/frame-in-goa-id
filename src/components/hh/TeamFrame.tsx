import { forwardRef } from "react";
import { UserRound } from "lucide-react";
import { cleanHandle, type Member } from "@/lib/hh";

export const TeamFrameCard = forwardRef<
  HTMLDivElement,
  { teamName: string; members: Member[] }
>(function TeamFrameCard({ teamName, members }, ref) {
  const cols = members.length <= 2 ? 2 : 3;
  return (
    <div
      ref={ref}
      className="bg-deep relative w-full overflow-hidden border-[3px] border-primary p-6 sm:p-8"
      style={{ boxShadow: "var(--shadow-pass)" }}
    >
      <div className="grid-canvas absolute inset-0" />
      <div className="relative">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
          <div>
            <p className="font-display text-3xl leading-none font-bold text-primary sm:text-4xl">
              HH GOA 2026
            </p>
            <p className="label-mono text-muted-foreground pt-2">TEAM FRAME · #FRAMEINGOA</p>
          </div>
          <span className="label-mono bg-accent px-2.5 py-1 font-bold text-accent-foreground">
            TASK 01
          </span>
        </div>

        <p className="font-display pt-4 text-2xl font-bold text-primary">
          {(teamName.trim() || "Your Team").toUpperCase()}
        </p>

        <div
          className="grid gap-3 pt-4"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {members.map((m) => (
            <div key={m.id} className="bg-ink/50 border border-border p-2.5">
              <div className="w-full overflow-hidden border border-primary/50" style={{ aspectRatio: "1 / 1" }}>
                {m.photo ? (
                  <img src={m.photo} alt={m.name || "Team member"} className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <UserRound className="text-primary/30 h-8 w-8" />
                  </div>
                )}
              </div>
              <p className="label-mono pt-2 text-[10px] font-bold text-primary">
                {(m.name.trim() || "MEMBER").toUpperCase()}
              </p>
              <p className="label-mono text-accent pt-1 text-[8px]">
                @{(cleanHandle(m.handle) || "handle").toUpperCase()}
              </p>
              <p className="label-mono text-muted-foreground pt-1 text-[8px]">
                {(m.stack.trim() || "BUILDER").toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <div className="label-mono text-muted-foreground flex justify-between pt-5 text-[8px]">
          <span>HACKER HOUSE GOA · 28–31 OCT 2026</span>
          <span>2:47 PM STUDIO</span>
        </div>
      </div>
    </div>
  );
});
