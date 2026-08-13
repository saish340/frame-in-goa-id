import { useRef, useState } from "react";
import { ImagePlus, RefreshCcw, Trash2, UploadCloud } from "lucide-react";
import { readFileAsDataUrl } from "@/lib/hh";
import { HHButton } from "./primitives";

const ACCEPT = "image/jpeg,image/png,image/webp";

export function PhotoUpload({
  photo,
  onChange,
  label = "UPLOAD YOUR PHOTO",
}: {
  photo: string | null;
  onChange: (v: string | null) => void;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const take = async (file?: File | null) => {
    if (!file) return;
    if (!/image\/(jpeg|png|webp)/.test(file.type)) {
      setError("JPG, PNG or WEBP only");
      return;
    }
    setError(null);
    onChange(await readFileAsDataUrl(file));
  };

  return (
    <div>
      <span className="label-mono text-muted-foreground block pb-2">{label}</span>
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          void take(e.dataTransfer.files?.[0]);
        }}
        className={`bg-deep/70 flex cursor-pointer items-center gap-4 border-2 border-dashed p-4 transition-colors ${
          over ? "border-primary bg-primary/10" : "border-border hover:border-primary/70"
        }`}
      >
        <div className="bg-ink/60 grid h-20 w-16 shrink-0 place-items-center overflow-hidden border border-border">
          {photo ? (
            <img src={photo} alt="Builder photo preview" className="h-full w-full object-cover" />
          ) : (
            <ImagePlus className="text-muted-foreground h-5 w-5" />
          )}
        </div>
        <div className="min-w-0">
          <p className="label-mono flex items-center gap-2 font-bold">
            <UploadCloud className="h-4 w-4" /> Drag & drop / click
          </p>
          <p className="label-mono text-muted-foreground pt-1.5 tracking-[0.18em]">
            JPG · PNG · WEBP — auto-fitted
          </p>
          {error && <p className="label-mono text-accent pt-1.5">{error}</p>}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => {
          void take(e.target.files?.[0]);
          e.target.value = "";
        }}
      />

      {photo && (
        <div className="flex gap-2 pt-3">
          <HHButton
            tone="outline"
            className="px-4 py-2"
            onClick={() => inputRef.current?.click()}
          >
            <RefreshCcw className="h-3.5 w-3.5" /> Replace
          </HHButton>
          <HHButton tone="outline" className="px-4 py-2" onClick={() => onChange(null)}>
            <Trash2 className="h-3.5 w-3.5" /> Remove
          </HHButton>
        </div>
      )}
    </div>
  );
}
