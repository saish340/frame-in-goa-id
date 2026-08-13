export type Builder = {
  name: string;
  handle: string;
  stack: string;
  builderClass: string;
  location: string;
  tagline: string;
  photo: string | null;
};

export type Member = {
  id: string;
  name: string;
  handle: string;
  stack: string;
  photo: string | null;
};

export const emptyBuilder: Builder = {
  name: "",
  handle: "",
  stack: "",
  builderClass: "",
  location: "",
  tagline: "",
  photo: null,
};

export const sampleBuilder: Builder = {
  name: "Saish Vikas",
  handle: "@saish____",
  stack: "AI / ML Builder",
  builderClass: "AI Architect",
  location: "India",
  tagline: "Building intelligent systems.",
  photo: null,
};

export const cleanHandle = (h: string) => h.trim().replace(/^@+/, "");

export function builderCode(seed: string) {
  let hash = 0;
  const base = seed.trim().toUpperCase() || "FRAMEINGOA";
  for (let i = 0; i < base.length; i += 1) {
    hash = (hash * 31 + base.charCodeAt(i)) % 1679616;
  }
  return `HHG-26-${hash.toString(36).toUpperCase().padStart(4, "0")}`;
}

export const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read that image"));
    reader.readAsDataURL(file);
  });

export const SHARE_TEXT =
  "Just built my HH Goa 2026 Builder ID 🚀\n\n#FrameInGoa #HHGoa";

export function shareOnX() {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
