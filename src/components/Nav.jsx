import { useState, useEffect } from 'react';
import { C } from '../constants/theme';

const links = ['Issues', 'About', 'Events', 'Volunteer'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hover = (key) => ({
    onMouseEnter: () => setHoveredLink(key),
    onMouseLeave: () => setHoveredLink(null)
  });

  return (
    <nav
      style={{
        background: C.green,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(0,0,0,.35)'
      }}
    >
      <div
        style={{
          maxWidth: 1060,
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56
        }}
      >
        <a href='#home' style={{ textDecoration: 'none' }}>
          <div
            style={{
              color: C.white,
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: 1.5
            }}
          >
            HON. JANE WANJIKU
          </div>
          <div
            style={{
              color: C.gold,
              fontSize: 9,
              letterSpacing: 3,
              marginTop: -2
            }}
          >
            WESTLANDS MP • 2027
          </div>
        </a>

        <div
          className='hidden md:flex'
          style={{ alignItems: 'center', gap: '1.5rem' }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              {...hover(link)}
              style={{
                color: hoveredLink === link ? C.white : 'rgba(255,255,255,.75)',
                fontSize: 14,
                textDecoration: 'none',
                transition: 'color .15s'
              }}
            >
              {link}
            </a>
          ))}
          <a
            href='#donate'
            {...hover('donate')}
            style={{
              background: C.gold,
              color: C.green,
              padding: '7px 20px',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 13,
              textDecoration: 'none',
              opacity: hoveredLink === 'donate' ? 0.85 : 1,
              transition: 'opacity .15s'
            }}
          >
            Donate
          </a>
        </div>

        <button
          className='md:hidden'
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: C.white,
            fontSize: 22,
            lineHeight: 1
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.1)',
            padding: '.5rem 0 1rem'
          }}
        >
          {[...links, 'Donate'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                color: C.white,
                padding: '10px 1.5rem',
                fontSize: 15,
                textDecoration: 'none'
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
