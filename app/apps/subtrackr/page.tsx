'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const features = [
  {
    id: '01',
    title: 'Every subscription. One place.',
    desc: 'Netflix, Spotify, iCloud, gym, SaaS tools — add them all. No more hunting through bank statements wondering what that €9.99 charge was.',
  },
  {
    id: '02',
    title: "Renewal alerts before it's too late.",
    desc: "Get notified days before a subscription renews. Cancel what you don't want — not after you've already been charged.",
  },
  {
    id: '03',
    title: 'See the real number.',
    desc: "Monthly. Annual. Weekly. Subtrackr converts everything to a single monthly cost so you actually know what you're spending.",
  },
  {
    id: '04',
    title: 'Categories that make sense.',
    desc: 'Entertainment, productivity, fitness, utilities. Spot which categories are bleeding your budget dry.',
  },
]

const howItWorks = [
  { step: '01', title: 'Add a subscription', desc: 'Name, price, billing cycle, renewal date. Takes 10 seconds.' },
  { step: '02', title: 'Set your alerts', desc: 'Pick how many days before renewal you want a heads-up.' },
  { step: '03', title: 'Review your spending', desc: 'Dashboard shows monthly total, upcoming renewals, and what you can cut.' },
]

const stats = [
  { value: '£273', label: 'Avg. monthly subscriptions per person' },
  { value: '47%', label: 'Forgotten subscriptions still being charged' },
  { value: '12', label: 'Avg. subscriptions per user' },
]

export default function SubtrackrPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.2rem 1.5rem',
          borderBottom: scrollY > 40 ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          background: scrollY > 40 ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrollY > 40 ? 'blur(12px)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        <Link href="/">
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.6rem', width: 'auto', cursor: 'pointer', opacity: 0.7 }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/apps" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← ALL APPS
          </Link>
          <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--lime)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700, border: '1px solid var(--lime)', padding: '0.4rem 0.9rem' }}>
            NOTIFY ME
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>

        {/* BG grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '760px', position: 'relative' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>FINANCE APP · BY BEATLABS</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4.5rem, 11vw, 11rem)', lineHeight: 0.88, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '2.5rem' }}>
            Sub<span style={{ color: 'var(--lime)' }}>trackr.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '1rem' }}>
            You&apos;re paying for more than you think.
          </p>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.35)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '3rem' }}>
            Subtrackr tracks every subscription in one place — with alerts before renewals, a real monthly total, and zero surprises on your bank statement.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700,
              color: 'var(--black)', background: 'var(--lime)', padding: '0.9rem 2.2rem',
              display: 'inline-block',
            }}>
              COMING SOON
            </span>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
              iOS · ANDROID
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '4rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--lime)', lineHeight: 1, letterSpacing: '0.02em' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginTop: '0.6rem', lineHeight: 1.4 }}>
                {s.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section style={{ padding: '8rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700, display: 'block', marginBottom: '2rem' }}>WHAT IS SUBTRACKR</span>
            <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '0.02em' }}>
              Your subscriptions.<br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>Under control.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              The average person is subscribed to 12+ services and has no idea what they&apos;re paying monthly. Subtrackr fixes that — manually, privately, without connecting to your bank.
            </p>
            <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.8 }}>
              Add your subscriptions in seconds. Subtrackr does the math, sends the alerts, and shows you exactly where your money is going before you notice it&apos;s gone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '8rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>FEATURES</span>
        </motion.div>

        <div>
          {features.map((f, i) => (
            <motion.div key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 0', display: 'grid', gridTemplateColumns: '3rem 1fr 1fr', gap: '2rem', alignItems: 'start' }}
            >
              <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em', paddingTop: '0.3rem' }}>{f.id}</span>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '8rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '0.02em', marginTop: '1.5rem' }}>
            Three steps.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Zero friction.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {howItWorks.map((h, i) => (
            <motion.div key={h.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '2.5rem', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--lime)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>{h.step}</div>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: 'var(--white)', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '1rem' }}>
                {h.title}<span style={{ color: 'var(--lime)' }}>.</span>
              </div>
              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.4)', lineHeight: 1.7 }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '8rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '-0.01em', marginBottom: '2rem' }}>
            Stop paying for<br /><span style={{ color: 'var(--lime)' }}>things you forgot.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.4)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Subtrackr is coming soon to iOS and Android.<br />Leave your email and we&apos;ll let you know when it&apos;s live.
          </p>
          <a href="mailto:info@beatlabs.ae?subject=Subtrackr early access"
            style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.75rem', letterSpacing: '0.25em', fontWeight: 700,
              color: 'var(--black)', background: 'var(--lime)',
              padding: '1rem 3rem', textDecoration: 'none', display: 'inline-block',
            }}>
            GET EARLY ACCESS →
          </a>
        </motion.div>
      </section>

      {/* ── LEGAL ── */}
      <section style={{ padding: '6rem 2.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>LEGAL</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          {[
            { title: 'Privacy Policy', desc: 'How we collect, use, and protect your data.', href: '/apps/subtrackr/privacy' },
            { title: 'Terms of Service', desc: 'Rules and conditions for using Subtrackr.', href: '/apps/subtrackr/terms' },
          ].map((doc, i) => (
            <motion.div key={doc.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={doc.href} style={{ textDecoration: 'none', display: 'block', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,71,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '0.8rem' }}>
                  {doc.title} →
                </div>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem', color: 'rgba(240,237,232,0.35)', lineHeight: 1.5 }}>
                  {doc.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="beatLabs" style={{ height: '1.4rem', opacity: 0.5 }} />
          </Link>
          <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)' }}>
            © 2026 beatLabs — Dubai, UAE
          </span>
        </div>
        <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}>
          info@beatlabs.ae
        </a>
      </footer>

    </main>
  )
}
