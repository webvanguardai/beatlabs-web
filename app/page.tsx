'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ventures = [
  {
    id: '01',
    name: 'Nibango',
    type: 'Marketplace App',
    vertical: 'Commerce',
    desc: 'Peer-to-peer second-hand marketplace reimagined for the Gulf. Buy, sell, trust.',
    url: 'https://nibango.com/uiapp/',
    status: 'In Development',
    year: '2026',
  },
  {
    id: '02',
    name: 'TrueLoveCreative',
    type: 'Creative Studio',
    vertical: 'Branding & Design',
    desc: 'Brand identity, visual design, and digital experiences built with soul and intention.',
    url: 'https://truelovecreative.es',
    status: 'Live',
    year: '2026',
  },
  {
    id: '03',
    name: 'WebVanguard',
    type: 'Web Design Agency',
    vertical: 'Digital Services',
    desc: 'We build websites that convert for businesses across the Gulf. Fast, sharp, results-first.',
    url: 'https://webvanguard.co',
    status: 'Live',
    year: '2026',
  },
  {
    id: '04',
    name: 'Estrela.photo',
    type: 'Artist Portrait Photography',
    vertical: 'Visual Arts',
    desc: 'Artist portrait photography. Capturing identity, presence, and energy for musicians, creatives, and performers.',
    url: 'https://estrela.photo',
    status: 'Live',
    year: '2025',
  },
]

const pillars = [
  { label: 'Build', desc: 'We build digital products from the ground up — apps, platforms, tools.' },
  { label: 'Launch', desc: 'We take ideas to market fast. No endless iteration, real launch dates.' },
  { label: 'Scale', desc: 'Each brand is designed to grow independently, globally.' },
]

const stats = [
  { value: '4', label: 'Active Brands' },
  { value: '2026', label: 'Founded' },
  { value: 'UAE', label: 'Headquartered' },
  { value: '∞', label: 'Building' },
]

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })
  const [hoveredVenture, setHoveredVenture] = useState<string | null>(null)
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
            <a href="#ventures" style={{ fontSize: '0.65rem', color: 'var(--white)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
              BRANDS
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

          {/* Content — single column, left aligned */}
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
              beatLabs is a Dubai-based digital studio. We create, launch, and scale independent brands — apps, agencies, platforms, and creative studios.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#ventures" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, color: 'var(--black)', background: 'var(--lime)', padding: '0.8rem 2rem', textDecoration: 'none' }}>
                OUR BRANDS →
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

        {/* ── PILLARS ── */}
        <section style={{ padding: '6rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>HOW WE OPERATE</span>
          </motion.div>
          <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {pillars.map((p, i) => (
              <motion.div key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '2.5rem', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '3.5rem', color: 'var(--white)', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '1rem' }}>
                  {p.label}<span style={{ color: 'var(--lime)' }}>.</span>
                </div>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── VENTURES ── */}
        <section id="ventures" style={{ padding: '6rem 2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4rem' }}
          >
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '0.05em', color: 'var(--white)' }}>
              Our Brands
            </h2>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', fontFamily: 'var(--font-syne)' }}>
              {ventures.length} BRANDS
            </span>
          </motion.div>

          <div>
            {ventures.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHoveredVenture(v.id)}
                onMouseLeave={() => setHoveredVenture(null)}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  padding: '2.5rem 0',
                  background: hoveredVenture === v.id ? 'rgba(200,255,71,0.015)' : 'transparent',
                  transition: 'background 0.4s',
                }}
              >
                <div className="venture-grid" style={{ display: 'grid', gridTemplateColumns: '3rem 1fr auto', gap: '2rem', alignItems: 'center' }}>
                  {/* Number */}
                  <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{v.id}</span>

                  {/* Content */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-bebas)',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        letterSpacing: '0.03em',
                        color: hoveredVenture === v.id ? 'var(--lime)' : 'var(--white)',
                        transition: 'color 0.3s',
                        lineHeight: 1,
                      }}>
                        {v.name}
                      </h3>
                      <span style={{
                        fontSize: '0.58rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                        padding: '0.2rem 0.7rem', letterSpacing: '0.15em',
                        border: `1px solid ${v.status === 'Live' ? 'var(--lime)' : 'rgba(255,255,255,0.12)'}`,
                        color: v.status === 'Live' ? 'var(--lime)' : 'var(--muted)',
                      }}>
                        {v.status.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.58rem', fontFamily: 'var(--font-syne)', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', border: '1px solid rgba(255,255,255,0.08)', padding: '0.2rem 0.7rem' }}>
                        {v.vertical.toUpperCase()}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>
                      {v.type.toUpperCase()} · EST. {v.year}
                    </p>
                    <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.6, maxWidth: '520px' }}>
                      {v.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="venture-cta">
                    {v.url ? (
                      <a href={v.url} target="_blank" rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700,
                          color: hoveredVenture === v.id ? 'var(--black)' : 'var(--white)',
                          background: hoveredVenture === v.id ? 'var(--lime)' : 'transparent',
                          border: '1px solid rgba(255,255,255,0.15)',
                          padding: '0.7rem 1.4rem', textDecoration: 'none',
                          transition: 'all 0.3s', display: 'inline-block', whiteSpace: 'nowrap',
                        }}>
                        VISIT →
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', fontWeight: 700 }}>
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
        <section className="about-grid" style={{ padding: '6rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700, display: 'block', marginBottom: '2rem' }}>THE STUDIO</span>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '0.02em' }}>
              One Studio.<br />
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>Many Brands.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              beatLabs is a digital studio behind a growing portfolio of independent brands. Each one operates autonomously with its own identity, audience, and revenue model.
            </p>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We are builders first. Our process is lean: validate fast, launch clean, iterate with data. We don&apos;t build for investors — we build for users.
            </p>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.8 }}>
              Based in Dubai. Operating globally.
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
              Partnership inquiries, investment, or just a conversation<br />{"about what we're building next."}
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
        <footer className="footer-grid" style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '3rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'end',
          gap: '2rem',
        }}>
          <div>
            <img src="/logo.png" alt="beatLabs" style={{ height: '1.6rem', marginBottom: '0.8rem', display: 'block' }} />
            <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)' }}>
              © 2026 beatLabs — Dubai, UAE
            </span>
          </div>
          <div>
            <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {ventures.filter(v => v.url).map(v => (
                <a key={v.id} href={v.url!} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', fontWeight: 700, textDecoration: 'none' }}>
                  {v.name.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-right" style={{ textAlign: 'right' }}>
            <a href="mailto:info@beatlabs.ae"
              style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              info@beatlabs.ae
            </a>
            <div style={{ fontSize: '0.55rem', color: 'rgba(85,85,85,0.4)', letterSpacing: '0.1em', fontFamily: 'var(--font-syne)', marginTop: '0.4rem' }}>
              BUILD DIFFERENT.
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
