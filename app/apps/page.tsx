'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const apps = [
  {
    id: '01',
    name: 'Nibango',
    type: 'Marketplace App',
    desc: 'Peer-to-peer second-hand marketplace reimagined for the Gulf.',
    status: 'In Development',
    slug: 'nibango',
    docs: [
      { label: 'Privacy Policy', href: '/apps/nibango/privacy' },
      { label: 'Terms of Service', href: '/apps/nibango/terms' },
    ],
  },
  {
    id: '02',
    name: 'Subtrackr',
    type: 'Finance App',
    desc: "Track all your subscriptions in one place. Know exactly what you're paying, when, and cancel what you don't need.",
    status: 'In Development',
    slug: 'subtrackr',
    docs: [
      { label: 'Privacy Policy', href: '/apps/subtrackr/privacy' },
      { label: 'Terms of Service', href: '/apps/subtrackr/terms' },
    ],
  },
]

export default function AppsPage() {
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
          <Link href="/" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← HOME
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>APPS</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            Our<br /><span style={{ color: 'var(--lime)' }}>Applications.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '480px' }}>
            Mobile and web applications built by beatLabs. Each app has its own documentation, legal pages, and support resources.
          </p>
        </motion.div>
      </section>

      {/* APP LIST */}
      <section style={{ padding: '0 2.5rem 8rem' }}>
        <div>
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '3rem 0',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '2rem', alignItems: 'start' }}>
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em', paddingTop: '0.5rem' }}>{app.id}</span>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.03em', color: 'var(--white)', lineHeight: 1 }}>
                      {app.name}
                    </h2>
                    <span style={{
                      fontSize: '0.58rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                      padding: '0.2rem 0.7rem', letterSpacing: '0.15em',
                      border: `1px solid ${app.status === 'Live' ? 'var(--lime)' : 'rgba(255,255,255,0.12)'}`,
                      color: app.status === 'Live' ? 'var(--lime)' : 'var(--muted)',
                    }}>
                      {app.status.toUpperCase()}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>
                    {app.type.toUpperCase()}
                  </p>

                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '2rem' }}>
                    {app.desc}
                  </p>

                  {/* Legal docs */}
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em', alignSelf: 'center' }}>LEGAL DOCS:</span>
                    {app.docs.map(doc => (
                      <Link
                        key={doc.href}
                        href={doc.href}
                        style={{
                          fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 700,
                          color: 'var(--white)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          padding: '0.5rem 1.2rem', textDecoration: 'none',
                          transition: 'all 0.3s',
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
                        {doc.label} →
                      </Link>
                    ))}
                  </div>
                </div>
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
