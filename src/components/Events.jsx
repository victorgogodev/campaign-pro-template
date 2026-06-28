import { C } from '../constants/theme';

const events = [
  {
    month: 'AUG',
    day: '3',
    title: 'Kangemi Community Meeting',
    location: 'Kangemi Social Hall',
    time: '2:00 PM'
  },
  {
    month: 'AUG',
    day: '10',
    title: 'Youth Town Hall — Digital Economy',
    location: 'Westgate Mall Grounds',
    time: '10:00 AM'
  },
  {
    month: 'AUG',
    day: '17',
    title: "Women's Forum — Healthcare & Safety",
    location: 'Mountain View Primary',
    time: '11:00 AM'
  }
];

export default function Events() {
  return (
    <section id='events' style={{ padding: '5rem 1.5rem', background: C.bg }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div
          style={{
            color: C.gold,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3.5,
            marginBottom: 8
          }}
        >
          ON THE GROUND
        </div>
        <h2
          style={{
            color: C.green,
            fontSize: '1.9rem',
            fontWeight: 800,
            marginBottom: '2.5rem'
          }}
        >
          Upcoming Events
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {events.map(({ month, day, title, location, time }) => (
            <div
              key={title}
              style={{
                background: C.white,
                borderRadius: 12,
                padding: '1.25rem 1.5rem',
                border: `1px solid ${C.border}`,
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                cursor: 'pointer'
              }}
            >
              {/* Date block */}
              <div
                style={{
                  background: C.green,
                  borderRadius: 8,
                  padding: '8px 12px',
                  textAlign: 'center',
                  minWidth: 50,
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    color: C.gold,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 1.5
                  }}
                >
                  {month}
                </div>
                <div
                  style={{
                    color: C.white,
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1
                  }}
                >
                  {day}
                </div>
              </div>

              {/* Details */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: C.green, fontSize: 15 }}>
                  {title}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginTop: 4
                  }}
                >
                  <span style={{ color: C.muted, fontSize: 12 }}>
                    📍 {location}
                  </span>
                  <span style={{ color: C.muted, fontSize: 12 }}>
                    🕐 {time}
                  </span>
                </div>
              </div>

              {/* Chevron */}
              <div style={{ color: C.border, fontSize: 18, flexShrink: 0 }}>
                ›
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
