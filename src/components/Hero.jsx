import { C } from '../constants/theme';

const stats = [
  { value: '408', label: 'Days to election' },
  { value: '3,200+', label: 'Volunteers' },
  { value: '12 / 12', label: 'Wards covered' }
];

export default function Hero() {
  return (
    <section
      id='home'
      style={{
        background: C.green,
        padding: '5rem 1.5rem 5.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Grid texture */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <defs>
          <pattern
            id='grid'
            width='48'
            height='48'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M 48 0 L 0 0 0 48'
              fill='none'
              stroke='white'
              strokeWidth='0.7'
            />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)' />
      </svg>

      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          right: -80,
          top: -80,
          width: 380,
          height: 380,
          borderRadius: '50%',
          border: `1px solid ${C.gold}`,
          opacity: 0.15,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 40,
          top: 40,
          width: 190,
          height: 190,
          borderRadius: '50%',
          border: `1px solid ${C.gold}`,
          opacity: 0.12,
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          maxWidth: 1060,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Pill */}
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(200,169,81,.15)',
            border: '1px solid rgba(200,169,81,.45)',
            borderRadius: 100,
            padding: '4px 16px',
            marginBottom: '1.5rem'
          }}
        >
          <span
            style={{
              color: C.gold,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3
            }}
          >
            WESTLANDS CONSTITUENCY • AUGUST 2027
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: C.white,
            fontSize: 'clamp(2rem, 7vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '1.25rem',
            maxWidth: 640
          }}
        >
          A Westlands That
          <br />
          <span style={{ color: C.gold }}>Works For You.</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            color: 'rgba(255,255,255,.72)',
            fontSize: 'clamp(.95rem, 2.2vw, 1.15rem)',
            maxWidth: 480,
            lineHeight: 1.75,
            marginBottom: '2.5rem'
          }}
        >
          Real jobs. Clean estates. Safe streets. 10 years of grassroots service
          — now taking the fight to Parliament.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}
        >
          <a
            href='#volunteer'
            style={{
              background: C.gold,
              color: C.green,
              padding: '13px 30px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none'
            }}
          >
            Join Our Team →
          </a>
          <a
            href='#about'
            style={{
              border: '1.5px solid rgba(255,255,255,.35)',
              color: C.white,
              padding: '13px 30px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none'
            }}
          >
            Meet Jane
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  color: C.gold,
                  fontSize: '2rem',
                  fontWeight: 800,
                  lineHeight: 1
                }}
              >
                {value}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,.5)',
                  fontSize: 12,
                  marginTop: 4
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
