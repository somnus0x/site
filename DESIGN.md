# Design System: isagi0x.com

## 1. Visual Theme & Atmosphere

A dark-first personal site built on warm neutrals — deep charcoal backgrounds with cream text and a single burnt-orange accent. The design philosophy is typographic minimalism: serif display + serif body, generous whitespace, and zero ornamentation. No shadows, no gradients (except a barely-perceptible radial glow at 3% opacity), no decorative elements. Content is the decoration.

The warmth is deliberate — this is not the cold blue-gray dark mode of developer tools. The palette skews toward aged paper, amber lamplight, and worn leather. The effect is a terminal that reads like a book.

**Key Characteristics:**
- Dark-mode-native: `#0a0806` background (warm charcoal, not pure black)
- Serif-first typography: Instrument Serif (display) + Crimson Pro (body) — unusual for dev sites, intentional signal
- Single accent color: burnt orange `#d4943a` ("spice") for all interactive elements
- Warm border system: alpha-based on gold tones, not white — `rgba(212, 168, 100, 0.08–0.30)`
- No shadows anywhere. Flat design, depth through border opacity only
- Subtle fixed radial glow from top-center: `rgba(212, 148, 58, 0.03)`
- Monospace reserved exclusively for metadata: dates, tags, status badges, nav, footer

## 2. Color Palette & Roles

### Background Surfaces
- **Canvas** (`#0a0806`): Primary background. Warm charcoal — not cool, not pure black.
- **Surface** (`#16120e`): Card backgrounds, code blocks, elevated containers.
- **Surface-2** (`#1e1914`): Tech stack badges, nested surfaces.

### Text & Content
- **Text** (`#e8dcc8`): Primary. Warm cream, not pure white. High contrast on charcoal (WCAG AAA).
- **Dim** (`#9a8b74`): Secondary. Muted tan for descriptions, inactive nav, supporting text.
- **Faint** (`#6b5e4d`): Tertiary. Deep tan for dates, metadata, borders, footer links.

### Accent
- **Spice** (`#d4943a`): The only dominant accent. Links, active nav, hover states, `<strong>` in articles, focus outlines. Burnt orange — warm, not aggressive.
- **Gold** (`#c4a265`): Subsection headers (e.g., "essays" label on writing page). Lighter, less saturated than spice.

### Reserved (defined, deploy when needed)
- **Safe** (`#8b9a5e`): Muted olive green. Currently used for "active" project status only.
- **Crimson** (`#c23030`): Error/warning. Unused — available for future status indicators.
- **Water** (`#4a7b8c`): Muted teal. Unused — reserved.
- **Violet** (`#8b7bb5`): Muted purple. Unused — reserved.
- **Sand** (`#a89b6a`): Muted ochre. Unused — reserved.

### Borders
- **Base** (`rgba(212, 168, 100, 0.10)`): Default card/container borders. Gold-tinted, not white.
- **Hover** (`rgba(212, 168, 100, 0.18)`): Card hover state. Subtle brightening.
- **Strong** (`rgba(212, 168, 100, 0.30)`): Emphasis borders. Rarely used.

### Selection
- **Text selection** (`rgba(212, 148, 58, 0.30)`): Warm orange tint matching the accent palette.

## 3. Typography Rules

