'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ventures = [
  {
    id: '01',
    name: 'Nibango',
    type: 'Marketplace App',
    desc: 'Buy and sell second-hand. Peer-to-peer commerce, reimagined for the Gulf.',
    url: null,
    status: 'In Development',
  },
  {
    id: '02',
    name: 'WebVanguard',
    type: 'Web Design Agency',
    desc: 'We build websites that convert. Dubai-based, globally minded.',
    url: 'https://webvanguard.co',
    status: 'Live',
  },
  {
    id: '03',
    name: 'TrueLoveCreative',
    type: 'Creative Studio',
    desc: 'Brand identity, visual design, and digital experiences with soul.',
    url: null,
    status: 'Coming Soon',
  },
  {
    id: '04',
    name: 'Estrela.photo',
    type: 'Photography',
    desc: 'Visual storytelling. Portraits, spaces, and moments that last.',
    url: 'https://estrela.photo',
    status: 'Live',
  },
]

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })
  const [followerPos, setFollowerPos] = useState({ x: -200, y: -200 })
  const [hoveredVenture, setHoveredVenture] = useState<string | null>(null)
  const [time, setTime] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Cursor
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    const moveFollower = (e: MouseEvent) => {
      setFollowerPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', moveFollower)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', moveFollower)
    }
  }, [])

  // Dubai time
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-AE', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(t)
    }
    tick()
    const i = setInterval(tick, 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="cursor"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div
        className="cursor-follower"
        style={{ left: followerPos.x, top: followerPos.y }}
      />

      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 h-[1px] z-50"
        style={{ width: lineWidth, background: 'var(--lime)' }}
      />

      <main ref={containerRef} style={{ background: 'var(--black)', minHeight: '100vh' }}>

        {/* ── NAV ── */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-8 py-6 mix-blend-difference"
        >
          <img src="/logo.jpg" alt="beatLabs" style={{ height: '2.2rem', width: 'auto', filter: 'invert(1) brightness(2)' }} />
          <div className="flex items-center gap-8">
            <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'Syne' }}>
              DXB {time}
            </span>
            <a
              href="mailto:info@beatlabs.ae"
              style={{ fontSize: '0.7rem', color: 'var(--white)', letterSpacing: '0.15em', textDecoration: 'none', fontFamily: 'Syne' }}
            >
              CONTACT
            </a>
          </div>
        </motion.nav>

        {/* ── HERO ── */}
        <section className="relative flex flex-col justify-end" style={{ height: '100vh', padding: '0 2rem 4rem' }}>
          {/* Big BG text */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
            aria-hidden
          >
            <span style={{
              fontFamily: 'Bebas Neue',
              fontSize: 'clamp(8rem, 22vw, 22rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              userSelect: 'none',
            }}>
              beatLabs
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Tagline */}
            <div style={{ marginBottom: '2rem' }}>
              <span style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                color: 'var(--white)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                display: 'block',
              }}>
                Build<span style={{ color: 'var(--lime)' }}>.</span>
              </span>
              <span style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                color: 'var(--white)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                display: 'block',
              }}>
                Launch<span style={{ color: 'var(--lime)' }}>.</span>
              </span>
              <span style={{
                fontFamily: 'Bebas Neue',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                color: 'rgba(255,255,255,0.25)',
                lineHeight: 0.9,
                letterSpacing: '-0.01em',
                display: 'block',
              }}>
                Repeat.
              </span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-8 flex-wrap">
              <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.2em', fontFamily: 'Syne' }}>
                VENTURE STUDIO
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.2em', fontFamily: 'Syne' }}>
                DUBAI, UAE
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.2em', fontFamily: 'Syne' }}>
                EST. 2026
              </span>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute right-8 bottom-8 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--muted)', writingMode: 'vertical-lr', fontFamily: 'Syne' }}>
              SCROLL
            </span>
            <motion.div
              style={{ width: '1px', height: '3rem', background: 'var(--muted)', transformOrigin: 'top' }}
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </section>

        {/* ── VENTURES ── */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Section header */}
          <motion.div
            className="flex items-baseline justify-between mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontFamily: 'Bebas Neue',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '0.05em',
              color: 'var(--white)',
            }}>
              Ventures
            </h2>
            <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'Syne' }}>
              {ventures.length} ACTIVE
            </span>
          </motion.div>

          {/* Venture list */}
          <div>
            {ventures.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredVenture(v.id)}
                onMouseLeave={() => setHoveredVenture(null)}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  padding: '2rem 0',
                  transition: 'background 0.3s',
                  background: hoveredVenture === v.id ? 'rgba(200,255,71,0.02)' : 'transparent',
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <span style={{
                      fontFamily: 'Bebas Neue',
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.1em',
                      marginTop: '0.3rem',
                      minWidth: '2rem',
                    }}>
                      {v.id}
                    </span>

                    <div>
                      {/* Name */}
                      <div className="flex items-center gap-4 mb-2">
                        <h3 style={{
                          fontFamily: 'Bebas Neue',
                          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                          letterSpacing: '0.03em',
                          color: hoveredVenture === v.id ? 'var(--lime)' : 'var(--white)',
                          transition: 'color 0.3s',
                          lineHeight: 1,
                        }}>
                          {v.name}
                        </h3>
                        {/* Status badge */}
                        <span style={{
                          fontSize: '0.6rem',
                          padding: '0.2rem 0.6rem',
                          border: `1px solid ${v.status === 'Live' ? 'var(--lime)' : 'rgba(255,255,255,0.15)'}`,
                          color: v.status === 'Live' ? 'var(--lime)' : 'var(--muted)',
                          letterSpacing: '0.15em',
                          fontFamily: 'Syne',
                          fontWeight: 600,
                        }}>
                          {v.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Type */}
                      <p style={{
                        fontSize: '0.7rem',
                        color: 'var(--muted)',
                        letterSpacing: '0.15em',
                        fontFamily: 'Syne',
                        marginBottom: '0.75rem',
                      }}>
                        {v.type.toUpperCase()}
                      </p>

                      {/* Desc */}
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'rgba(240,237,232,0.5)',
                        fontFamily: 'Syne',
                        fontWeight: 400,
                        maxWidth: '480px',
                        lineHeight: 1.6,
                      }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center self-center">
                    {v.url ? (
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'Syne',
                          fontSize: '0.7rem',
                          letterSpacing: '0.15em',
                          color: hoveredVenture === v.id ? 'var(--black)' : 'var(--white)',
                          background: hoveredVenture === v.id ? 'var(--lime)' : 'transparent',
                          border: '1px solid rgba(255,255,255,0.15)',
                          padding: '0.6rem 1.2rem',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          display: 'inline-block',
                          fontWeight: 600,
                        }}
                      >
                        VISIT →
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: 'Syne',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        color: 'var(--muted)',
                        fontWeight: 600,
                      }}>
                        SOON
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ fontSize: '0.7rem', color: 'var(--lime)', letterSpacing: '0.2em', fontFamily: 'Syne', fontWeight: 700, display: 'block', marginBottom: '2rem' }}>
              ABOUT
            </span>
            <p style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: 'rgba(240,237,232,0.7)',
              lineHeight: 1.6,
              fontWeight: 400,
            }}>
              beatLabs is a venture studio based in Dubai, UAE. We build digital products —
              apps, platforms, and creative studios — that solve real problems and reach real people.
              Each venture is independent, focused, and built to scale.
            </p>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '3rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div>
            <span style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: '0.1em', color: 'var(--white)', display: 'block', marginBottom: '0.5rem' }}>
              beatLabs
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'Syne' }}>
              © 2026 — DUBAI, UAE
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'Syne', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              info@beatlabs.ae
            </a>
            <span style={{ fontSize: '0.65rem', color: 'rgba(85,85,85,0.5)', letterSpacing: '0.1em', fontFamily: 'Syne' }}>
              Build different.
            </span>
          </div>
        </footer>

      </main>
    </>
  )
}
