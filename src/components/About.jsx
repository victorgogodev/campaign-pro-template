import { C } from '../constants/theme';
import { CANDIDATE, CREDENTIALS } from '../constants/candidate';

export default function About() {
  return (
    <section id='about' style={{ background: C.green, padding: '5rem 1.5rem' }}>
      {/* Section header — centered, consistent with other sections */}
      <div
        style={{ maxWidth: 1060, margin: '0 auto 3rem', textAlign: 'center' }}
      >
        <div
          style={{
            color: C.gold,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3.5,
            textTransform: 'uppercase',
            marginBottom: 12
          }}
        >
          About the Candidate
        </div>
        <h2
          style={{
            color: C.white,
            fontSize: 'clamp(1.6rem, 5vw, 2.25rem)',
            fontWeight: 800,
            margin: '0 0 10px'
          }}
        >
          {CANDIDATE.name}
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,.6)',
            fontSize: 14,
            maxWidth: 460,
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          The person behind the platform.
        </p>
      </div>

      {/* Photo + narrative */}
      <div
        style={{
          maxWidth: 1060,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}
      >
        {/* Photo placeholder */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              background: `${C.gold}20`,
              border: `2px solid ${C.gold}50`,
              borderRadius: 16,
              aspectRatio: '3/4',
              maxWidth: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 10
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: C.gold,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 24,
                color: C.green
              }}
            >
              {CANDIDATE.initials}
            </div>
            <span style={{ color: `${C.gold}80`, fontSize: 12 }}>
              Candidate Photo
            </span>
          </div>

          {/* Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              right: -16,
              background: C.gold,
              borderRadius: 8,
              padding: '10px 14px',
              boxShadow: '0 4px 16px rgba(0,0,0,.2)'
            }}
          >
            <div style={{ color: C.green, fontWeight: 800, fontSize: 18 }}>
              {CANDIDATE.yearsOfService} yrs
            </div>
            <div style={{ color: C.green, fontSize: 10, fontWeight: 700 }}>
              COMMUNITY SERVICE
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div>
          <p
            style={{
              color: 'rgba(255,255,255,.65)',
              fontSize: 14,
              lineHeight: 1.75,
              marginTop: 0,
              marginBottom: '.85rem'
            }}
          >
            {CANDIDATE.bio1}
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,.65)',
              fontSize: 14,
              lineHeight: 1.75,
              marginBottom: '2rem'
            }}
          >
            {CANDIDATE.bio2}
          </p>

          {/* Track record — label centered, items left-aligned.
              Column count lives in Tailwind classes (NOT inline style),
              otherwise an inline grid-template-columns would override the
              responsive breakpoint. */}
          <div
            style={{
              color: C.gold,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 14,
              textAlign: 'center'
            }}
          >
            Track Record
          </div>
          <div
            className='grid grid-cols-1 sm:grid-cols-2'
            style={{ gap: '1rem' }}
          >
            {CREDENTIALS.map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: C.gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 12,
                    color: C.green,
                    fontWeight: 800
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    color: 'rgba(255,255,255,.9)',
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.4
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
