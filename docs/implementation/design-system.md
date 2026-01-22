# Design System & UI Rules

## Color Palette (Base)

- Primary pink: #F7C6D9
- Warm whites / blush backgrounds: #FFF7FA, #FFF1F6
- Muted lavender: #E7D7F6
- Muted gray-rose text: #5B4B52
- Glass background: rgba(255, 247, 250, 0.6)

## Gradients

- Background: soft pink → warm white → blush
- Accent: pink → lavender
- Buttons: blush → pastel pink
- Decorative blobs: low opacity (10–25%)

## Glassmorphism Rules

- Use `backdrop-blur-md` or `backdrop-blur-lg`
- Semi-transparent backgrounds (`bg-white/50` or `bg-pink-50/60`)
- Border: `border-white/20`
- Shadow: soft only (`shadow-lg/10`, no harsh contrast)

## Typography

- Use modern rounded sans-serif (Inter / Plus Jakarta Sans)
- Headings: gentle weight (500–600), no hard black
- Body: readable, muted dark rose or gray

## Layout & Spacing

- Generous whitespace and padding
- Rounded corners (xl to 3xl)
- Avoid sharp edges

## Hover & Motion

- Hover: gentle lift (`-translate-y-0.5` or `-translate-y-1`)
- Shadow increases subtly on hover
- Transitions: 300–500ms
- No sharp or fast motion

## Accessibility

- Maintain readable contrast while keeping soft palette
- Focus states: soft glow, not harsh outline
- Respect `prefers-reduced-motion`

## Visual Constraints (Must Not)

- No neon colors
- No harsh black (#000)
- No aggressive shadows
- No loud gradients or high-contrast graphics
