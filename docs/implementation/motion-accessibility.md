# Motion & Accessibility Rules

## Motion Guidelines

- Default transitions: 300–500ms
- Hover: `-translate-y-0.5` or `-translate-y-1`
- Shadow changes must be subtle
- Floating animations must be slow and gentle

## Reduced Motion

- Use `prefers-reduced-motion` to disable floating/entrance animations
- Ensure no layout shifts for reduced motion users

## Accessibility

- Maintain readable contrast for body text
- Focus states should be visible but soft
- Inputs: clear focus glow, no harsh outline
- Ensure semantic headings and landmarks

## Performance Considerations

- Limit number of backdrop-blur layers per viewport
- Reuse shared glass styles
- Avoid heavy animations or parallax
