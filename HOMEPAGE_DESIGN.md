# FORMA Architectural Glass — Homepage Design & Copy

## Design Language (Homepage Reference)

**Color Palette:**
- Background: `#0A0A0A` (near-black) for hero; `#F5F3EF` (warm white) for content sections
- Accent: `#C8A96E` (brushed brass/warm gold) — used sparingly for highlights, CTAs, hover states
- Text Primary: `#1A1A1A` on light; `#F5F3EF` on dark
- Text Secondary: `#6B6560` (warm gray)
- Divider: `#E2DDD8`

**Typography:**
- Display / Headlines: `Cormorant Garamond` — high-contrast serif, architectural, elegant
- Body / UI: `DM Sans` — clean, neutral, modern grotesque
- Accent / Labels: `DM Mono` — for specs, measurements, product codes

**Motion Principles:**
- Fade + translate-Y on scroll reveal (subtle, 400ms ease-out)
- No parallax — it hurts performance and CLS
- Hover states: underline slides in from left (not color flash)
- Page transitions: opacity fade only

---

## Page Layout Structure

```
┌─────────────────────────────────────────────┐
│  SECTION 1: Navigation Bar                  │
├─────────────────────────────────────────────┤
│  SECTION 2: Hero                            │  ← Full viewport height
├─────────────────────────────────────────────┤
│  SECTION 3: Category Grid                   │  ← 4 product families
├─────────────────────────────────────────────┤
│  SECTION 4: Brand Statement / Manifesto     │  ← Full-width text break
├─────────────────────────────────────────────┤
│  SECTION 5: Value Propositions              │  ← 4 differentiators
├─────────────────────────────────────────────┤
│  SECTION 6: Featured Product Highlight      │  ← Single product deep-dive
├─────────────────────────────────────────────┤
│  SECTION 7: Featured Project                │  ← One signature project
├─────────────────────────────────────────────┤
│  SECTION 8: Product Highlights Strip        │  ← 3 curated products
├─────────────────────────────────────────────┤
│  SECTION 9: Trust Signals                   │  ← Logos, numbers, certifications
├─────────────────────────────────────────────┤
│  SECTION 10: CTA Banner                     │  ← Full-width conversion
├─────────────────────────────────────────────┤
│  SECTION 11: Footer                         │
└─────────────────────────────────────────────┘
```

---

## SECTION 1: Navigation Bar

### Layout
Fixed top, transparent over hero, transitions to `#0A0A0A` with backdrop blur on scroll.

```
[FORMA]                    Windows  Sliding Doors  Folding Walls  Entry Doors  Projects  About    [Request a Quote →]
```

- Logo: Wordmark only, set in Cormorant Garamond Semibold, letter-spacing `0.15em`, all caps
- Nav links: DM Sans 13px, letter-spacing `0.08em`, uppercase
- CTA Button: `#C8A96E` border, transparent fill → gold fill on hover, text flips to black
- Mobile: Hamburger → full-screen overlay menu, dark background

---

## SECTION 2: Hero

### Visual Concept
Full-viewport-height image — a modern interior with a dramatic floor-to-ceiling glass wall opening onto a wooded landscape. Shot from inside looking out. Natural morning light flooding the room. Minimal furniture.

**Overlay:** Very subtle dark gradient at bottom 30% only, allowing the image to breathe.

### Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                    [Full-bleed image]                          │
│                                                                │
│                                                                │
│   ┌────────────────────────────────────────────────────────┐   │
│   │                                                        │   │
│   │  The architecture                                      │   │
│   │  of openness.             ← H1, left-aligned          │   │
│   │                                                        │   │
│   │  Large-format windows, sliding systems,                │   │
│   │  folding glass walls, and entry doors                  │   │
│   │  for residential and commercial projects.              │   │
│   │                                ← Subhead              │   │
│   │                                                        │   │
│   │  [Explore Products]    [View Projects]                 │   │
│   │      ↑ Primary CTA        ↑ Secondary CTA             │   │
│   └────────────────────────────────────────────────────────┘   │
│                                                                │
│  ↓ scroll indicator (animated, bottom center)                  │
└────────────────────────────────────────────────────────────────┘
```

### Copy

**H1 (Display, ~72px desktop / ~40px mobile):**
```
The architecture
of openness.
```

**Subheadline (DM Sans, 18px, warm gray):**
```
Large-format windows, sliding systems, folding glass walls,
and entry doors — engineered for the modern build.
```

**Primary CTA:**
```
Explore Products →
```

**Secondary CTA (text link style):**
```
View Projects
```

**Scroll Indicator:**
```
↓  Scroll to explore
```
*(DM Mono, 11px, 60% opacity, animated bounce)*

### SEO Notes
- H1 is `<h1>` — rendered as text, not baked into image
- Hero image has descriptive `alt="Modern home interior with floor-to-ceiling glass wall and sliding door system"`
- LCP target: hero image preloaded via `<link rel="preload">`

---

## SECTION 3: Product Category Grid

### Concept
Four cards in a 2×2 grid (desktop) or vertical stack (mobile). Each card is a full-bleed image with a dark overlay and text overlay at the bottom. Hover state: image zooms slightly (scale 1.03), overlay darkens, arrow appears.

### Layout (Desktop)
```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│   [Image: window]    │  [Image: sliding dr] │
│                      │                      │
│   Windows       →    │  Sliding Doors   →   │
└──────────────────────┴──────────────────────┘
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  [Image: fold wall]  │  [Image: entry door] │
│                      │                      │
│   Folding Glass  →   │  Entry Doors     →   │
│   Walls              │                      │
└──────────────────────┴──────────────────────┘
```

### Copy (per card)

**Card 1 — Windows**
```
Label:     WINDOWS
Headline:  Expansive glazing,
           precisely framed.
Link:      Explore Windows →
```

**Card 2 — Sliding Door Systems**
```
Label:     SLIDING SYSTEMS
Headline:  Open the wall.
           Close the distance.
Link:      Explore Sliding Doors →
```

**Card 3 — Folding Glass Walls**
```
Label:     FOLDING GLASS WALLS
Headline:  No threshold
           between in and out.
Link:      Explore Folding Walls →
```

**Card 4 — Entry Doors**
```
Label:     ENTRY DOORS
Headline:  First impressions
           that last.
Link:      Explore Entry Doors →
```

---

## SECTION 4: Brand Statement / Manifesto

### Concept
Full-width text section on a warm off-white background. Large, slow-reveal typography. No images. The text should feel like it belongs in an architecture magazine.

### Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│         ┌────────────────────────────────────────┐            │
│         │                                        │            │
│         │  We believe a window is not a hole     │            │
│         │  in a wall. It is a decision about     │            │
│         │  how a building meets the world.        │            │
│         │                                        │            │
│         │  FORMA engineers large-format glass     │            │
│         │  systems for people who understand      │            │
│         │  that light is the material.            │            │
│         │                                        │            │
│         │                           — FORMA       │            │
│         └────────────────────────────────────────┘            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Copy

**Pull Quote (Cormorant Garamond Italic, ~48px):**
```
We believe a window is not a hole in a wall.
It is a decision about how a building meets the world.
```

**Supporting Body (DM Sans, 18px, secondary color):**
```
FORMA engineers large-format glass systems for architects,
builders, and homeowners who understand that light is the material —
and that every opening should be intentional.
```

---

## SECTION 5: Value Propositions

### Concept
Four columns (desktop) or 2×2 grid (tablet) or stacked (mobile). Icon above, short headline, two-line description. Section sits on dark background for contrast with adjacent sections.

### Layout
```
┌────────────┬────────────┬────────────┬────────────┐
│     ◇      │     ◇      │     ◇      │     ◇      │
│            │            │            │            │
│  Custom    │ Thermal    │ Architect  │  Direct    │
│  Sizing    │ Performance│ -Grade     │  Supply    │
│            │            │            │            │
│  Made to   │ Insulated  │ Full spec  │  We supply │
│  your      │ glass,     │  sheets,   │  direct.   │
│  exact     │ thermal    │  CAD files │  No inter- │
│  opening.  │ break      │  and       │  mediaries,│
│  Every     │ aluminum   │  product   │  no markup.│
│  time.     │ profiles.  │  samples.  │            │
└────────────┴────────────┴────────────┴────────────┘
```

*(Icons: thin-line, geometric — not emoji. Think: window outline, snowflake/sun, ruler, truck)*

### Copy

**Section Label (DM Mono, uppercase, gold):**
```
WHY FORMA
```

**Section Headline (Cormorant, 40px):**
```
Built for the demands
of serious construction.
```

**Value 1 — Custom Sizing**
```
Icon:       Window outline
Headline:   Made to your opening.
Body:       Standard sizes are a starting point.
            Every FORMA system is sized to specification —
            width, height, sill depth, and profile.
```

**Value 2 — Thermal Performance**
```
Icon:       Layered glass lines
Headline:   Engineered for climate.
Body:       Thermally broken aluminum frames, triple-glazed
            options, and low-E coatings rated for cold climates
            without compromising the view.
