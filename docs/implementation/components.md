# Component Map & Contracts

## Core Components

### `GlassCard`

- Props: `title?`, `icon?`, `children`, `className?`
- Styles: `bg-white/50`, `backdrop-blur-md`, `border-white/20`, `rounded-3xl`, `shadow` soft
- Hover: gentle lift + soft shadow increase

### `GradientButton`

- Props: `variant?`, `size?`, `children`, `className?`
- Styles: gradient from blush to pink, rounded-full
- Hover: subtle lift + glow

### `SectionHeader`

- Props: `eyebrow?`, `title`, `subtitle?`
- Typography: calm, soft contrast

### `FloatingBlob`

- Props: `size`, `color`, `position`, `animation`
- Render: decorative div with gradient/opacity
- Motion: slow float, respect `prefers-reduced-motion`

### `IconBadge`

- Props: `icon`, `color?`
- Style: soft pastel circle, low contrast

## Section-Level Components

- `Navbar`
- `Hero`
- `ValidationCards`
- `PhilosophyGrid`
- `FeaturesGrid`
- `WaitlistForm`
- `Footer`

## Icon Rules (lucide-react)

- Use rounded, minimal icons
- Apply pastel stroke colors (muted pink/lavender)
- Avoid high-contrast black
