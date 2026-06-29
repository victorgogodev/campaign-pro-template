import { C } from '../constants/theme';
import { EVENTS } from '../constants/candidate';

export default function Events() {
  return (
    <section id='events' style={{ background: C.white, padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Eyebrow + heading — centered */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
            On the Ground
          </span>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: C.text,
              margin: '0 0 12px'
            }}
          >
            Upcoming Events
          </h2>
          <p style={{ color: C.muted, margin: 0 }}>
            Come meet the team. Bring a neighbour.
          </p>
        </div>

        {/* Event list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                borderRadius: 12,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 24,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              {/* Date block */}
              <div
                style={{
                  background: C.green,
                  color: C.white,
                  borderRadius: 8,
                  padding: '12px 16px',
                  textAlign: 'center',
                  minWidth: 56,
                  flexShrink: 0
                }}
              >
                <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>
                  {ev.day}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: 4
                  }}
                >
                  {ev.month}
                </div>
              </div>

              {/* Details */}
              <div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: C.text,
                    margin: '0 0 6px'
                  }}
                >
                  {ev.title}
                </h3>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, color: C.muted }}>
                    🕐 {ev.time}
                  </span>
                  <span style={{ fontSize: 13, color: C.muted }}>
                    📍 {ev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
