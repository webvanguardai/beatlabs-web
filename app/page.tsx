'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const labEntries = [
  {
    id: '01',
    name: 'NIBANGO',
    category: 'FLAGSHIP',
    desc: 'P2P marketplace for the Gulf. Buy and sell with trust.',
    status: 'launching',
    statusText: 'LAUNCHING SOON',
    url: null,
  },
  {
    id: '02',
    name: 'SUBTRACKR',
    category: 'APPS',
    desc: 'Track every subscription. Know what you pay and when.',
    status: 'dev',
    statusText: 'IN DEVELOPMENT',
    url: null,
  },
  {
    id: '03',
    name: 'TIMEUP',
    category: 'APPS',
    desc: 'Focus blocks and deep work. Real accountability for your time.',
    status: 'dev',
    statusText: 'IN DEVELOPMENT',
    url: null,
  },
  {
    id: '04',
    name: 'CONTRACKR',
    category: 'APPS',
    desc: 'Track shows, movies, comics, and books. All in one place.',
    status: 'dev',
    statusText: 'IN DEVELOPMENT',
    url: null,
  },
  {
    id: '05',
    name: 'WEBVANGUARD',
    category: 'STUDIOS',
    desc: 'Web design agency. Built for businesses across the Gulf.',
    status: 'live',
    statusText: 'LIVE',
    url: 'https://webvanguard.co',
  },
  {
    id: '06',
    name: 'TRUE LOVE',
    category: 'STUDIOS',
    desc: 'Brand identity and visual design built with soul.',
    status: 'live',
    statusText: 'LIVE',
    url: 'https://truelovecreative.es',
  },
  {
    id: '07',
    name: 'ESTRELA',
    category: 'STUDIOS',
    desc: 'Artist portrait photography. Identity, presence, energy.',
    status: 'live',
    statusText: 'LIVE',
    url: 'https://estrela.photo',
  },
]

const sidebarIndexItems = [
  { id: '01', name: 'NIBANGO', type: 'FLAGSHIP' },
  { id: '02', name: 'SUBTRACKR', type: 'APPS' },
  { id: '03', name: 'TIMEUP', type: 'APPS' },
  { id: '04', name: 'CONTRACKR', type: 'APPS' },
  { id: '05', name: 'WEBVANGUARD', type: 'STUDIOS' },
  { id: '06', name: 'TRUELOVE', type: 'STUDIOS' },
  { id: '07', name: 'ESTRELA', type: 'STUDIOS' },
]

