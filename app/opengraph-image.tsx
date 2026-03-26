import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'beatLabs — Digital Studio. Dubai, UAE.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Top — logo text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '32px', height: '2px', background: '#C8FF47' }} />
          <span style={{ color: '#C8FF47', fontSize: '14px', letterSpacing: '0.25em', fontWeight: 700 }}>STUDIO</span>
        </div>

        {/* Center — main text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ color: '#F0EDE8', fontSize: '120px', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-2px' }}>
            beatLabs
          </span>
          <span style={{ color: 'rgba(240,237,232,0.35)', fontSize: '28px', fontWeight: 400, letterSpacing: '0.05em', marginTop: '24px' }}>
            Build. Launch. Scale.
          </span>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Nibango', 'WebVanguard', 'TrueLoveCreative', 'Estrela.photo'].map(b => (
              <span key={b} style={{ color: 'rgba(240,237,232,0.3)', fontSize: '14px', letterSpacing: '0.1em' }}>{b}</span>
            ))}
          </div>
          <span style={{ color: 'rgba(240,237,232,0.3)', fontSize: '14px', letterSpacing: '0.2em' }}>DUBAI, UAE</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
