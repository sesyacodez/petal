# petal Implementation Overview

## Purpose

This document translates the PRD and design brief into implementation-ready guidance for the landing page build.

## Scope

Build a single-page marketing landing page in Next.js (App Router) with Tailwind CSS, shadcn/ui patterns, and lucide-react icons. Integrate a Formspree waitlist form. No backend beyond Formspree.

## Information Architecture

Sections (in order):

1. Navbar (glass, sticky)
2. Hero (soft gradient + floating glass elements)
3. Emotional validation
4. Philosophy / How petal helps
5. Features (glass cards)
6. Soft CTA (Formspree)
7. Minimal footer

## Design Principles

- Calm, gentle, modern soft-tech
- Glassmorphism with subtle blur and translucent layers
- Pastel gradients and soft shadows
- Slow, minimal motion (respect `prefers-reduced-motion`)

## Non-Functional Requirements

- Fully responsive: mobile → desktop
- Maintain readability over glass layers
- High performance despite blur effects
- No neon, harsh contrast, sharp edges, or aggressive animation

## Reference Docs

- Product requirements: [docs/PRD.md](docs/PRD.md)
- Design brief: [docs/design-brief.md](docs/design-brief.md)
