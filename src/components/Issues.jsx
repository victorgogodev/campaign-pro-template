import { C } from '../constants/theme';
import { ISSUES } from '../constants/candidate';

export default function Issues() {
  return (
    <section id='issues' style={{ background: C.bg, padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Eyebrow + heading — centered */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span
            style={{
              display: 'inline-block',
              background: C.greenLight,
              color: C.green,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 16px',
              borderRadius: 999,
              marginBottom: 16
            }}
          >
            The Platform
          </span>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: C.text,
              margin: '0 0 12px'
            }}
          >
            What We Stand For
          </h2>
          <p
            style={{
              color: C.muted,
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Four priorities. Real commitments. Measurable outcomes for
            Westlands.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24
          }}
        >
          {ISSUES.map((issue, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                borderRadius: 12,
                padding: '32px 24px',
                boxShadow: `inset 0 4px 0 ${C.gold}, 0 2px 12px rgba(0,0,0,0.06)`
              }}
            >
              {/* Icon — centered */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: C.goldLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  margin: '0 auto 18px'
                }}
              >
                {issue.icon}
              </div>
              {/* Title — centered */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.text,
                  margin: '0 0 10px',
                  textAlign: 'center'
                }}
              >
                {issue.title}
              </h3>
              {/* Description — left-aligned */}
              <p
                style={{
                  color: C.muted,
                  lineHeight: 1.65,
                  margin: 0,
                  fontSize: 14
                }}
              >
                {issue.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
