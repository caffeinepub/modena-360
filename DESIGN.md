# Design Brief

**Purpose**: Luxury entertainment production landing page. Premium cinematic brand experience for Modena 360 Productions — integrated brand activation platform.

## Aesthetic & Tone

**Aesthetic**: Premium Hollywood cinematic luxury. Editorial sophistication meets entertainment industry glamour. Dark, refined, aspirational.

**Tone**: Authoritative, sophisticated, entertainment-forward. No playfulness — pure elegance and industry credibility.

**Differentiation**: Gold shimmer accents on CTAs, glassmorphic overlays on cinematic imagery, refined editorial typography hierarchy, smooth scroll choreography.

## Color Palette (OKLCH)

| Token | L | C | H | CSS | Usage |
|-------|---|---|---|-----|-------|
| background | 0.07 | 0 | — | #050c14 | Page bg, primary surface |
| foreground | 0.76 | 0.02 | 255 | #acbfc3 | Body text, secondary elements |
| card | 0.15 | 0 | — | ~#1a2530 | Card/section backgrounds |
| primary | 0.68 | 0.12 | 70 | #e6d08e | Headlines, CTAs, gold accents |
| secondary | 0.25 | 0 | — | ~#3a3a3a | Muted sections |
| accent | 0.68 | 0.12 | 70 | #e6d08e | Accent borders, hover states |
| muted | 0.22 | 0 | — | ~#383838 | Disabled states |
| destructive | 0.65 | 0.19 | 22 | red | Error states (reserved) |

**Additional Brand Colors**:
- Copper/rust: oklch(0.55 0.10 35 / 1) — accent section backgrounds
- Dark teal: oklch(0.10 0 0 / 1) — footer, dark section variants
- Slate grey: oklch(0.20 0 0 / 1) — muted backgrounds, card depth

## Typography

| Tier | Font | Size | Weight | Usage |
|------|------|------|--------|-------|
| Display | Fraunces, serif | 3.5–5rem | 700–900 | H1 headlines, hero, brand presence |
| Heading | Fraunces, serif | 2–2.5rem | 600–800 | H2 section titles |
| Subheading | DM Sans, sans-serif | 1.25rem | 500–600 | H3, strong callouts |
| Body | DM Sans, sans-serif | 1rem | 400 | Paragraphs, default text |
| Caption | DM Sans, sans-serif | 0.875rem | 400 | Secondary, metadata, labels |
| Mono | System monospace | 0.875rem | 400 | Code, technical (reserved) |

## Elevation & Depth

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | none | Flat text, no lift |
| 1 | 0 1px 2px rgba(0,0,0,0.05) | Subtle dividers, low-emphasis elements |
| 2 | 0 10px 30px rgba(0,0,0,0.4) | Cards, elevated sections, glass overlays |
| 3 | 0 20px 40px rgba(0,0,0,0.5) | Hero sections, modal-like content |

## Structural Zones

| Zone | Background | Border | Usage |
|------|------------|--------|-------|
| Navbar | bg-background | border-b-2 border-primary | Dark with gold underline, logo + nav links |
| Hero | bg-background (full-bleed image) | — | Full-width, parallax-ready, image-driven |
| Content Section (default) | bg-background | — | Navy base, 1:1 alternation with accent sections |
| Content Section (accent) | bg-card + glass-dark | — | Glassmorphic overlay, #97554b copper underlay alternate |
| CTA Zone | bg-primary text-accent-foreground | border-2 border-primary | Gold button, hover lift, smooth transition |
| Footer | bg-secondary | border-t-2 border-primary | Dark teal variant, gold top border, light text |

## Spacing & Rhythm

**Vertical spacing**: 4rem (hero), 3rem (sections), 2rem (subsections), 1.5rem (paragraph spacing).

**Horizontal padding**: 2rem (mobile), 3rem (tablet), 4rem (desktop).

**Component density**: Loose — whitespace emphasizes luxury and breathing room between sections.

## Component Patterns

- **Buttons**: Primary gold (bg-primary, text-accent-foreground), hover state with shadow-elevated and opacity shift
- **Cards**: Dark bg-card with 2px border-primary on hover, glassmorphism overlay for images
- **Text overlays on images**: glass-dark utility (backdrop-blur + muted bg at 40% opacity)
- **Section dividers**: 2px border-primary, no full-width rule — accent lines at key points only
- **Links**: text-primary with underline on hover, smooth-transition

## Motion & Interactions

**Transition default**: All interactive elements use `transition-smooth` (0.3s cubic-bezier(0.4, 0, 0.2, 1)).

**Entrance animations**: 
- `animate-fade-in` (0.6s): Hero elements, headline reveals
- `animate-slide-up` (0.5s): Section elements on scroll

**Hover states**: CTAs lift via shadow-elevated, slight opacity increase on text links, border accent appears on cards.

**Scroll choreography**: Parallax-ready sections, staggered reveal of elements as user scrolls through page.

## Constraints & Anti-Patterns

- No rainbow palettes — only navy, gold, copper, slate, teal
- No generic blue — all interactive elements use branded gold
- No full-page gradients — depth via layered backgrounds and shadows
- No excessive animation — only smooth transitions and entrance reveals
- No sans-serif for headlines — Fraunces serif exclusively
- No opacity-based contrast — use lightness/chroma in OKLCH only
- No dark gray text on dark background — ensure 0.7+ L delta

## Signature Detail

**Gold shimmer hover effect on primary CTAs**: When hovering a `.bg-primary` button, add subtle opacity shift and shadow-elevated to create lift. Text remains gold foreground, creating a refined shimmer effect via light behavior — no glow or neon artifacts.

**Glassmorphic image overlays**: Text and CTA zones layered over cinematic imagery use `glass-dark` class — semi-transparent dark backdrop with blur, allowing hero image to show through while maintaining text readability and luxury aesthetic.

---

**Design System Owner**: Design (Tobias van Schneider aesthetic — premium, intentional, unforgettable)  
**Last Updated**: 2026-04-08  
**Version**: 1.0 (Foundation)