### Font Families
- **Display**: `"Instrument Serif"`, Georgia, serif — Headlines, page titles, card titles
- **Body**: `"Crimson Pro"`, Georgia, serif — Paragraphs, descriptions, all reading text
- **Mono**: `ui-monospace`, `"JetBrains Mono"`, `"Berkeley Mono"`, `"SF Mono"`, Menlo, Monaco, `"Cascadia Code"`, `"Roboto Mono"`, `"Courier New"` — Navigation, dates, status, tags, code

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Title | Instrument Serif | 3rem → 3.75rem | normal | tight | -0.03em | Homepage "isagi", responsive |
| Page Title | Instrument Serif | 2.25rem | normal | tight | -0.02em | Archive page headers |
| Card Title | Instrument Serif | 1.25rem | normal | snug | -0.01em | Project/writing card titles |
| Article H1 | Instrument Serif | 2.5rem | normal | 1.2 | -0.02em | Long-form content |
| Article H2 | Instrument Serif | 1.75rem | normal | 1.3 | -0.01em | Sub-sections |
| Article H3 | Instrument Serif | 1.25rem | normal | 1.4 | normal | Minor headings |
| Body | Crimson Pro | 18px | 400 | 1.75 | normal | Default reading text |
| Body Large | Crimson Pro | 1.125rem | 400 | loose (2.0) | normal | Homepage bio paragraphs |
| Description | Crimson Pro | 18px | 400 | 1.75 | normal | Card descriptions, in dim color |
| Nav | Mono | 0.875rem | 400 | normal | wide (0.05em) | Top navigation bar |
| Metadata | Mono | 0.75rem | 400 | normal | wider (0.1em) | Dates, status, roles (uppercase) |
| Tag | Mono | 0.75rem | 400 | normal | normal | Tech stack badges |
| Section Label | Mono | 0.875rem | 400 | normal | normal | "raw", "essays" section headers |
| Footer | Mono | 0.875rem | 400 | normal | normal | Footer links |

### Principles
- **Serif for reading, mono for metadata.** No sans-serif anywhere. The serif pairing (display + body) is the visual signature.
- **Negative letter-spacing on display sizes.** Instrument Serif at large sizes needs compression: `-0.03em` at hero, `-0.02em` at page titles, `-0.01em` at card titles. Below 1.25rem, use default tracking.
- **Weight restraint.** Instrument Serif is always `normal` weight — never bold. Emphasis comes from size and color, not weight. Only exception: `<strong>` in article prose (bold + spice color).
- **`tabular-nums` globally.** All numeric content aligns in columns (dates, stats).

## 4. Component Patterns

### Cards (Projects, Writing, Reading)
- Background: `bg-surface` (`#16120e`)
- Border: `1px solid var(--color-border)` — gold-tinted at 10% opacity
- Radius: `rounded-xl` (12px)
- Padding: `p-7` (28px)
- Hover: border shifts to `--color-border-hover` (18% opacity) + background shifts to `bg-surface-2`
- Transition: `transition-colors` (150ms default)
- Shadow: none. Never.

### Status Badges
- Font: `font-mono text-xs`
- Active: `text-safe` (olive green `#8b9a5e`)
- Shipped: `text-spice` (burnt orange `#d4943a`)
- Archived: `text-faint` (deep tan `#6b5e4d`)

### Tech Stack Tags
- Background: `bg-surface-2` (`#1e1914`)
- Text: `text-faint`
- Font: `font-mono text-xs`
- Padding: `px-2 py-0.5`
- Radius: `rounded` (4px)
- Layout: `flex flex-wrap gap-2`

### Links
- Color: `var(--color-spice)` — always
- Underline: none by default, underline on hover
- Exception: `.no-underline` class suppresses hover underline for nav-style links

### Navigation
- Position: top of page, centered
- Font: `font-mono text-sm tracking-wide`
- Separator: `/` in `text-faint` with `mx-4` spacing
- Active state: `text-spice`
- Inactive state: `text-dim`, hover → `text-spice`

### Footer
- Separator: `border-t border-border`
- Margin: `mt-32` above border
- Padding: `pt-8 pb-12`
- Text: `text-faint text-sm font-mono`
- Links: `hover:text-spice`

### Inline Code
- Background: `var(--color-surface)`
- Padding: `0.125rem 0.5rem`
- Radius: `0.375rem` (6px)
- Font: mono, `0.875rem`

### Code Blocks
- Background: `var(--color-surface)`
- Border: `1px solid var(--color-border)`
- Padding: `1rem`
- Radius: `0.75rem` (12px)
- Overflow: `overflow-x: auto`

## 5. Layout & Spacing

### Container
- Default: `max-w-[44rem]` (704px) — reading pages
- Wide: `max-w-[64rem]` (1024px) — projects, homepage
- Centering: `mx-auto`
- Padding: `px-8 sm:px-12 md:px-20 lg:px-24` (responsive)

