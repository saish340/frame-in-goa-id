# HH Goa 2026 — #FrameInGoa Task 1: Builder ID Card Generator

An official-style ID card generator for the **HH Goa 2026** hackathon, built with the visual language of [hhgoa.com](https://hhgoa.com/). Create a personal builder pass, generate a shareable QR code, and compose team frames for 2–6 members.

Live preview: [https://frame-in-goa-id.lovable.app](https://frame-in-goa-id.lovable.app)

## Built with

- **TanStack Start** — full-stack React framework
- **React 19 + TypeScript**
- **Tailwind CSS v4** — custom design tokens and theme
- **Vite 7**
- **Framer Motion** — micro-interactions and page transitions
- **Lucide React** — icons
- **html-to-image** — high-resolution PNG exports
- **qrcode** — QR generation

## Design

The UI follows the HH Goa “tropical retro” aesthetic:

- Deep forest green canvas background
- Sun-yellow display typography (Bodoni Moda)
- Hot-pink accents and woven ribbon-style borders
- Space Mono for technical data and labels
- 2:3 portrait pass format with photo, QR code, and builder metadata

## Features

- **Builder ID Card Generator** — enter full name, X username, stack, class, location, and tagline.
- **Drag & Drop Photo Upload** — auto-fit crop preview.
- **Live Preview** — instant updates as you type.
- **High-Res Export** — download the card as a 2× or 3× PNG.
- **X Share** — one-click share to X with pre-filled copy.
- **Team Frame Builder** — group 2–3 builders into a single themed frame.

## Development

```bash
bun install
bun dev
```

The app runs at `http://localhost:8080`.

## Project structure

```
src/
  components/hh/    # HH-styled primitives (BuilderCard, PhotoUpload, TeamFrame, etc.)
  hooks/            # Shared React hooks
  lib/              # Utilities, constants, and error handling
  routes/           # TanStack Start routes
  styles.css        # Tailwind v4 theme and design tokens
public/             # Static assets
```

## Credits

Built for the HH Goa 2026 `#FrameInGoa` builder campaign.
