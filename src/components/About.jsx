import { C } from '../constants/theme';

const credentials = [
  'UoN Graduate & CPA',
  '10 yrs community service',
  'Youth centre founder',
  '500+ direct jobs created'
];

export default function About() {
  return (
    <section id='about' style={{ background: C.green, padding: '5rem 1.5rem' }}>
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
              JW
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
              10 yrs
            </div>
            <div style={{ color: C.green, fontSize: 10, fontWeight: 700 }}>
              COMMUNITY SERVICE
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div
            style={{
              color: C.gold,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3.5,
              marginBottom: 12
            }}
          >
            ABOUT THE CANDIDATE
          </div>
          <h2
            style={{
              color: C.white,
              fontSize: '1.9rem',
              fontWeight: 800,
              marginBottom: '1rem'
            }}
          >
            Hon. Jane Wanjiku
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,.65)',
              fontSize: 14,
              lineHeight: 1.75,
              marginBottom: '.85rem'
            }}
          >
            Born and raised in Kangemi, Jane Wanjiku has spent the last decade
            building small businesses, running a youth skills centre, and
            advocating for Westlands residents at the county level.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,.65)',
              fontSize: 14,
              lineHeight: 1.75,
              marginBottom: '2rem'
            }}
          >
            A University of Nairobi graduate and certified CPA, she brings
            financial discipline and deep community understanding to every
            policy she champions.
          </p>

          {/* Credentials */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '.75rem'
            }}
          >
            {credentials.map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: C.gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 10,
                    color: C.green,
                    fontWeight: 800
                  }}
                >
                  ✓
                </div>
                <span style={{ color: 'rgba(255,255,255,.7)', fontSize: 13 }}>
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
