"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
  opacity: number
  type: "sakura" | "rose"
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 20,
      size: 10 + Math.random() * 20,
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4,
      type: Math.random() > 0.5 ? "sakura" : "rose",
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-float"
          style={{
            left: `${petal.left}%`,
            top: "-5%",
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
          }}
        >
          {petal.type === "sakura" ? (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <path
                d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z"
                fill="#FFB6C1"
                opacity="0.8"
              />
              <path
                d="M12 12C12 12 16 10 18 10C20 10 22 12 22 12C22 12 20 14 18 14C16 14 12 12 12 12Z"
                fill="#FFC0CB"
                opacity="0.8"
              />
              <path
                d="M12 12C12 12 14 16 14 18C14 20 12 22 12 22C12 22 10 20 10 18C10 16 12 12 12 12Z"
                fill="#FFB6C1"
                opacity="0.8"
              />
              <path
                d="M12 12C12 12 8 10 6 10C4 10 2 12 2 12C2 12 4 14 6 14C8 14 12 12 12 12Z"
                fill="#FFC0CB"
                opacity="0.8"
              />
              <circle cx="12" cy="12" r="2" fill="#FFD1DC" />
            </svg>
          ) : (
            <svg
              width={petal.size}
              height={petal.size * 0.8}
              viewBox="0 0 20 16"
              fill="none"
              style={{ transform: `rotate(${petal.rotation}deg)` }}
            >
              <ellipse
                cx="10"
                cy="8"
                rx="9"
                ry="7"
                fill="#E8B4CB"
                opacity="0.7"
              />
              <ellipse
                cx="10"
                cy="9"
                rx="6"
                ry="5"
                fill="#F5D0E0"
                opacity="0.5"
              />
            </svg>
          )}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity, 0.5);
          }
          90% {
            opacity: var(--opacity, 0.5);
          }
          100% {
            transform: translateY(110vh) translateX(100px) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}
