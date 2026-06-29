import { useState, useEffect } from 'react';
import { C } from '../constants/theme';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync initial state (e.g. reloaded mid-page)
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label='Scroll to top'
      style={{
        position: 'fixed',
        bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
        right: 24,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: C.gold,
        color: C.green,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,.25)',
        // Below the mobile-menu backdrop (z40) so it hides when the menu is open
        zIndex: 30,
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible
          ? `translateY(0) scale(${hovered ? 1.08 : 1})`
          : 'translateY(12px)',
        transition:
          'opacity .25s ease, transform .25s ease, visibility .25s ease'
      }}
    >
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M18 15l-6-6-6 6' />
      </svg>
    </button>
  );
}
