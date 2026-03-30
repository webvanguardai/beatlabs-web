'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using Nibango ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Platform. We reserve the right to update these terms at any time, with notice provided via email or in-app notification.`,
  },
  {
    title: '2. Eligibility',
    content: `You must be at least 18 years old to use Nibango. By creating an account, you represent that you meet this requirement and that all information you provide is accurate and complete.`,
  },
  {
    title: '3. Account Responsibilities',
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised use of your account at info@beatlabs.ae.

You may not:
• Create multiple accounts or share accounts
• Impersonate other users or entities
• Use the platform for any illegal purpose`,
  },
  {
    title: '4. Listings and Transactions',
    content: `Nibango is a peer-to-peer marketplace. beatLabs is not a party to transactions between buyers and sellers.

As a seller, you agree to:
• Only list items you legally own and have the right to sell
• Accurately describe items including any defects
• Complete transactions in good faith

As a buyer, you agree to:
• Pay promptly when a purchase is confirmed
• Communicate respectfully with sellers
• Not misrepresent your identity or intent

beatLabs is not responsible for the quality, safety, or legality of listed items.`,
  },
  {
    title: '5. Prohibited Content',
    content: `The following are not permitted on Nibango:

• Counterfeit, stolen, or illegal items
• Weapons, drugs, or controlled substances
• Adult content or services
• Items that infringe intellectual property rights
• Misleading listings or fraudulent descriptions

Violations may result in immediate account suspension and reporting to relevant authorities.`,
  },
  {
    title: '6. Fees and Payments',
    content: `Creating an account and listing items on Nibango is free. beatLabs may introduce transaction fees in the future; users will be notified at least 30 days in advance before any fees take effect.

Payments between users are processed via secure third-party payment providers. beatLabs does not store payment card data.`,
  },
  {
    title: '7. Intellectual Property',
    content: `All content on the Nibango platform (excluding user-generated content) is owned by beatLabs and protected by applicable intellectual property laws.

By posting content on Nibango, you grant beatLabs a non-exclusive, worldwide, royalty-free licence to display and distribute that content within the platform.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, beatLabs shall not be liable for:

• Disputes between buyers and sellers
• Loss of data or business interruption
• Indirect, incidental, or consequential damages

The platform is provided "as is" without warranties of any kind.`,
  },
  {
    title: '9. Dispute Resolution',
    content: `Any disputes arising from your use of Nibango shall be governed by the laws of the United Arab Emirates. Disputes should first be attempted to be resolved through direct communication with the other party. If unresolved, both parties agree to good-faith mediation before pursuing legal action.`,
  },
  {
    title: '10. Termination',
    content: `beatLabs reserves the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. You may delete your account at any time by contacting info@beatlabs.ae.`,
  },
  {
    title: '11. Contact',
    content: `For questions about these Terms, contact us at:

beatLabs
info@beatlabs.ae
Dubai, United Arab Emirates`,
  },
]

export default function NibangoTermsPage() {
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
            Terms of<br /><span style={{ color: 'var(--lime)' }}>Service.</span>
          </h1>
          <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
            LAST UPDATED: MARCH 30, 2026
          </span>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '600px', marginTop: '1.5rem' }}>
            These Terms of Service govern your use of the Nibango platform operated by beatLabs. Please read them carefully before using the service.
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
