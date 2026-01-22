# 📄 Product Requirements Document (PRD) — petal

## Product Name

**petal**

## Product Type

Modern marketing landing page for a productivity app

## Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Icons:** lucide-react
* **Animations:** CSS + optional Framer Motion (very subtle)
* **Fonts:** Modern rounded sans-serif (Inter, Plus Jakarta Sans, Satoshi-like)

---

## 1. Product Vision (Refined)

**petal** combines calm productivity with a modern soft-tech aesthetic.
The interface should feel:

* Gentle, not sterile
* Modern, not corporate
* Visually interesting, but never overwhelming

The landing page should look like:

> a calm iOS-style app mixed with soft glass, pastel gradients, and floating elements.

---

## 2. Brand & Visual Direction (Expanded)

### Design Style Keywords

* Modern
* Glassmorphism
* Soft gradients
* Floating UI
* Calm motion
* Pastel tech

### Color Palette

* Soft pinks as primary
* Warm whites and blush backgrounds
* Muted lavender / peach gradients
* Semi-transparent glass layers

**Example tokens:**

* Primary pink: `#F7C6D9`
* Glass background: `rgba(255, 247, 250, 0.6)`
* Gradient accent: pink → lavender
* Text: muted dark rose / gray

### Glass & Modern UI Requirements

**Glassmorphism**

* Use `backdrop-blur`
* Semi-transparent cards
* Subtle borders (`border-white/20`)
* Soft shadows only

**Gradients**

* Background gradients (very subtle)
* Button gradients (pink → blush)
* Decorative gradient blobs (low opacity)

**Hover & Motion**

* Gentle hover lift (`translate-y-[-2px]`)
* Soft shadow increase on hover
* Slow transitions (`duration-300` or `500`)
* Floating elements with slow CSS animation

**Important rule:**

> No sharp movement, no aggressive hover effects, no fast animations.

---

## 3. Information Architecture (Same Structure, Modern Execution)

**Sections:**

1. Navbar (glass)
2. Hero (gradient + floating glass elements)
3. Emotional validation
4. Philosophy / How petal helps
5. Features (glass cards)
6. Soft CTA (glass form with Formspree)
7. Minimal footer

---

## 4. Functional Requirements (Updated by Section)

### 4.1 Navbar (Modern Glass)

**Style Requirements**

* Glassmorphism navbar: semi-transparent, `backdrop-blur-md`, rounded, slight shadow, floating appearance

**Behavior**

* Sticky
* Smooth scroll
* Hover underline or soft glow on links

---

### 4.2 Hero Section (Modern + Emotional)

**Visual Requirements**

* Gradient background (pink → white → blush)
* Floating glass cards or abstract shapes
* Optional subtle grain/noise overlay

**Animations**

* Slow floating elements
* Fade-in text on load
* No parallax that feels “busy”

---

### 4.3 Emotional Validation Section

**Design**

* Glass cards
* Slight blur behind cards
* Soft hover glow

**Copy**

* Empathetic tone, calm typography hierarchy

---

### 4.4 How petal Helps (Philosophy)

**Design**

* Icon + text in glass containers
* Subtle gradient borders or glow
* Icons with soft pastel stroke colors

**Hover**

* Slight lift
* Gradient accent appears softly

---

### 4.5 Features Section (Glassy Cards)

**Card Style**

* Glass background, rounded-3xl, backdrop blur
* Soft gradient border or shadow

**Hover State**

* Tiny lift
* Shadow deepen
* Gradient subtly shifts

---

### 4.6 Call to Action (Soft, Modern, with Formspree)

**Design**

* Glass container
* Gradient button
* Input with translucent background

**Form Integration**

* Use **Formspree** for the sign-up form
* Email input submits to Formspree endpoint
* Reassuring confirmation message after submission

**Copy Rule**

* No urgency language
* No countdowns
* Reassuring microcopy

**Hover / Focus States**

* Subtle lift on button
* Soft glow on input when focused

---

## 5. Non-Functional Requirements (Expanded)

* Fully responsive
* High performance despite glass effects
* Animations must respect `prefers-reduced-motion`
* Maintain readability despite glass layers
* Modern but timeless (no trendy overload)

---

## 6. Design Constraints

❌ No:

* Neon colors
* High-contrast black
* Aggressive shadows
* Sharp edges
* Loud gradients

✅ Yes:

* Pastel gradients
* Glass blur
* Floating elements
* Calm motion
* Visual breathing space

---

## 7. Inspiration References (Conceptual)

* iOS widgets
* Calm / Headspace visual softness
* Modern SaaS glass UI
* Pinterest “soft glassmorphism pastel UI”

---

## 8. Out of Scope (Unchanged)

* Full app UI
* Backend (beyond Formspree form)
* Auth
* Payments

---
