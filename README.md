# HH Goa Builder ID

Build the HH Goa 2026 **#FrameInGoa Task 1 – Builder ID Card Generator**.

## CRITICAL DESIGN REQUIREMENT

The website must visually follow the **official HH Goa website's current design language**.

Before writing the UI, inspect the official HH Goa website:

https://hhgoa.com/

Analyze and reproduce its visual design system:

* Background colors
* Primary and secondary colors
* Typography
* Font weights
* Heading sizes
* Letter spacing
* Button styles
* Border treatments
* Corner radius
* Shadows
* Gradients
* Decorative graphics
* Grid/background patterns
* Navigation style
* Spacing system
* Animation style
* Hover effects
* Overall visual density

Do NOT introduce a generic SaaS dashboard style.
Do NOT use a random neon cyberpunk theme.
Do NOT use Bootstrap-style cards.
Do NOT make it look like a normal college ID-card generator.

The final website should feel like it belongs to the **same HH Goa 2026 visual ecosystem**.

Do not copy source code, copyrighted artwork, or another participant's implementation. Recreate the visual language using original code and components.

---

# WEBSITE

Create a responsive React + Vite application.

Recommended stack:

* React
* Vite
* Tailwind CSS
* Lucide React
* Framer Motion
* html-to-image
* QR code library

No backend is required.

---

# PAGE 1 — BUILDER ID GENERATOR

Create a full-screen HH Goa styled builder interface.

### Header

Use the same visual treatment as the official HH Goa website.

Include:

HH GOA 2026

#FrameInGoa

TASK 01

Navigation/action elements should follow the same spacing, typography and button treatment as the official site.

---

# HERO SECTION

Large HH Goa-style headline:

BUILD YOUR
BUILDER ID

Supporting text:

Create your HH Goa 2026 Builder ID,
customize your identity,
and share your frame.

Use the same typography hierarchy and visual rhythm as the official HH Goa website.

Add a subtle animated background/decorative element matching the official site's visual language.

---

# BUILDER INFORMATION PANEL

Create the input section using the same component language as HH Goa.

Fields:

Full Name
X / Twitter Username
Stack / Role
Builder Class
Location
Tagline

Example:

Full Name:
Saish Vikas

X:
@saish____

Stack:
AI / ML Builder

Builder Class:
AI Architect

Location:
India

Tagline:
Building intelligent systems.

Use HH Goa-style inputs.

Avoid standard white form fields unless the official site uses them.

---

# PHOTO UPLOAD

Create a premium photo upload component.

Text:

UPLOAD YOUR PHOTO

Support:

JPG
PNG
WEBP

Requirements:

* Drag and drop
* Click to upload
* Automatic image fitting
* No manual cropping required
* Replace image
* Remove image
* Instant live preview

The uploaded photo must automatically fit the ID card.

---

# LIVE BUILDER ID CARD

This is the centerpiece of the page.

Design the card using the **same colors, typography, graphic language, border treatment and visual personality as the official HH Goa website**.

Card ratio:

Approximately 2:3.

The card should feel like an official HH Goa event credential.

Include:

HH GOA
2026

HACKER HOUSE GOA

BUILDER ID

[PROFILE PHOTO]

FULL NAME

@XUSERNAME

STACK / ROLE

BUILDER CLASS

LOCATION

#FrameInGoa

TASK 01

Unique Builder ID

QR CODE

Small decorative technical information.

---

# ID CARD DESIGN

Do not make the card look like a conventional university ID card.

Instead, make it look like a premium **HH Goa event pass / builder credential**.

Use the official HH Goa website as the primary visual reference.

Important:

The card should have:

* strong typography
* controlled spacing
* distinctive HH Goa visual identity
* subtle decorative elements
* professional information hierarchy
* high-quality photo treatment
* premium event-pass appearance

Avoid visual clutter.

---

# LIVE PREVIEW

Every form field must update the ID card instantly.

Example:

User enters:

Saish Vikas

The card immediately displays:

SAISH VIKAS

If the user changes:

AI / ML Builder

the card updates immediately.

Photo uploads must appear immediately.

---

# ACTION BUTTONS

Add:

GENERATE BUILDER ID

DOWNLOAD ID CARD

SHARE ON X

RESET

Buttons must use the same visual style as the official HH Goa website.

---

# DOWNLOAD

When the user clicks:

DOWNLOAD ID CARD

Export only the ID card.

Requirements:

* PNG
* High resolution
* 2x or 3x rendering
* No surrounding UI
* No buttons
* No form
* No page background
* Preserve uploaded photo quality
* Preserve QR code
* Preserve typography

Filename:

HHGOA-Builder-ID-[username].png

---

# SHARE ON X

Create an X sharing function.

Default text:

Just built my HH Goa 2026 Builder ID 🚀

#FrameInGoa #HHGoa

The share action should open X with the generated text.

---

# TEAM FRAME

Add a second feature:

TEAM FRAME

Allow users to add 2–6 team members.

Each member:

Photo
Name
X username
Stack / Role

Generate a single HH Goa-styled team frame.

The team frame must use the same visual design system as the individual Builder ID.

---

# ANIMATION

Match the animation philosophy of the official HH Goa website.

Use subtle:

* fade-ins
* slide transitions
* hover interactions
* image transitions
* button interactions
* background motion

Do not add excessive animations.

Animations should feel intentional and premium.

---

# RESPONSIVE DESIGN

Desktop:

Left:
Builder controls

Right:
Large live ID preview

Mobile:

Header
Hero
Builder form
ID preview
Action buttons
Team Frame

The ID card must never overflow the screen.

---

# DESIGN SYSTEM

Create reusable design tokens based on the official HH Goa website.

For example:

--background
--foreground
--primary
--secondary
--accent
--border
--muted
--radius
--shadow

Do NOT blindly use these example names/values.

Determine the actual visual values from the official HH Goa website.

---

# IMPORTANT

The official HH Goa website is the PRIMARY visual reference.

Before completing the implementation:

1. Inspect https://hhgoa.com/
2. Identify its current visual design.
3. Recreate that design language.
4. Apply it consistently to the generator.
5. Make the Builder ID look like it belongs to HH Goa.
6. Keep the implementation original.
7. Make the result polished enough to be used as an actual #FrameInGoa submission.

The final result should look like:

"An official HH Goa 2026 tool"

rather than:

"A generic ID card generator."

Make the application fully functional, responsive, polished and ready to deploy on Vercel.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://frame-in-goa-id.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e063d94d-4366-4f83-82e7-3830317efbfb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