```

**Value 3 — Specification Support**
```
Icon:       Blueprint/ruler
Headline:   Spec-ready for architects.
Body:       Full technical documentation, CAD details, energy
            data, and physical samples available for every
            system in our range.
```

**Value 4 — Direct Supply**
```
Icon:       Delivery arrow
Headline:   Factory direct. No markup.
Body:       We supply architects, builders, and homeowners
            directly. Shorter lead times, better pricing,
            and one point of contact from order to delivery.
```

---

## SECTION 6: Featured Product Highlight

### Concept
A dedicated showcase for one hero product — rotating quarterly (start with Lift & Slide Doors). Two-column layout: large image left, text and spec details right. The spec details add credibility for architect/builder visitors.

### Layout (Desktop)
```
┌────────────────────────────┬──────────────────────────────────┐
│                            │                                  │
│                            │  FEATURED SYSTEM                 │
│                            │                                  │
│   [Large product image     │  Lift & Slide                    │
│    — door system open,     │  Door System                     │
│    interior/exterior       │                                  │
│    transition]             │  When a door opens, a wall       │
│                            │  should disappear. Our lift &    │
│                            │  slide system handles panels     │
│                            │  up to 6 metres wide with        │
│                            │  fingertip ease.                 │
│                            │                                  │
│                            │  ─────────────────────────────   │
│                            │  Max Panel Width    3,000mm      │
│                            │  Max Panel Height   3,200mm      │
│                            │  Frame Depth        78mm         │
│                            │  Glass Options      DGU / TGU    │
│                            │  Thermal Break      Yes          │
│                            │  ─────────────────────────────   │
│                            │                                  │
│                            │  [View Lift & Slide System →]    │
│                            │                                  │
└────────────────────────────┴──────────────────────────────────┘
```

### Copy

**Label (DM Mono, gold):**
```
FEATURED SYSTEM
```

**Product Name (Cormorant, 52px):**
```
Lift & Slide
Door System
```

**Description (DM Sans, 17px):**
```
When a door opens, a wall should disappear. Our lift & slide
system glides panels up to 6 metres wide with fingertip ease —
creating a seamless transition between interior living spaces
and outdoor areas without compromise on thermal performance.
```

**Spec Table Labels (DM Mono, 12px):**
```
MAX PANEL WIDTH     3,000mm
MAX PANEL HEIGHT    3,200mm
FRAME DEPTH         78mm
GLASS OPTIONS       Double / Triple Glazed
THERMAL BREAK       Yes — Class A Profile
FINISHES            Powder Coat, Anodised, RAL custom
```

**CTA:**
```
View Lift & Slide System →
```

---

## SECTION 7: Featured Project

### Concept
A single, hero project presented with full cinematic weight. Dark section (near-black background). Large image dominates. Small detail images below it. Minimal text. The project card links to the full project page.

### Layout
```
┌────────────────────────────────────────────────────────────────┐
│  PROJECTS                                          View All →  │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │              [Full-width project hero image]             │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  ┌────────────────────────┐  Project:   The Ridge House       │
│  │  [Detail image 1]      │  Location:  Whistler, BC          │
│  └────────────────────────┘  Products:  Lift & Slide ×3,      │
│  ┌────────────────────────┐             Floor-to-Ceiling       │
│  │  [Detail image 2]      │             Windows ×8             │
│  └────────────────────────┘                                   │
│                            [View Project →]                   │
└────────────────────────────────────────────────────────────────┘
```

### Copy

**Section Label (DM Mono, gold):**
```
PROJECTS
```

**Section Link:**
```
View All Projects →
```

**Project Name (Cormorant Italic, 36px):**
```
The Ridge House
```

**Project Meta (DM Mono, 12px):**
```
LOCATION     Whistler, BC
TYPE         Private Residence
PRODUCTS     Lift & Slide System, Floor-to-Ceiling Windows
ARCHITECT    [Studio Name]
```

**Project Description (DM Sans, 16px):**
```
Perched at the treeline, The Ridge House was designed around
its relationship with the landscape. FORMA supplied eleven
glass panels across three lift & slide systems and eight
floor-to-ceiling window units — all custom-sized to the
architect's exact specification.
```

**CTA:**
```
View Project →
```

---

## SECTION 8: Product Highlights Strip

### Concept
Three product cards in a horizontal strip. Each shows: product image, system name, one-line description, and a link. This section gives secondary visibility to products not featured in the hero sections above.

### Layout
```
┌──────────────────┬──────────────────┬──────────────────┐
│  [Image]         │  [Image]         │  [Image]         │
│                  │                  │                  │
│  Corner Glass    │  Bi-Fold Glass   │  Pivot Entry     │
│  Systems         │  Walls           │  Doors           │
│                  │                  │                  │
│  Frameless       │  Accordion-fold  │  Statement       │
│  corners that    │  panels that     │  entry in steel, │
│  dissolve the    │  open an entire  │  aluminum, or    │
│  boundary.       │  wall face.      │  glass.          │
│                  │                  │                  │
│  Learn More →    │  Learn More →    │  Learn More →    │
└──────────────────┴──────────────────┴──────────────────┘
```

### Copy

**Section Label (DM Mono):**
```
ALSO IN THE RANGE
```

**Card 1 — Corner Glass Systems**
```
Name:   Corner Glass Systems
Body:   Two panes meeting at a frameless corner —
        no post, no interruption, no compromise.
