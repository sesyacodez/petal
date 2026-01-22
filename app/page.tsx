"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xykeyyye";

type Status = "idle" | "submitting" | "success" | "error";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

const validationCards = [
  {
    title: "Quiet by design",
    description:
      "No aggressive red badges or urgent notifications. Your attention is sacred and shouldn't be hijacked.",
  },
  {
    title: "Anti-burnout",
    description:
      "We notice when you're overcommitting and gently suggest rescheduling. It's okay to do less today.",
  },
  {
    title: "Natural rhythms",
    description:
      "Plan your day around your energy levels, not just time slots. Flow with your day, don't force it.",
  },
];

const philosophyItems = [
  {
    title: "Gentle reminders",
    description:
      "Soft nudges that respect your flow state. Never jarring, always considerate.",
  },
  {
    title: "Rest is productive",
    description:
      "Built-in breaks and mindful pauses. Your wellbeing is part of the plan.",
  },
  {
    title: "Intention setting",
    description:
      "Start your day with a clear mind, selecting only 3 main focus areas.",
  },
  {
    title: "Mood tracking",
    description:
      "Correlate your productivity with your emotional state to understand yourself better.",
  },
];

const features = [
  {
    title: "Soft scheduling",
    description:
      "Flexible time blocks that adjust automatically if a meeting runs late.",
  },
  {
    title: "Soundscapes",
    description:
      "Built-in ambient noise: rain, forest, or café sounds to help you flow.",
  },
  {
    title: "Reflections",
    description:
      "Weekly summaries focused on what you achieved, not what you missed.",
  },
  {
    title: "Co-blooming",
    description:
      "Share intentions with friends without seeing their specific tasks.",
  },
  {
    title: "Minimal widgets",
    description:
      "Home screen widgets that show only the current intention.",
  },
  {
    title: "Self-compassion",
    description:
      "Prompts to take breaks when your activity patterns suggest fatigue.",
  },
];

function PetalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 4C11.2 4 8.6 6.4 8.6 9.2c0 2.6 2.1 5.7 5.4 7.8 3.3-2.1 5.4-5.2 5.4-7.8C19.4 6.4 16.8 4 14 4Z"
        fill="#F7C6D9"
      />
      <path
        d="M6 15.4c0-2.6 2.4-5.1 5.8-5.1 2.9 0 5.7 1.6 7.7 4.1-2.5 2.6-5.5 4.2-8.2 4.2C8.7 18.6 6 17.2 6 15.4Z"
        fill="#E7D7F6"
      />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 4C10 4 5 9 4 18c7.5-0.6 12.6-4.3 14-11.4V4Z"
        stroke="#E89CB8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16c3-2.7 6-4.6 10-6"
        stroke="#E89CB8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11 18s-6-3.4-6-7.5C5 8 6.7 6.5 8.8 6.5c1.3 0 2.6 0.7 3.2 1.8 0.6-1.1 1.9-1.8 3.2-1.8C17.3 6.5 19 8 19 10.5 19 14.6 11 18 11 18Z"
        stroke="#E89CB8"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11 3l1.8 4.5L17.5 9 13.2 11.2 11 16 8.8 11.2 4.5 9l4.7-1.5L11 3Z"
        stroke="#D7A5E9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return <div className="icon-badge">{children}</div>;
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold text-[color:var(--petal-ink)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-[color:var(--foreground)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function FloatingBlob({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`floating-blob ${className ?? ""}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="petal-bg text-sm sm:text-base">
      <FloatingBlob
        className="float-slower"
        style={{
          width: 240,
          height: 240,
          top: "6%",
          left: "6%",
          background:
            "radial-gradient(circle, rgba(247,198,217,0.8), transparent 70%)",
        }}
      />
      <FloatingBlob
        className="float-fast"
        style={{
          width: 180,
          height: 180,
          top: "12%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(231,215,246,0.8), transparent 70%)",
        }}
      />
      <FloatingBlob
        className="float-slower"
        style={{
          width: 210,
          height: 210,
          bottom: "12%",
          left: "16%",
          background:
            "radial-gradient(circle, rgba(247,198,217,0.7), transparent 70%)",
        }}
      />
      <FloatingBlob
        style={{
          width: 150,
          height: 150,
          bottom: "18%",
          right: "8%",
          background:
            "radial-gradient(circle, rgba(231,215,246,0.7), transparent 70%)",
        }}
      />

      <header className="sticky top-4 z-50 px-4 sm:px-8">
        <nav className="glass-nav mx-auto mt-6 flex w-full max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 text-base font-semibold text-[color:var(--petal-ink)]">
            <PetalIcon className="h-7 w-7" />
            <span>petal</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-[color:var(--foreground)] sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="soft-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="gradient-button rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5"
            href="#waitlist"
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="px-4 pb-24 pt-20 sm:px-8" id="top">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="fade-in text-xs uppercase tracking-[0.35em] text-pink-400">
                A gentler focus
              </p>
              <h1 className="fade-in mt-5 text-4xl font-semibold leading-tight text-[color:var(--petal-ink)] sm:text-5xl">
                A softer way
                <br />
                <span className="text-pink-500">to stay productive.</span>
              </h1>
              <p className="fade-in-delay mt-4 max-w-lg text-base text-[color:var(--foreground)] sm:text-lg">
                petal helps you focus without pressure, guilt, or burnout. It's
                productivity that feels like a gentle breeze.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="gradient-button rounded-full px-6 py-3 text-sm font-semibold"
                  href="#waitlist"
                >
                  Join the waitlist →
                </a>
                <span className="text-xs text-[color:var(--foreground)]">
                  No spam. No pressure. Just gentle updates.
                </span>
              </div>
            </div>
            <GlassCard className="glass-panel p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <IconBadge>
                    <SparkIcon />
                  </IconBadge>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--petal-ink)]">
                      Today feels lighter
                    </p>
                    <p className="text-xs text-[color:var(--foreground)]">
                      Three soft intentions, no rush
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[color:var(--foreground)]">
                  9:12 am
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {["Journal", "Stretch + breathe", "Reply with kindness"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3"
                    >
                      <span className="text-sm text-[color:var(--petal-ink)]">
                        {item}
                      </span>
                      <span className="text-xs text-pink-400">soft focus</span>
                    </div>
                  )
                )}
              </div>
            </GlassCard>
          </div>
        </section>

        <section
          className="px-4 pb-24 sm:px-8"
          id="about"
        >
          <SectionHeader
            eyebrow="You're not alone"
            title="We understand how you feel"
            subtitle="You're not alone in feeling overwhelmed by productivity tools."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {validationCards.map((card, index) => (
              <GlassCard
                key={card.title}
                className={`p-6 ${index === 1 ? "md:-translate-y-2" : ""}`}
              >
                <IconBadge>
                  {index === 0 ? <LeafIcon /> : index === 1 ? <SparkIcon /> : <HeartIcon />}
                </IconBadge>
                <h3 className="mt-4 text-lg font-semibold text-[color:var(--petal-ink)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--foreground)]">
                  {card.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section
          className="px-4 pb-24 sm:px-8"
          id="philosophy"
        >
          <SectionHeader
            eyebrow="Our Philosophy"
            title="How petal helps you bloom"
            subtitle="A different approach to getting things done."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {philosophyItems.map((item) => (
              <GlassCard key={item.title} className="flex gap-4 p-6">
                <IconBadge>
                  <PetalIcon className="h-6 w-6" />
                </IconBadge>
                <div>
                  <h3 className="text-lg font-semibold text-[color:var(--petal-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--foreground)]">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-8" id="features">
          <SectionHeader
            eyebrow="Features"
            title="Everything you need, nothing you don't"
            subtitle="Thoughtfully designed features that support your wellbeing."
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <GlassCard key={feature.title} className="p-6">
                <IconBadge>
                  {index % 2 === 0 ? <SparkIcon /> : <LeafIcon />}
                </IconBadge>
                <h3 className="mt-4 text-lg font-semibold text-[color:var(--petal-ink)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--foreground)]">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="px-4 pb-28 sm:px-8" id="waitlist">
          <div className="mx-auto max-w-3xl">
            <GlassCard className="glass-panel p-8 sm:p-10">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[color:var(--petal-ink)]">
                  Ready to bloom?
                </h3>
                <p className="mt-3 text-sm text-[color:var(--foreground)]">
                  Join our waitlist and be the first to experience a gentler way to be
                  productive. No pressure, just possibilities.
                </p>
              </div>
              <form
                className="mt-6 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <label className="text-xs uppercase tracking-[0.2em] text-pink-400">
                  Email address
                </label>
                <input
                  className="soft-input"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  disabled={status === "submitting" || status === "success"}
                />
                <button
                  className="gradient-button rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-70"
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                >
                  {status === "submitting" ? "Joining..." : "Join the waitlist →"}
                </button>
                {status === "success" ? (
                  <p className="text-center text-xs text-pink-400">
                    You're in. We'll send gentle updates soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-center text-xs text-pink-500">
                    Something gentle went wrong. Please try again.
                  </p>
                ) : null}
                <p className="text-center text-[10px] text-[color:var(--foreground)]">
                  We respect your inbox. Only gentle, meaningful updates.
                </p>
              </form>
            </GlassCard>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10 sm:px-8">
        <div className="glass-nav mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--petal-ink)]">
            <PetalIcon className="h-5 w-5" />
            <span>petal</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[color:var(--foreground)]">
            <a className="soft-link" href="#">
              Privacy
            </a>
            <a className="soft-link" href="#">
              Terms
            </a>
            <a className="soft-link" href="mailto:hello@petal.app">
              Contact
            </a>
          </div>
          <p className="text-[10px] text-[color:var(--foreground)]">
            Made with softness. © 2026 petal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
