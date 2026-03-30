'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect the following types of information when you use Subtrackr:

**Information you provide:**
• Account details: name, email address, and password
• Subscription data: service names, amounts, billing cycles, renewal dates, and categories you enter manually

**Information collected automatically:**
• Device information: device type, operating system, and app version
• Usage data: features used, screens visited, and interaction patterns
• Crash reports and performance diagnostics

**Important:** Subtrackr does not connect to your bank accounts, credit cards, or any financial institution. All subscription data is entered manually by you.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide and operate the Subtrackr service
• Sync your data across your devices
• Send renewal reminders and spending alerts (if enabled)
• Improve app performance and fix bugs
• Respond to support requests
• Comply with legal obligations

We do not use your data for advertising or sell it to third parties.`,
  },
  {
    title: '3. Data Storage and Security',
    content: `Your subscription data is stored securely on our servers and synced to your devices. We use industry-standard encryption (TLS in transit, AES-256 at rest) to protect your information.

You may also choose to store data locally on your device only, without cloud sync, by disabling sync in app settings.`,
  },
  {
    title: '4. Information Sharing',
    content: `We do not sell your personal information. We share data only in limited circumstances:

• **Service providers:** Third-party vendors who help operate Subtrackr (hosting, analytics, crash reporting) under strict data processing agreements
• **Legal requirements:** If required by law, regulation, or valid legal process
• **Business transfers:** In connection with a merger or acquisition, with advance notice to users`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your account data for as long as your account is active. If you delete your account, your personal data and subscription records will be permanently deleted within 30 days, except where retention is required by law.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:

• Access the data we hold about you
• Correct or update inaccurate data
• Export your subscription data (CSV/JSON)
• Delete your account and all associated data
• Withdraw consent to optional data processing

To exercise any of these rights, contact info@beatlabs.ae or use the settings within the app.`,
  },
  {
    title: '7. Push Notifications',
    content: `Subtrackr may send push notifications for upcoming renewals, spending summaries, and alerts. You can manage or disable notifications at any time through your device settings or within the app.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `Subtrackr is not intended for users under 16 years of age. We do not knowingly collect personal data from minors. If we become aware that a minor has provided us with data, we will delete it promptly.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app notice at least 14 days before they take effect. Your continued use of Subtrackr after changes constitutes acceptance.`,
  },
  {
    title: '10. Contact',
    content: `For privacy-related questions or requests:

beatLabs
info@beatlabs.ae
Dubai, United Arab Emirates`,
  },
]

export default function SubtrackrPrivacyPage() {
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
          <Link href="/apps/subtrackr" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← SUBTRACKR
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem', maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>SUBTRACKR · LEGAL</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            Privacy<br /><span style={{ color: 'var(--lime)' }}>Policy.</span>
          </h1>
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
            LAST UPDATED: MARCH 30, 2026
          </span>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '600px', marginTop: '1.5rem' }}>
            This Privacy Policy explains how beatLabs (operator of Subtrackr) collects, uses, and protects your personal information when you use our app.
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