Link:   Explore Corner Glass →
```

**Card 2 — Bi-Fold Glass Walls**
```
Name:   Bi-Fold Glass Walls
Body:   Accordion-style panels that fold and
        stack to open an entire wall face.
Link:   Explore Bi-Fold Walls →
```

**Card 3 — Pivot Entry Doors**
```
Name:   Pivot Entry Doors
Body:   A pivot door changes how a building
        is entered. Oversized, balanced, precise.
Link:   Explore Pivot Doors →
```

---

## SECTION 9: Trust Signals

### Concept
Quiet, confident credibility section on a light warm-white background. Three columns: a numbers/stats column, a testimonials column, and a certifications/associations column. No flashy graphics. Data speaks for itself.

### Layout
```
┌──────────────────────┬──────────────────────┬──────────────────┐
│   BY THE NUMBERS     │   WHAT THEY SAY      │  CERTIFICATIONS  │
│                      │                      │                  │
│   850+               │  "FORMA's technical  │  [Energy Star]   │
│   Projects Supplied  │  team understood     │                  │
│                      │  our specification   │  [AAMA Certified]│
│   12+                │  before we finished  │                  │
│   Years in Business  │  explaining it.      │  [NAFS Tested]   │
│                      │  The lead time was   │                  │
│   38                 │  met to the day."    │  [Thermal Break  │
│   States & Provinces │                      │   Certified]     │
│   Served             │  — Principal,        │                  │
│                      │    Studio Eleven     │                  │
│   Custom Sizing      │    Architecture      │                  │
│   From 600mm         │                      │                  │
│   to 6,000mm wide    │  [★★★★★]             │                  │
└──────────────────────┴──────────────────────┴──────────────────┘
```

### Copy

**Column 1 — Numbers**

```
Section Label:   BY THE NUMBERS

Stat 1:
  Number:   850+
  Label:    Projects Supplied

Stat 2:
  Number:   12+
  Label:    Years in Operation

Stat 3:
  Number:   38
  Label:    States & Provinces Served

Stat 4:
  Number:   600mm – 6,000mm
  Label:    Custom Width Range
```

**Column 2 — Testimonial**

```
Quote:
  "FORMA's technical team understood our specification
  before we finished explaining it. Product arrived
  on schedule, damage-free, and sized exactly to the
  millimetre. We're specifying them on our next four projects."

Attribution:
  — Principal Architect
    Studio Eleven Architecture, Vancouver BC

Secondary quote (smaller):
  "We've sourced from a lot of suppliers. FORMA is the
  first one we actually call back."

  — Project Manager, Northfield Build Group
```

**Column 3 — Certifications / Associations**
```
Label:   TESTED & CERTIFIED

Items:
  - NAFS (North American Fenestration Standard) Tested
  - Thermally Broken Aluminum Profiles — Class A
  - Energy Star Eligible Products
  - CSA A440 Compliant
  - Available in LEED-contributing specifications
