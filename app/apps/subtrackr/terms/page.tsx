'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By downloading, installing, or using Subtrackr ("the App"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not use the App.

beatLabs reserves the right to update these terms at any time. We will notify you of material changes at least 14 days in advance. Continued use after changes take effect constitutes acceptance.`,
  },
  {
    title: '2. Description of Service',
    content: `Subtrackr is a personal subscription tracking app that allows you to:

• Manually add and manage your subscriptions
• Set renewal reminders and spending alerts
• View spending summaries and analytics
• Organise subscriptions by category

Subtrackr does not connect to banks, credit cards, or any financial institution. It does not make payments on your behalf or access your financial accounts.`,
  },
  {
    title: '3. Eligibility',
    content: `You must be at least 16 years old to use Subtrackr. By creating an account, you represent that you meet this requirement and that all information you provide is accurate.`,
  },
  {
    title: '4. Account Responsibilities',
    content: `You are responsible for:

• Maintaining the confidentiality of your login credentials
• All activity that occurs under your account
• Ensuring the subscription data you enter is accurate

You agree to notify us immediately of any unauthorised access to your account at info@beatlabs.ae.`,
  },
  {
    title: '5. Acceptable Use',
    content: `You agree not to:

• Use the App for any unlawful purpose
• Attempt to reverse engineer, decompile, or hack the App
• Scrape, copy, or redistribute App content or data
• Use the App to store or transmit malicious code
• Create multiple accounts to circumvent restrictions

Violations may result in immediate account termination.`,
  },
  {
    title: '6. Subscription Plans and Billing',
    content: `Subtrackr may offer free and paid tiers. Paid plans are billed through the App Store (Apple) or Google Play Store according to their respective terms.

• Prices are displayed before purchase and are in the currency of your region
• Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date
• Refunds are handled according to App Store / Google Play policies
• beatLabs reserves the right to change pricing with 30 days' notice`,
  },
  {
    title: '7. Data Accuracy',
    content: `Subtrackr is a manual tracking tool. beatLabs does not guarantee the accuracy, completeness, or timeliness of any subscription data. You are solely responsible for verifying your subscriptions and actual charges with your service providers.

Subtrackr is not a financial advisory service and should not be relied upon as one.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content, design, code, and branding in Subtrackr are owned by beatLabs and protected by applicable intellectual property laws.

You are granted a limited, non-exclusive, non-transferable licence to use the App for personal, non-commercial purposes. This licence does not include the right to sublicense, sell, or redistribute the App.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by law, beatLabs shall not be liable for:

• Inaccurate subscription data or missed renewals
• Financial decisions made based on App data
• Loss of data due to device failure or account deletion
• Indirect, incidental, or consequential damages

The App is provided "as is" without warranties of any kind, express or implied.`,
  },
  {
    title: '10. Termination',
    content: `You may delete your account at any time from within the App or by contacting info@beatlabs.ae.

beatLabs reserves the right to suspend or terminate accounts that violate these Terms, with or without notice.`,
  },
  {
    title: '11. Governing Law',
    content: `These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.`,
  },
  {
    title: '12. Contact',
    content: `For questions about these Terms:

beatLabs
info@beatlabs.ae
Dubai, United Arab Emirates`,
  },
]

export default function SubtrackrTermsPage() {
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
            Terms of<br /><span style={{ color: 'var(--lime)' }}>Service.</span>
          </h1>
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
            LAST UPDATED: MARCH 30, 2026
          </span>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '600px', marginTop: '1.5rem' }}>
            These Terms of Service govern your use of Subtrackr, operated by beatLabs. Please read them carefully.
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
