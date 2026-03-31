'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '7', label: 'In The Lab' },
  { value: '2026', label: 'Founded' },
  { value: 'UAE', label: 'Registered FZE' },
  { value: '∞', label: 'Building' },
]

const appsData = [
  {
    name: 'SubTrackr',
    desc: 'Track every subscription. Know what you pay, when, and why.',
    status: 'COMING SOON',
  },
  {
    name: 'TimeUp',
    desc: 'Time management reimagined. Focus blocks, deep work, real accountability.',
    status: 'COMING SOON',
  },
  {
    name: 'Contrackr',
    desc: 'Track shows, movies, comics, and books. Like Trakt — but for everything.',
    status: 'COMING SOON',
  },
]

const studios = [
  {
    id: '01',
    name: 'WebVanguard',
    type: 'Web Design Agency',
    desc: 'Websites that convert. Built for businesses across the Gulf.',
    url: 'https://webvanguard.co',
    status: 'LIVE',
  },
  {
    id: '02',
    name: 'True Love Creative',
    type: 'Branding & Identity Studio',
    desc: 'Brand identity and visual design built with soul and intention.',
    url: 'https://truelovecreative.es',
    status: 'LIVE',
  },
  {
    id: '03',
    name: 'Estrela.photo',
    type: 'Artist Portrait Photography',
    desc: 'Capturing identity, presence, and energy for musicians, creatives, and performers.',
    url: 'https://estrela.photo',
    status: 'LIVE',
  },
]