```

---

## SECTION 10: CTA Banner

### Concept
Full-width dark section (near-black or a bold architectural image with heavy overlay). Large, direct headline. Two CTAs side by side. This is the homepage's closing conversion moment.

### Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                                                                │
│         Ready to open up your project?                        │
│                                                                │
│         Whether you're at design stage or ready to            │
│         order — we're the first call worth making.            │
│                                                                │
│         [Request a Quote]        [Speak to a Specialist]      │
│                                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Copy

**Headline (Cormorant Garamond, 56px, light on dark):**
```
Ready to open up
your project?
```

**Subheadline (DM Sans, 18px, warm gray):**
```
Whether you're at concept stage or ready to order,
our team works directly with architects, builders, and homeowners
to specify the right system for every opening.
```

**Primary CTA (gold button):**
```
Request a Quote →
```

**Secondary CTA (text link, light):**
```
Or speak to a specialist →
```

**Microcopy beneath CTAs (DM Mono, 11px, muted):**
```
No obligation. Respond within 1 business day.
```

---

## SECTION 11: Footer

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  FORMA                   Products        Company     Connect   │
│  Architectural Glass                                            │
│                          Windows         About       Email     │
│  Light. Space.           Sliding Doors   Projects    Phone     │
│  Structure.              Folding Walls   Blog        LinkedIn  │
│                          Entry Doors     Contact               │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  © 2025 FORMA Architectural Glass. All rights reserved.        │
│  Privacy Policy  ·  Terms of Use  ·  Sitemap                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Footer Tagline:**
```
FORMA Architectural Glass
Large-format windows, sliding systems, folding glass walls,
and entry doors for residential and commercial projects.
```

---

## Audience-Specific Entry Points

These are not visible sections but are surfaced through messaging and links targeting each persona:

| Persona | Where They Land | What Convinces Them |
|---|---|---|
| Homeowner | Hero → Product Categories | Project photography, inspiration, ease of quoting |
| Builder / Contractor | Value Props → Product Specs | Lead times, custom sizing, direct supply |
| Architect | Featured Product Specs → Downloads | CAD references, certifications, spec support |
| Developer | Trust Signals → Contact | Volume, coverage area, project track record |

---

## Complete Copy Reference (Homepage)

```
NAVIGATION:
  Logo:       FORMA
  Links:      Windows  |  Sliding Doors  |  Folding Walls  |  Entry Doors  |  Projects  |  About
  CTA:        Request a Quote →

HERO:
  H1:         The architecture of openness.
  Sub:        Large-format windows, sliding systems, folding glass walls,
              and entry doors — engineered for the modern build.
  CTA 1:      Explore Products →
  CTA 2:      View Projects

CATEGORIES:
  Windows:        Expansive glazing, precisely framed.
  Sliding Doors:  Open the wall. Close the distance.
  Folding Walls:  No threshold between in and out.
  Entry Doors:    First impressions that last.

MANIFESTO:
  Quote:      We believe a window is not a hole in a wall.
              It is a decision about how a building meets the world.
  Body:       FORMA engineers large-format glass systems for architects,
              builders, and homeowners who understand that light is the
              material — and that every opening should be intentional.

VALUE PROPS:
  Label:      WHY FORMA
  H2:         Built for the demands of serious construction.
  V1:         Made to your opening.
  V2:         Engineered for climate.
  V3:         Spec-ready for architects.
  V4:         Factory direct. No markup.

FEATURED PRODUCT:
  Label:      FEATURED SYSTEM
  Name:       Lift & Slide Door System
  Body:       When a door opens, a wall should disappear. Our lift & slide
              system glides panels up to 6 metres wide with fingertip ease —
              creating a seamless transition between interior living spaces
              and outdoor areas without compromise on thermal performance.
  CTA:        View Lift & Slide System →

FEATURED PROJECT:
  Label:      PROJECTS
  Name:       The Ridge House
  Location:   Whistler, BC
  Body:       Perched at the treeline, The Ridge House was designed around
              its relationship with the landscape. FORMA supplied eleven
              glass panels across three lift & slide systems and eight
              floor-to-ceiling window units — all custom-sized to the
              architect's exact specification.
  CTA:        View Project →

HIGHLIGHTS:
  Label:      ALSO IN THE RANGE
  P1:         Corner Glass Systems — Frameless corners that dissolve the boundary.
  P2:         Bi-Fold Glass Walls — Accordion-style panels that open an entire wall face.
  P3:         Pivot Entry Doors — A pivot door changes how a building is entered.

TRUST:
  Stats:      850+ Projects  |  12+ Years  |  38 States & Provinces
  Quote:      "FORMA's technical team understood our specification
              before we finished explaining it..."
              — Principal Architect, Studio Eleven

CTA BANNER:
  H2:         Ready to open up your project?
  Body:       Whether you're at concept stage or ready to order, our team
              works directly with architects, builders, and homeowners to
              specify the right system for every opening.
  CTA 1:      Request a Quote →
  CTA 2:      Or speak to a specialist →
  Micro:      No obligation. Respond within 1 business day.

FOOTER:
  Tagline:    Light. Space. Structure.
  Legal:      © 2025 FORMA Architectural Glass. All rights reserved.
```
