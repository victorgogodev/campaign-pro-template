import { useState } from 'react';
import { C } from '../constants/theme';
import { CANDIDATE } from '../constants/candidate';

const navLinks = ['Home', 'Issues', 'About', 'Volunteer', 'Donate', 'Events'];

function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        color: hovered ? C.white : 'rgba(255,255,255,.55)',
        fontSize: 13,
        textDecoration: 'none',
        marginBottom: 8,
        transition: 'color .15s'
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: C.green, padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand → home */}
          <div>
            <a href='#home' style={{ textDecoration: 'none' }}>
              <div
                style={{
                  color: C.white,
                  fontWeight: 800,
                  fontSize: 17,
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
                  marginTop: 2,
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                {CANDIDATE.title} • {CANDIDATE.year}
              </div>
            </a>
            <p
              style={{
                color: 'rgba(255,255,255,.5)',
                fontSize: 13,
                lineHeight: 1.7
              }}
            >
              {CANDIDATE.footerTagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                color: C.gold,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 3.5,
                marginBottom: '1rem'
              }}
            >
              QUICK LINKS
            </div>
            {navLinks.map((link) => (
              <FooterLink key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </FooterLink>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                color: C.gold,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 3.5,
                marginBottom: '1rem'
              }}
            >
              CONTACT
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,.55)',
                fontSize: 13,
                lineHeight: 2
              }}
            >
              <div>{CANDIDATE.email}</div>
              <div>{CANDIDATE.phone}</div>
              <div>{CANDIDATE.poBox}</div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '.75rem'
          }}
        >
          <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 11 }}>
            © {CANDIDATE.year} {CANDIDATE.nameShort} Campaign. All rights
            reserved.
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap'
            }}
          >
            <a
              href='/privacy'
              style={{
                color: 'rgba(255,255,255,.45)',
                fontSize: 11,
                textDecoration: 'underline'
              }}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 11 }}>
              Authorised under the Political Parties Act, 2011
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
