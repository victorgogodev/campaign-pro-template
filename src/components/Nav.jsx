import { useState, useEffect } from 'react';
import { C } from '../constants/theme';
import { CANDIDATE } from '../constants/candidate';

const links = ['Home', 'Issues', 'About', 'Volunteer', 'Events'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Close menu when crossing into desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const hover = (key) => ({
    onMouseEnter: () => setHoveredLink(key),
    onMouseLeave: () => setHoveredLink(null)
  });

  const barBase = {
    position: 'absolute',
    left: 0,
    width: 24,
    height: 2,
    background: C.white,
    borderRadius: 2,
    transition: 'top .25s ease, transform .25s ease, opacity .2s ease'
  };

  const whatsAppPath =
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

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
          height: 56,
          position: 'relative',
          zIndex: 60
        }}
      >
        {/* Left — brand */}
        <div
          className='flex-1'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <a href='#home' style={{ textDecoration: 'none' }}>
            <div
              style={{
                color: C.white,
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: 1.5,
                textTransform: 'uppercase'
              }}
            >
              {CANDIDATE.name}
            </div>
            <div
              style={{
                color: C.gold,
                fontSize: 9,
                letterSpacing: 3,
                marginTop: -2,
                textTransform: 'uppercase'
              }}
            >
              {CANDIDATE.title} • {CANDIDATE.year}
            </div>
          </a>
        </div>

        {/* Center — links (desktop) */}
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
        </div>

        {/* Right — actions (desktop) */}
        <div
          className='hidden md:flex flex-1'
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem'
          }}
        >
          <a
            href={CANDIDATE.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            title='Chat on WhatsApp'
            {...hover('whatsapp')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: 8,
              background: '#25D366',
              color: C.white,
              textDecoration: 'none',
              opacity: hoveredLink === 'whatsapp' ? 0.85 : 1,
              transition: 'opacity .15s',
              flexShrink: 0
            }}
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
              <path d={whatsAppPath} />
            </svg>
          </a>

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

        {/* Hamburger — mobile only (animated morph to ✕) */}
        <button
          className='flex items-center justify-center md:hidden'
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            width: 40,
            height: 40,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <span
            style={{
              position: 'relative',
              width: 24,
              height: 18,
              display: 'block'
            }}
          >
            <span
              style={{
                ...barBase,
                top: open ? 8 : 0,
                transform: open ? 'rotate(45deg)' : 'none'
              }}
            />
            <span style={{ ...barBase, top: 8, opacity: open ? 0 : 1 }} />
            <span
              style={{
                ...barBase,
                top: open ? 8 : 16,
                transform: open ? 'rotate(-45deg)' : 'none'
              }}
            />
          </span>
        </button>
      </div>

      {/* Dim + blur page overlay — mobile */}
      <div
        className='md:hidden'
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,.5)',
          backdropFilter: open ? 'blur(8px)' : 'blur(0px)',
          WebkitBackdropFilter: open ? 'blur(8px)' : 'blur(0px)',
          zIndex: 40,
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          transition:
            'opacity .25s ease, visibility .25s ease, backdrop-filter .25s ease, -webkit-backdrop-filter .25s ease'
        }}
      />

      {/* Dropdown panel — mobile (overlays hero, sizes to content) */}
      <div
        className='flex flex-col md:hidden'
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: C.green,
          borderTop: '1px solid rgba(255,255,255,.1)',
          boxShadow: '0 12px 24px rgba(0,0,0,.35)',
          maxHeight: 'calc(100dvh - 56px)',
          overflowY: 'auto',
          padding: '0.75rem 0 1.5rem',
          zIndex: 50,
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          transition:
            'opacity .25s ease, transform .25s ease, visibility .25s ease'
        }}
      >
        {/* Primary nav links */}
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              color: C.white,
              padding: '14px 1.5rem',
              fontSize: 16,
              textDecoration: 'none'
            }}
          >
            {link}
          </a>
        ))}

        {/* Divider + actions */}
        <div style={{ paddingTop: '0.75rem' }}>
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,.12)',
              margin: '0 1.5rem 1rem'
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              padding: '0 1.5rem'
            }}
          >
            <a
              href={CANDIDATE.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: '#25D366',
                color: C.white,
                padding: '13px 20px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none'
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d={whatsAppPath} />
              </svg>
              WhatsApp
            </a>

            <a
              href='#donate'
              onClick={() => setOpen(false)}
              style={{
                background: C.gold,
                color: C.green,
                padding: '13px 20px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
