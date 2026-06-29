import { useState, useEffect } from 'react';
import { C } from '../constants/theme';
import { CANDIDATE, PARTY } from '../constants/candidate';

function getDaysToElection() {
  const target = new Date(`${CANDIDATE.electionDate}T00:00:00+03:00`);
  const ms = target.getTime();
  if (Number.isNaN(ms)) return null;
  return Math.max(0, Math.ceil((ms - Date.now()) / 86400000));
}

export default function Hero() {
  const [days, setDays] = useState(getDaysToElection);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setDays(getDaysToElection()), 60000);
    return () => clearInterval(id);
  }, []);

  const btnHover = (key) => ({
    onMouseEnter: () => setHoveredBtn(key),
    onMouseLeave: () => setHoveredBtn(null)
  });

  const stats = [
    {
      value: days === null ? '—' : days.toLocaleString(),
      label: 'Days to election'
    },
    { value: CANDIDATE.volunteers, label: 'Volunteers' },
    { value: CANDIDATE.wardsCovered, label: 'Wards covered' }
  ];

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

      {/* Centered content */}
      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center'
        }}
      >
        {/* Combined pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            columnGap: 16,
            rowGap: 8,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: '2rem'
          }}
        >
          <span
            style={{
              color: C.gold,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2.5,
              whiteSpace: 'nowrap'
            }}
          >
            {CANDIDATE.constituency.toUpperCase()} • {CANDIDATE.year}
          </span>

          {/* Party badge — short name on top, full name beneath */}
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: PARTY.color,
                  flexShrink: 0
                }}
              />
              <span
                style={{
                  color: PARTY.color,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2
                }}
              >
                {PARTY.nameShort}
              </span>
            </span>
            <span
              style={{
                color: PARTY.color,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 1.5,
                opacity: 0.85,
                whiteSpace: 'nowrap'
              }}
            >
              {PARTY.name}
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: C.white,
            fontSize: 'clamp(1.5rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '0.5rem'
          }}
        >
          {CANDIDATE.sloganLine1}
          <br />
          <span style={{ color: C.gold }}>{CANDIDATE.sloganLine2}</span>
        </h1>

        {/* Swahili slogan */}
        <p
          style={{
            color: `${C.gold}80`,
            fontSize: 13,
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            letterSpacing: 0.5
          }}
        >
          "{CANDIDATE.sloganSw}"
        </p>

        {/* Subheading */}
        <p
          style={{
            color: 'rgba(255,255,255,.72)',
            fontSize: 'clamp(.95rem, 2.2vw, 1.15rem)',
            maxWidth: 520,
            lineHeight: 1.75,
            margin: '0 auto 2.5rem'
          }}
        >
          Real jobs. Clean estates. Safe streets. 10 years of grassroots service
          — now taking the fight to Parliament.
        </p>

        {/* CTAs — 2 equal on desktop, 3 full-width stacked on mobile */}
        <div
          className='flex flex-col md:flex-row md:justify-center'
          style={{
            columnGap: '1rem',
            rowGap: '0.75rem',
            marginBottom: '3.5rem'
          }}
        >
          <a
            href='#volunteer'
            className='w-full md:w-auto'
            {...btnHover('join')}
            style={{
              boxSizing: 'border-box',
              minWidth: 200,
              background: C.gold,
              color: C.green,
              border: '2px solid transparent',
              padding: '13px 30px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'filter .15s ease, transform .15s ease',
              filter: hoveredBtn === 'join' ? 'brightness(1.07)' : 'none',
              transform: hoveredBtn === 'join' ? 'translateY(-1px)' : 'none'
            }}
          >
            Join Our Team →
          </a>

          <a
            href='#about'
            className='w-full md:w-auto'
            {...btnHover('meet')}
            style={{
              boxSizing: 'border-box',
              minWidth: 200,
              background: hoveredBtn === 'meet' ? C.gold : 'transparent',
              border: `2px solid ${C.gold}`,
              color: hoveredBtn === 'meet' ? C.green : C.gold,
              padding: '13px 30px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'background .15s ease, color .15s ease'
            }}
          >
            Meet {CANDIDATE.nameShort.split(' ')[1]}
          </a>

          <a
            href={CANDIDATE.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full flex md:hidden items-center justify-center'
            {...btnHover('whatsapp')}
            style={{
              boxSizing: 'border-box',
              background: '#25D366',
              color: C.white,
              border: '2px solid transparent',
              padding: '13px 30px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              gap: 8,
              transition: 'filter .15s ease',
              filter: hoveredBtn === 'whatsapp' ? 'brightness(0.92)' : 'none'
            }}
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            justifyContent: 'center'
          }}
        >
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