const footerLinks = [
  { name: 'NIBANGO', url: 'https://nibango.com' },
  { name: 'SUBTRACKR', url: '#' },
  { name: 'WEBVANGUARD', url: 'https://webvanguard.co' },
  { name: 'TRUELOVECREATIVE', url: 'https://truelovecreative.es' },
  { name: 'ESTRELA.PHOTO', url: 'https://estrela.photo' },
]

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })
  const [hoveredStudio, setHoveredStudio] = useState<string | null>(null)
  const [time, setTime] = useState('')
  const { scrollYProgress } = useScroll()
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const move = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-AE', {
        timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
      }))
    }
    tick()
    const i = setInterval(tick, 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <>
      <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />

      <motion.div className="fixed top-0 left-0 h-[1px] z-50" style={{ width: lineWidth, background: 'var(--lime)' }} />

      <main style={{ background: 'var(--black)', minHeight: '100vh', cursor: 'none' }}>

        {/* ── NAV ── */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '1.2rem 1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            background: 'rgba(8,8,8,0.85)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.8rem', width: 'auto' }} />
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="nav-time" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', fontFamily: 'var(--font-syne)' }}>
              DXB {time}
            </span>
            <a href="#lab" style={{ fontSize: '0.65rem', color: 'var(--white)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
              THE LAB
            </a>
            <a href="/apps" style={{ fontSize: '0.65rem', color: 'var(--white)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
              APPS
            </a>
            <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700, border: '1px solid var(--lime)', padding: '0.4rem 0.9rem' }}>
              CONTACT
            </a>
          </div>
        </motion.nav>

        {/* ── HERO ── */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>

          {/* BG grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', maxWidth: '700px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
              <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>STUDIO</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.88, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '2.5rem' }}>
              We Build<br />
              <span style={{ color: 'var(--lime)' }}>Companies.</span><br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>Not Projects.</span>
            </h1>

            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '3rem' }}>
              beatLabs is the studio behind a growing ecosystem of apps, agencies, and creative brands. Based in Ajman, UAE. Built to last.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#lab" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, color: 'var(--black)', background: 'var(--lime)', padding: '0.8rem 2rem', textDecoration: 'none' }}>
                THE LAB →
              </a>
              <a href="mailto:info@beatlabs.ae" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 2rem', textDecoration: 'none' }}>
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '3rem 2.5rem' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--lime)', letterSpacing: '0.05em', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', marginTop: '0.5rem' }}>
                  {s.label.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── THE LAB ── */}
        <section id="lab" style={{ padding: '6rem 2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '0.05em', color: 'var(--white)', lineHeight: 1 }}>
              The Lab
            </h2>
          </motion.div>

          {/* ─── APPS ─── */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--lime)', letterSpacing: '0.3em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>APPS</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            </div>

            {/* Nibango — Flagship Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                border: '1px solid rgba(200,255,71,0.15)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(200,255,71,0.03) 0%, rgba(8,8,8,1) 70%)',
              }}
            >
              {/* Flagship badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.55rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                  padding: '0.25rem 0.8rem', letterSpacing: '0.2em',
                  background: 'var(--lime)', color: 'var(--black)',
                }}>
                  OUR FLAGSHIP
                </span>
                <span style={{
                  fontSize: '0.55rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                  padding: '0.25rem 0.8rem', letterSpacing: '0.15em',
                  border: '1px solid rgba(255,255,255,0.12)', color: 'var(--muted)',
                }}>
                  COMING SOON
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                letterSpacing: '0.03em',
                color: 'var(--white)',
                lineHeight: 1,
                marginBottom: '1rem',
              }}>
                Nibango
              </h3>

              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                MARKETPLACE APP · P2P COMMERCE
              </p>

              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2rem' }}>
                Peer-to-peer second-hand marketplace reimagined for the Gulf. Buy, sell, trust. A new way to trade in the region.
              </p>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700,
                color: 'var(--lime)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lime)', animation: 'pulse 2s infinite' }} />
                LAUNCHING SOON
              </div>
            </motion.div>

            {/* Other Apps — 3-col grid */}
            <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
              {appsData.map((app, i) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '2rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      letterSpacing: '0.03em',
                      color: 'var(--white)',
                      lineHeight: 1,
                    }}>
                      {app.name}
                    </h4>
                    <span style={{
                      fontSize: '0.5rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                      padding: '0.2rem 0.6rem', letterSpacing: '0.15em',
                      border: '1px solid rgba(255,255,255,0.1)', color: 'var(--muted)',
                    }}>
                      {app.status}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.4)', lineHeight: 1.6 }}>
                    {app.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── STUDIOS ─── */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--lime)', letterSpacing: '0.3em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>STUDIOS</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            </div>

            {studios.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHoveredStudio(s.id)}
                onMouseLeave={() => setHoveredStudio(null)}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  padding: '2.5rem 0',
                  background: hoveredStudio === s.id ? 'rgba(200,255,71,0.015)' : 'transparent',
                  transition: 'background 0.4s',
                }}
              >
                <div className="venture-grid" style={{ display: 'grid', gridTemplateColumns: '3rem 1fr auto', gap: '2rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{s.id}</span>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        letterSpacing: '0.03em',
                        color: hoveredStudio === s.id ? 'var(--lime)' : 'var(--white)',
                        transition: 'color 0.3s',
                        lineHeight: 1,
                      }}>
                        {s.name}
                      </h3>
                      <span style={{
                        fontSize: '0.55rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                        padding: '0.2rem 0.7rem', letterSpacing: '0.15em',
                        border: '1px solid var(--lime)', color: 'var(--lime)',
                      }}>
                        {s.status}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>
                      {s.type.toUpperCase()}
                    </p>
                    <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.6, maxWidth: '520px' }}>
                      {s.desc}
                    </p>
                  </div>

                  <div className="venture-cta">
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700,
                        color: hoveredStudio === s.id ? 'var(--black)' : 'var(--white)',
                        background: hoveredStudio === s.id ? 'var(--lime)' : 'transparent',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '0.7rem 1.4rem', textDecoration: 'none',
                        transition: 'all 0.3s', display: 'inline-block', whiteSpace: 'nowrap',
                      }}>
                      VISIT →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
          </div>


        </section>

        {/* ── ABOUT ── */}
        <section className="about-grid" style={{ padding: '6rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700, display: 'block', marginBottom: '2rem' }}>THE STUDIO</span>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '0.02em' }}>
              One founder.<br />
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>Many bets.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              beatLabs is the holding entity behind everything I build. Each project has its own identity, its own audience, its own path. Some will be apps. Some agencies. Some just experiments. All of them built properly — clean code, real design, business logic from day one.
            </p>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {"I'm Francisco Javier. I work from Ajman, UAE. I design, I code, I launch. When I need a team, I bring the right people in."}
            </p>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'var(--lime)', lineHeight: 1.8, fontWeight: 700 }}>
              Based in the Gulf. Building globally.
            </p>
          </motion.div>
        </section>

        {/* ── CONTACT ── */}
        <section style={{ padding: '6rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700, display: 'block', marginBottom: '2rem' }}>GET IN TOUCH</span>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '-0.01em', marginBottom: '2.5rem' }}>
              {"Let's Build"}<br />
              <span style={{ color: 'var(--lime)' }}>Something.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.4)', marginBottom: '3rem', lineHeight: 1.7 }}>
              Partnership inquiries, collaboration, or just a conversation<br />{"about what we're building next."}
            </p>
            <a href="mailto:info@beatlabs.ae"
              style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.75rem', letterSpacing: '0.25em', fontWeight: 700,
                color: 'var(--black)', background: 'var(--lime)',
                padding: '1rem 3rem', textDecoration: 'none', display: 'inline-block',
              }}>
              info@beatlabs.ae →
            </a>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Main footer row */}
          <div className="footer-grid" style={{
            padding: '3rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'start',
            gap: '2rem',
          }}>
            {/* Left */}
            <div>
              <img src="/logo.png" alt="beatLabs" style={{ height: '1.6rem', marginBottom: '0.8rem', display: 'block' }} />
              <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em', fontFamily: 'var(--font-syne)', display: 'block', marginBottom: '0.3rem' }}>
                BeatLabs FZE LLC
              </span>
              <span style={{ fontSize: '0.5rem', color: 'rgba(85,85,85,0.6)', letterSpacing: '0.08em', fontFamily: 'var(--font-syne)', display: 'block' }}>
                License No. 53228 | Ajman Media City Free Zone, UAE
              </span>
            </div>

            {/* Center */}
            <div>
              <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
                {footerLinks.map(link => (
                  <a key={link.name} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.12em', fontFamily: 'var(--font-syne)', fontWeight: 700, textDecoration: 'none' }}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="footer-right" style={{ textAlign: 'right' }}>
              <a href="mailto:info@beatlabs.ae"
                style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}>
                info@beatlabs.ae
              </a>
              <div style={{ fontSize: '0.55rem', color: 'rgba(85,85,85,0.4)', letterSpacing: '0.1em', fontFamily: 'var(--font-syne)' }}>
                BUILD DIFFERENT.
              </div>
            </div>
          </div>

          {/* Legal bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.04)',
            padding: '1rem 2.5rem',
          }}>
            <p style={{ fontSize: '0.55rem', color: '#333', letterSpacing: '0.06em', fontFamily: 'var(--font-syne)', lineHeight: 1.8 }}>
              © 2026 BeatLabs FZE LLC. All rights reserved.  ·  Free Zone Establishment incorporated under Amiri Decree No.8 of 2021  ·  Privacy Policy  ·  Terms of Use
            </p>
          </div>
        </footer>

      </main>
    </>
  )
}
