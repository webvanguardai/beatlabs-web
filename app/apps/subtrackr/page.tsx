'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const legalDocs = [
  {
    title: 'Privacy Policy',
    desc: 'How we collect, use, and protect your personal data.',
    href: '/apps/subtrackr/privacy',
    updated: '2026-03-30',
  },
  {
    title: 'Terms of Service',
    desc: 'Rules and conditions for using Subtrackr.',
    href: '/apps/subtrackr/terms',
    updated: '2026-03-30',
  },
]

export default function SubtrackrPage() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(12px)',
      }}>
        <Link href="/">
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.8rem', width: 'auto', cursor: 'pointer' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/apps" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← APPS
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>APPS / SUBTRACKR</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 9vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            Subtrackr
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{
              fontSize: '0.58rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
              padding: '0.2rem 0.7rem', letterSpacing: '0.15em',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'var(--muted)',
            }}>
              IN DEVELOPMENT
            </span>
            <span style={{
              fontSize: '0.58rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
              padding: '0.2rem 0.7rem', letterSpacing: '0.15em',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.15)',
            }}>
              FINANCE APP
            </span>
          </div>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '520px' }}>
            Track all your subscriptions in one place. Know exactly what you're paying, when, and cancel what you don't need.
          </p>
        </motion.div>
      </section>

      {/* LEGAL DOCS */}
      <section style={{ padding: '0 2.5rem 8rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>LEGAL DOCUMENTS</span>
        </motion.div>

        <div>
          {legalDocs.map((doc, i) => (
            <motion.div
              key={doc.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 0' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '0.03em', color: 'var(--white)', lineHeight: 1, marginBottom: '0.6rem' }}>
                    {doc.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.4)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                    {doc.desc}
                  </p>
                  <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
                    LAST UPDATED: {doc.updated}
                  </span>
                </div>
                <Link
                  href={doc.href}
                  style={{
                    fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700,
                    color: 'var(--white)', border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.7rem 1.6rem', textDecoration: 'none',
                    transition: 'all 0.3s', display: 'inline-block', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--lime)'
                    e.currentTarget.style.color = 'var(--lime)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.color = 'var(--white)'
                  }}
                >
                  READ →
                </Link>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)' }}>
          © 2026 beatLabs — Dubai, UAE
        </span>
        <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}>
          info@beatlabs.ae
        </a>
      </footer>

    </main>
  )
}