const sectionIds = ['hero', 'lab', 'about', 'contact']

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })
  const [time, setTime] = useState('')
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const [hoveredSidebarRow, setHoveredSidebarRow] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const rightColRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: rightColRef })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Custom cursor
  useEffect(() => {
    const move = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Live clock
  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-AE', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const i = setInterval(tick, 1000)
    return () => clearInterval(i)
  }, [])

  // IntersectionObserver for active section
  useEffect(() => {
    const container = rightColRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: container,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }, [])

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, root: rightColRef },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }

  const getStatusDot = (status: string) => {
    if (status === 'launching') return { char: '◉', color: 'var(--lime)' }
    if (status === 'dev') return { char: '○', color: 'var(--muted)' }
    if (status === 'live') return { char: '●', color: 'var(--lime)' }
    return { char: '○', color: 'var(--muted)' }
  }

  return (
    <>
      <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />

      <motion.div
        className="fixed top-0 left-0 h-[1px] z-50"
        style={{ width: lineWidth, background: 'var(--lime)' }}
      />

      {/* ── MOBILE TOP BAR ── */}
      <div
        className="mobile-topbar"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1rem 1.5rem',
          background: 'rgba(8,8,8,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src="/logo.png" alt="beatLabs" style={{ height: '1.4rem' }} />
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen)
            if (!mobileMenuOpen) scrollToSection('lab')
          }}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'var(--white)',
            fontFamily: 'var(--font-syne)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            padding: '0.4rem 1rem',
            fontWeight: 700,
          }}
        >
          MENU
        </button>
      </div>

      <main
        style={{
          background: 'var(--black)',
          height: '100vh',
          display: 'flex',
          overflow: 'hidden',
          cursor: 'none',
        }}
      >
        {/* ══════════════════════════════════════════════════════ */}
        {/* LEFT SIDEBAR — 30%, fixed                            */}
        {/* ══════════════════════════════════════════════════════ */}
        <aside
          className="desktop-sidebar"
          style={{
            width: '30%',
            minWidth: '280px',
            maxWidth: '380px',
            height: '100vh',
            position: 'relative',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            padding: '2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          {/* Top section */}
          <div>
            {/* Logo */}
            <img
              src="/logo.png"
              alt="beatLabs"
              style={{ height: '1.4rem', marginBottom: '1.2rem', display: 'block' }}
            />

            {/* Live clock */}
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.6rem',
                color: 'var(--lime)',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem',
              }}
            >
              DXB {time}
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
                marginBottom: '1.5rem',
              }}
            />

            {/* Company info */}
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.6rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              BEATLABS FZE LLC
              <br />
              License No. 53228
              <br />
              Ajman Media City
              <br />
              Free Zone, UAE
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
                marginBottom: '1.5rem',
              }}
            />

            {/* INDEX label */}
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.55rem',
                color: 'var(--muted)',
                letterSpacing: '0.25em',
                marginBottom: '1rem',
                fontWeight: 700,
              }}
            >
              INDEX
            </div>

            {/* Index rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {sidebarIndexItems.map((item) => {
                const isHovered = hoveredSidebarRow === item.id
                const highlight = isHovered

                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToSection('lab')}
                    onMouseEnter={() => setHoveredSidebarRow(item.id)}
                    onMouseLeave={() => setHoveredSidebarRow(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.35rem 0.5rem',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'all 0.2s',
                      background: highlight
                        ? 'rgba(200,255,71,0.04)'
                        : 'transparent',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          color: 'var(--lime)',
                          letterSpacing: '0.05em',
                          fontWeight: 700,
                          width: '1.2rem',
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.6rem',
                          color: highlight ? 'var(--lime)' : 'var(--muted)',
                          letterSpacing: '0.08em',
                          transition: 'color 0.2s',
                        }}
                      >
                        {item.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.5rem',
                        color: highlight ? 'var(--lime)' : 'rgba(85,85,85,0.5)',
                        letterSpacing: '0.1em',
                        transition: 'color 0.2s',
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom section */}
          <div>
            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
                marginBottom: '1.2rem',
              }}
            />
            <a
              href="mailto:info@beatlabs.ae"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.6rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              info@beatlabs.ae
            </a>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.55rem',
                color: 'var(--lime)',
                letterSpacing: '0.2em',
                fontWeight: 700,
                opacity: activeSection === 'hero' ? 1 : 0.6,
                transition: 'opacity 0.3s',
              }}
            >
              BUILD DIFFERENT.
            </div>
          </div>
        </aside>

        {/* ══════════════════════════════════════════════════════ */}
        {/* RIGHT COLUMN — 70%, scrollable                        */}
        {/* ══════════════════════════════════════════════════════ */}
        <div
          ref={rightColRef}
          className="right-column"
          style={{
            flex: 1,
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {/* ── SECTION 1: HERO ── */}
          <section
            id="hero"
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '6rem 2.5rem 4rem',
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(5rem, 12vw, 13rem)',
                  lineHeight: 0.85,
                  letterSpacing: '-0.01em',
                  color: 'var(--white)',
                  marginBottom: '0',
                }}
              >
                WE BUILD
                <br />
                COMPANIES.
              </h1>
              <h1
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(5rem, 12vw, 13rem)',
                  lineHeight: 0.85,
                  letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.15)',
                  marginTop: '0.1em',
                }}
              >
                NOT PROJECTS.
              </h1>
            </motion.div>

            {/* Bottom of hero */}
            <div
              style={{
                position: 'absolute',
                bottom: '4rem',
                left: '2.5rem',
                right: '2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  maxWidth: '420px',
                }}
              >
                beatLabs is the studio behind a growing ecosystem of apps,
                agencies, and creative brands. Based in Ajman, UAE.
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
                }}
                onClick={() => scrollToSection('lab')}
                style={{
                  color: 'var(--lime)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  lineHeight: 1,
                }}
              >
                ↓
              </motion.div>
            </div>
          </section>

          {/* ── SECTION 2: THE LAB ── */}
          <section
            id="lab"
            style={{
              padding: '6rem 2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <motion.div {...fadeUp}>
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.6rem',
                  color: 'var(--lime)',
                  letterSpacing: '0.25em',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '3rem',
                }}
              >
                THE LAB — 7 PRODUCTS
              </span>
            </motion.div>

            {/* Lab rows */}
            <div>
              {labEntries.map((entry, i) => {
                const dot = getStatusDot(entry.status)
                const isHovered = hoveredRow === entry.id
                const isFlagship = entry.category === 'FLAGSHIP'

                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, root: rightColRef }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    onMouseEnter={() => setHoveredRow(entry.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      padding: '1.8rem 1rem',
                      background: isHovered
                        ? 'rgba(200,255,71,0.04)'
                        : 'transparent',
                      transition: 'background 0.3s',
                    }}
                  >
                    <div
                      className="lab-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '2.5rem 1fr auto auto auto auto',
                        gap: '1.5rem',
                        alignItems: 'center',
                      }}
                    >
                      {/* Number */}
                      <span
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.65rem',
                          color: 'var(--lime)',
                          letterSpacing: '0.05em',
                          fontWeight: 700,
                        }}
                      >
                        {entry.id}
                      </span>

                      {/* Name */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-bebas)',
                          fontSize: 'clamp(1.8rem, 3vw, 3rem)',
                          letterSpacing: '0.03em',
                          color: isHovered ? 'var(--lime)' : 'var(--white)',
                          transition: 'color 0.3s',
                          lineHeight: 1,
                        }}
                      >
                        {entry.name}
                      </h3>

                      {/* Category pill */}
                      <span
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.5rem',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          padding: '0.25rem 0.7rem',
                          background: isFlagship
                            ? 'var(--lime)'
                            : 'transparent',
                          color: isFlagship ? 'var(--black)' : 'var(--muted)',
                          border: isFlagship
                            ? 'none'
                            : '1px solid rgba(255,255,255,0.1)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {entry.category}
                      </span>

                      {/* Description */}
                      <p
                        className="lab-row-desc"
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontSize: '0.75rem',
                          color: 'rgba(240,237,232,0.4)',
                          lineHeight: 1.5,
                          maxWidth: '280px',
                          minWidth: '160px',
                        }}
                      >
                        {entry.desc}
                      </p>

                      {/* Status */}
                      <div
                        className="lab-row-status"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span style={{ color: dot.color, fontSize: '0.7rem' }}>
                          {dot.char}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-syne)',
                            fontSize: '0.5rem',
                            color: dot.color,
                            letterSpacing: '0.12em',
                            fontWeight: 700,
                          }}
                        >
                          {entry.statusText}
                        </span>
                      </div>

                      {/* Link */}
                      <div style={{ minWidth: '2rem', textAlign: 'right' }}>
                        {entry.url ? (
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: 'var(--font-syne)',
                              fontSize: '0.7rem',
                              color: 'var(--lime)',
                              textDecoration: 'none',
                              fontWeight: 700,
                            }}
                          >
                            →
                          </a>
                        ) : (
                          <span
                            style={{
                              fontFamily: 'var(--font-syne)',
                              fontSize: '0.7rem',
                              color: 'rgba(85,85,85,0.3)',
                            }}
                          >
                            —
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
              {/* Bottom border */}
              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              />
            </div>
          </section>

          {/* ── SECTION 3: ABOUT ── */}
          <section
            id="about"
            className="about-section"
            style={{
              padding: '6rem 2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <motion.div {...fadeUp}>
              <h2
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(3rem, 7vw, 7rem)',
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                }}
              >
                <span style={{ color: 'var(--white)', display: 'block' }}>
                  ONE
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.15)',
                    display: 'block',
                  }}
                >
                  FOUNDER.
                </span>
                <span style={{ color: 'var(--white)', display: 'block' }}>
                  MANY
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.15)',
                    display: 'block',
                  }}
                >
                  BETS.
                </span>
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingTop: '1rem' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.9rem',
                  color: 'rgba(240,237,232,0.55)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                beatLabs is the holding entity behind everything I build. Each
                project has its own identity, its own audience, its own path.
                Some will be apps. Some agencies. Some just experiments. All of
                them built properly — clean code, real design, business logic
                from day one.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.9rem',
                  color: 'rgba(240,237,232,0.55)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}
              >
                {"I'm Francisco Javier. I work from Ajman, UAE. I design, I code, I launch. When I need a team, I bring the right people in."}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.9rem',
                  color: 'var(--lime)',
                  lineHeight: 1.8,
                  fontWeight: 700,
                }}
              >
                Based in the Gulf. Building globally.
              </p>
            </motion.div>
          </section>

          {/* ── SECTION 4: CONTACT ── */}
          <section
            id="contact"
            style={{
              padding: '8rem 2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <motion.div {...fadeUp}>
              <a
                href="mailto:info@beatlabs.ae"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(3rem, 8vw, 8rem)',
                  color: 'var(--lime)',
                  textDecoration: 'none',
                  lineHeight: 1,
                  display: 'block',
                  letterSpacing: '-0.01em',
                }}
              >
                info@beatlabs.ae
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                  marginTop: '1.5rem',
                  lineHeight: 1.6,
                }}
              >
                Partnership inquiries, investment, or just a conversation.
              </p>
            </motion.div>
          </section>

          {/* ── FOOTER ── */}
          <footer
            style={{
              borderTop: '1px solid rgba(255,255,255,0.04)',
              padding: '1.5rem 2.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.55rem',
                color: '#333',
                letterSpacing: '0.06em',
                fontFamily: 'var(--font-syne)',
                lineHeight: 1.8,
              }}
            >
              © 2026 BeatLabs FZE LLC. All rights reserved. · Free Zone
              Establishment incorporated under Amiri Decree No.8 of 2021 ·
              Privacy Policy · Terms of Use
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
