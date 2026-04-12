'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const features = [
  {
    icon: '📊',
    title: 'All subscriptions. One view.',
    desc: 'Netflix, Spotify, iCloud, gym memberships — see every recurring charge in a single, clean dashboard.',
  },
  {
    icon: '🔔',
    title: 'Renewal alerts.',
    desc: 'Get notified days before you get charged. Cancel what you forgot about — before it costs you.',
  },
  {
    icon: '💱',
    title: 'Multi-currency.',
    desc: 'Subscriptions in USD, EUR, GBP, AED? SubTrackr converts everything to your currency automatically.',
  },
  {
    icon: '🔒',
    title: 'Privacy first.',
    desc: 'Your data stays on your device. No bank connections, no tracking, no ads. Optional cloud sync with your account.',
  },
  {
    icon: '📱',
    title: 'Widgets & quick glance.',
    desc: 'Home Screen widgets show upcoming renewals and monthly totals at a glance. No need to open the app.',
  },
  {
    icon: '🌍',
    title: '12 languages.',
    desc: 'English, Spanish, Arabic, French, German, Portuguese, Japanese, Korean, Chinese, and more. SubTrackr speaks your language.',
  },
]

const steps = [
  { num: '1', title: 'Add', desc: 'Name, price, cycle, date. Done in seconds.' },
  { num: '2', title: 'Track', desc: 'See your monthly total and upcoming renewals.' },
  { num: '3', title: 'Save', desc: 'Cancel what you don\'t need. Keep what matters.' },
]

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export default function SubtrackrPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main style={{ background: '#000', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ── NAV ── */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1rem 2rem',
          background: scrollY > 60 ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrollY > 60 ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrollY > 60 ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.4rem', opacity: 0.6 }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/apps" style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em', textDecoration: 'none', fontWeight: 500,
            transition: 'color 0.2s',
          }}>
            All Apps
          </Link>
          <Link href="/apps/subtrackr/privacy" style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em', textDecoration: 'none', fontWeight: 500,
          }}>
            Privacy
          </Link>
          <Link href="/apps/subtrackr/terms" style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em', textDecoration: 'none', fontWeight: 500,
          }}>
            Terms
          </Link>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(200,255,71,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: 'relative', maxWidth: '720px' }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '100px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '2.5rem',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--lime)', boxShadow: '0 0 8px rgba(200,255,71,0.5)',
            }} />
            <span style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.06em', fontWeight: 500,
            }}>
              Available on iOS & Android
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 12vw, 8rem)',
            lineHeight: 0.92, letterSpacing: '-0.02em',
            color: '#fff', marginBottom: '1.5rem',
          }}>
            Sub<span style={{ color: 'var(--lime)' }}>Trackr</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.45)', lineHeight: 1.6,
            maxWidth: '480px', margin: '0 auto 3rem',
            fontWeight: 400,
          }}>
            Know exactly what you&apos;re paying for.
            <br />
            Track every subscription. Get alerts before renewals. Save money.
          </p>

          {/* Store badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.8rem 1.6rem', borderRadius: '12px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >
              <svg width="20" height="24" viewBox="0 0 814 1000" fill="white">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.2-81-105.5-207.3-105.5-327.3 0-192.8 125.5-295.1 248.7-295.1 65.5 0 120 43.4 161.2 43.4 39.2 0 100.4-46.1 174.6-46.1 28.2 0 130 2.5 197.3 95.5zm-271.5-87.7c31.2-36.9 53.4-88.1 53.4-139.3 0-7.1-.6-14.3-1.9-20.1-50.9 1.9-111.5 33.9-148.1 76.5-26.3 29.8-53.6 81-53.6 133.1 0 7.8.9 15.6 1.3 18.1 2.5.3 6.5 1 10.5 1 45.6 0 103.7-30.4 138.4-69.3z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>Download on the</div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: '#fff', fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
              </div>
            </a>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.8rem 1.6rem', borderRadius: '12px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >
              <svg width="20" height="22" viewBox="0 0 512 512" fill="white">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>Get it on</div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: '#fff', fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: 'relative', width: '280px', height: '560px' }}
        >
          {/* Phone frame */}
          <div style={{
            width: '100%', height: '100%',
            borderRadius: '40px',
            border: '3px solid rgba(255,255,255,0.15)',
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.05)',
            position: 'relative',
          }}>
            {/* Dynamic Island */}
            <div style={{
              position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
              width: '100px', height: '28px', borderRadius: '20px',
              background: '#000', zIndex: 2,
            }} />

            {/* Screen content */}
            <div style={{
              padding: '56px 20px 20px',
              height: '100%',
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Status bar area */}
              <div style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)',
                marginBottom: '16px', letterSpacing: '0.02em',
              }}>
                My Subscriptions
              </div>

              {/* Monthly total */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Monthly Total</div>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.5rem', color: 'var(--lime)', lineHeight: 1 }}>$47.96</div>
              </div>

              {/* Mini subscription cards */}
              {[
                { name: 'Netflix', price: '$15.99', color: '#E50914', icon: 'N' },
                { name: 'Spotify', price: '$9.99', color: '#1DB954', icon: 'S' },
                { name: 'iCloud+', price: '$2.99', color: '#3693F5', icon: 'i' },
                { name: 'ChatGPT', price: '$19.99', color: '#10A37F', icon: 'G' },
              ].map((sub, i) => (
                <div key={sub.name} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 12px', marginBottom: '6px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '8px',
                    background: sub.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-syne)', fontSize: '0.7rem', fontWeight: 700, color: '#fff',
                  }}>
                    {sub.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{sub.name}</div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.3)' }}>Renews in {3 + i * 5} days</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{sub.price}</div>
                </div>
              ))}

              {/* Bottom tab bar hint */}
              <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                <div style={{
                  width: '120px', height: '4px', borderRadius: '2px',
                  background: 'rgba(255,255,255,0.15)', margin: '0 auto',
                }} />
              </div>
            </div>
          </div>

          {/* Reflection glow */}
          <div style={{
            position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)',
            width: '200px', height: '120px',
            background: 'radial-gradient(ellipse, rgba(200,255,71,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '20px', height: '32px', borderRadius: '12px',
              border: '1.5px solid rgba(255,255,255,0.2)',
              display: 'flex', justifyContent: 'center', paddingTop: '6px',
            }}
          >
            <div style={{ width: '2px', height: '6px', borderRadius: '1px', background: 'rgba(255,255,255,0.4)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHAT IT DOES ── */}
      <section style={{
        padding: '8rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={fade} custom={0}
        >
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--lime)',
            letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Why SubTrackr
          </p>
          <h2 style={{
            fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#fff', lineHeight: 0.95, letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            The average person pays for<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>12 subscriptions they can&apos;t track.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7, maxWidth: '520px', margin: '0 auto',
          }}>
            SubTrackr puts every subscription in one place. No bank connections.
            No data sharing. Just a clean, private dashboard that shows you
            exactly where your money goes each month.
          </p>
        </motion.div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section style={{ padding: '4rem 2rem 8rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fade} custom={i}
              style={{
                padding: '2.5rem',
                background: 'rgba(10,10,10,0.9)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(20,20,20,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(10,10,10,0.9)')}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>{f.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-syne)', fontSize: '1rem', color: '#fff',
                fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.35)', lineHeight: 1.7,
              }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '6rem 2rem 8rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fade} custom={0}
        >
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--lime)',
            letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            How it works
          </p>
          <h2 style={{
            fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#fff', lineHeight: 0.95, marginBottom: '4rem',
          }}>
            Three taps. That&apos;s it.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fade} custom={i}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                width: '56px', height: '56px', borderRadius: '16px',
                background: 'rgba(200,255,71,0.08)',
                border: '1px solid rgba(200,255,71,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.2rem',
                fontFamily: 'var(--font-bebas)', fontSize: '1.5rem',
                color: 'var(--lime)',
              }}>
                {s.num}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-bebas)', fontSize: '1.8rem',
                color: '#fff', letterSpacing: '0.02em', marginBottom: '0.5rem',
              }}>
                {s.title}<span style={{ color: 'var(--lime)' }}>.</span>
              </h3>
              <p style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.35)', lineHeight: 1.6,
              }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '5rem 2rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {[
            { value: '5', unit: 'free', label: 'Subscriptions on free tier' },
            { value: '30+', unit: '', label: 'Currencies supported' },
            { value: '13', unit: '', label: 'Languages' },
            { value: '0', unit: 'ads', label: 'No ads. No tracking.' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fade} custom={i}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'var(--lime)', lineHeight: 1,
              }}>
                {s.value}
                {s.unit && <span style={{ fontSize: '0.4em', color: 'rgba(255,255,255,0.3)', marginLeft: '4px' }}>{s.unit}</span>}
              </div>
              <div style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em',
                marginTop: '0.5rem', lineHeight: 1.4,
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PRO TIER ── */}
      <section style={{ padding: '8rem 2rem', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fade} custom={0}
        >
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--lime)',
            letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            SubTrackr Pro
          </p>
          <h2 style={{
            fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#fff', lineHeight: 0.95, marginBottom: '1.5rem',
          }}>
            Unlimited everything.
          </h2>
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7, maxWidth: '460px', margin: '0 auto 3rem',
          }}>
            The free tier covers up to 5 subscriptions. Go Pro for unlimited tracking,
            cloud sync, widgets, shared costs, and more.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fade} custom={1}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            padding: '2.5rem 3.5rem', borderRadius: '16px',
            border: '1px solid rgba(200,255,71,0.2)',
            background: 'rgba(200,255,71,0.03)',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.5rem', color: '#fff', lineHeight: 1, marginBottom: '0.5rem' }}>
              Lifetime
            </div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
              One-time purchase. Yours forever.
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '8rem 2rem',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(circle, rgba(200,255,71,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fade} custom={0}
          style={{ position: 'relative' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: '#fff', lineHeight: 0.92, marginBottom: '1.5rem',
          }}>
            Stop guessing.<br />
            <span style={{ color: 'var(--lime)' }}>Start tracking.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}>
            Free to download. No account required.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#" style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#000', background: 'var(--lime)',
              padding: '0.9rem 2.5rem', borderRadius: '12px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,255,71,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Download for iOS
            </a>
            <a href="#" style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#fff', background: 'transparent',
              padding: '0.9rem 2.5rem', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.15)',
              textDecoration: 'none', display: 'inline-block',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent' }}
            >
              Download for Android
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── LEGAL ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <Link href="/apps/subtrackr/privacy" style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)',
            textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            Privacy Policy
          </Link>
          <Link href="/apps/subtrackr/terms" style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)',
            textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            Terms of Service
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '2.5rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
        maxWidth: '1100px', margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="beatLabs" style={{ height: '1.2rem', opacity: 0.4 }} />
          </Link>
          <span style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.6rem',
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em',
          }}>
            &copy; 2026 Beat Labs &mdash; Dubai, UAE
          </span>
        </div>
        <a href="mailto:info@beatlabs.ae" style={{
          fontFamily: 'var(--font-syne)', fontSize: '0.6rem',
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.04em',
          textDecoration: 'none',
        }}>
          info@beatlabs.ae
        </a>
      </footer>

      {/* ── RESPONSIVE ── */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          section > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </main>
  )
}
