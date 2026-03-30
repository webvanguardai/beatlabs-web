'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when creating an account, listing items, or communicating with other users. This includes:

• Name, email address, and password
• Profile information (photo, bio, location)
• Listing details (photos, descriptions, prices)
• Messages sent through the platform
• Payment information (processed securely via our payment provider)
• Device information, IP address, and usage data`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Create and manage your account
• Facilitate transactions between buyers and sellers
• Send notifications about your listings and purchases
• Improve and personalise the Nibango experience
• Detect and prevent fraud or abuse
• Comply with legal obligations`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell your personal information. We share data only in these cases:

• With other users as necessary to complete a transaction (e.g. your username and listing city are visible publicly)
• With service providers who help operate Nibango (payment processors, hosting providers, analytics)
• If required by law, court order, or government authority
• In connection with a merger, acquisition, or sale of assets (you will be notified in advance)`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at info@beatlabs.ae. Some data may be retained longer for legal compliance.`,
  },
  {
    title: '5. Security',
    content: `We take reasonable technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. However, no internet transmission is completely secure. You are responsible for keeping your account credentials confidential.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your location, you may have the right to:

• Access the personal data we hold about you
• Correct inaccurate data
• Request deletion of your data
• Object to or restrict processing
• Data portability

To exercise any of these rights, contact info@beatlabs.ae.`,
  },
  {
    title: '7. Cookies',
    content: `Nibango uses cookies and similar technologies to maintain sessions, remember preferences, and analyse usage. You can control cookie settings through your browser, but disabling cookies may affect functionality.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `Nibango is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal data, we will delete it promptly.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice in the app. Your continued use of Nibango after changes take effect constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact',
    content: `For privacy-related questions or requests, contact us at:

beatLabs
info@beatlabs.ae
Dubai, United Arab Emirates`,
  },
]

export default function NibangoPrivacyPage() {
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
          <Link href="/apps/nibango" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← NIBANGO
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem', maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>NIBANGO · LEGAL</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            Privacy<br /><span style={{ color: 'var(--lime)' }}>Policy.</span>
          </h1>
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
            LAST UPDATED: MARCH 30, 2026
          </span>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '600px', marginTop: '1.5rem' }}>
            This Privacy Policy explains how beatLabs (operator of Nibango) collects, uses, and protects your personal information when you use our platform.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '0 2.5rem 8rem', maxWidth: '800px' }}>
        <div>
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '2.5rem 0',
              }}
            >
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.05em', color: 'var(--white)', marginBottom: '1.2rem' }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {section.content}
              </p>
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
