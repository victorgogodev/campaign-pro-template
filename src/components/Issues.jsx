import { C } from '../constants/theme';

const issues = [
  {
    title: 'Youth Employment',
    desc: '10,000 skilled jobs for Westlands youth through our Skills-to-Work fund by 2026.',
    icon: '🎓'
  },
  {
    title: 'Clean Estates',
    desc: 'Modern waste management and green corridors in every ward — starting with Kangemi and Highridge.',
    icon: '🌿'
  },
  {
    title: 'Public Safety',
    desc: 'Community policing partnerships and LED street lighting across all 12 wards.',
    icon: '🛡️'
  },
  {
    title: 'Local Business',
    desc: 'Westlands traders prioritised in county tenders and given access to digital market platforms.',
    icon: '💼'
  }
];

export default function Issues() {
  return (
    <section id='issues' style={{ padding: '5rem 1.5rem', background: C.bg }}>
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
          OUR AGENDA
        </div>
        <h2
          style={{
            color: C.green,
            fontSize: '1.9rem',
            fontWeight: 800,
            marginBottom: '2.5rem'
          }}
        >
          Four Promises to Westlands
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {issues.map(({ title, desc, icon }) => (
            <div
              key={title}
              style={{
                background: C.white,
                borderRadius: 12,
                padding: '1.5rem',
                border: `1px solid ${C.border}`,
                boxShadow: `inset 4px 0 0 ${C.gold}`
              }}
            >
              <div
                style={{
                  background: C.greenLight,
                  borderRadius: 8,
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  marginBottom: '1rem'
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  color: C.green,
                  fontSize: 16,
                  marginBottom: 6
                }}
              >
                {title}
              </div>
              <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.6 }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