### Vertical Rhythm
- Hero paragraphs: `space-y-5`
- Archive sections: `space-y-8`
- Card lists: `space-y-6`
- Writing cards: `space-y-10`
- Footer top margin: `mt-32`

### Page Structure
```
nav (centered, mono, pt-10 md:pt-14, pb-16 md:pb-20)
  main (max-w container, flex-1)
    content
  footer (mt-32, border-t, centered)
```

## 6. Animations & Interactions

### Fade-Up Entry
```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up { animation: fade-up 0.5s ease-out both; }
```

### Staggered Delays
- `.delay-1` through `.delay-5`: 0.1s increments
- Applied to cards and content blocks for sequential reveal

### Reduced Motion
All animations suppressed via `prefers-reduced-motion: reduce`. Duration set to 0.01ms.

### Hover States
- Cards: border opacity increase (0.10 → 0.18) + subtle background shift
- Links: underline appears
- Nav links: color shift (dim → spice)
- Footer links: color shift (faint → spice)
- Transition: `transition-colors` (CSS default 150ms)

### Focus States
- Outline: `2px solid var(--color-spice)`
- Offset: `2px`
- Radius: `2px`
- Non-keyboard focus: outline suppressed via `:focus:not(:focus-visible)`

## 7. Background & Atmosphere

### Body Gradient
```css
background-image: radial-gradient(
  ellipse at 50% 0%,
  rgba(212, 148, 58, 0.03) 0%,
  transparent 70%
);
background-attachment: fixed;
```
A barely-visible warm glow from the top of the viewport. Fixed position means it doesn't scroll. Reinforces the warm-dark atmosphere without being detectable on conscious inspection.

### Scrollbar
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--color-faint); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-dim); }
```
Thin, warm-toned scrollbar matching the palette. Invisible track, visible thumb.

## 8. Design Principles (Do / Don't)

### Do
- Use spice as the single accent. Everything interactive is spice.
- Use serif for all reading content. The serif pairing IS the brand.
- Use monospace only for metadata: dates, status, tags, nav, code.
- Breathe. Generous margins, generous line-height, generous padding.
- Flat. No shadows, no elevation beyond border opacity changes.
- Warm everything. Borders are gold-tinted, not white. Background is warm charcoal, not blue-black.

### Don't
- Don't add sans-serif fonts. The absence of sans-serif is intentional.
- Don't add shadows or elevation to cards. Flatness is the aesthetic.
- Don't use pure white (#fff) for text. The cream (#e8dcc8) is the text color.
- Don't use pure black (#000) for backgrounds. The warm charcoal (#0a0806) is warmer by design.
- Don't use more than one accent color at a time. Spice or nothing.
- Don't add decorative elements (icons, illustrations, dividers beyond simple borders).
- Don't bold Instrument Serif. Size and color create hierarchy, not weight.

## 9. Accessibility

- **Contrast**: Text (#e8dcc8) on Background (#0a0806) = 13.8:1 (WCAG AAA)
- **Dim text**: Dim (#9a8b74) on Background (#0a0806) = 5.2:1 (WCAG AA)
- **Focus indicators**: 2px spice outline, always visible for keyboard navigation
- **Reduced motion**: All animations respect `prefers-reduced-motion`
- **Font sizing**: Base 18px, never smaller than 12px (mono metadata)
- **Tabular nums**: Numbers always align for scannability

## 10. Responsive Behavior

Mobile-first. Same visual hierarchy at all sizes — only padding, font size, and container width change.

| Breakpoint | Container Padding | Hero Title | Page Title |
|------------|-------------------|------------|------------|
| Default | `px-8` (32px) | `text-5xl` (3rem) | `text-4xl` (2.25rem) |
| `sm` (640px) | `px-12` (48px) | — | — |
| `md` (768px) | `px-20` (80px) | `text-6xl` (3.75rem) | — |
| `lg` (1024px) | `px-24` (96px) | — | — |

No layout changes. No hamburger menus. No collapsing columns. The content reflows naturally because it's single-column everywhere.
