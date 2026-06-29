import { C } from '../constants/theme';
import { CANDIDATE } from '../constants/candidate';

export default function PrivacyPolicy() {
  const campaign = `${CANDIDATE.nameShort} ${CANDIDATE.year} Campaign`;

  const h2Style = {
    color: C.green,
    fontSize: 20,
    fontWeight: 700,
    margin: '2rem 0 0.5rem'
  };
  const pStyle = {
    color: C.text,
    fontSize: 15,
    lineHeight: 1.7,
    margin: '0 0 0.75rem'
  };
  const liStyle = {
    color: C.text,
    fontSize: 15,
    lineHeight: 1.7,
    margin: '0 0 0.4rem'
  };
  const linkStyle = { color: C.green, textDecoration: 'underline' };

  return (
    <div style={{ background: C.bg, minHeight: '100vh' }}>
      {/* Top bar */}
      <header
        style={{
          background: C.green,
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap'
        }}
      >
        <a
          href='/'
          style={{
            color: C.white,
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: 0.5
          }}
        >
          {CANDIDATE.name}
        </a>
        <a
          href='/'
          style={{
            color: C.gold,
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 600
          }}
        >
          ← Back to site
        </a>
      </header>

      {/* Body */}
      <main
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '2.5rem 1.5rem 4rem'
        }}
      >
        <h1
          style={{
            color: C.green,
            fontSize: 32,
            fontWeight: 800,
            margin: '0 0 0.5rem'
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: C.muted, fontSize: 13, margin: '0 0 2rem' }}>
          Last updated: June 2026
        </p>

        <p style={pStyle}>
          This Privacy Policy explains how the {campaign} ("we", "us", "the
          campaign") collects, uses, and protects your personal data when you
          volunteer, apply as a polling agent, or donate through this website.
          We are committed to handling your information in line with the Kenya
          Data Protection Act, 2019.
        </p>

        <h2 style={h2Style}>1. Who we are</h2>
        <p style={pStyle}>
          The data controller is the {campaign}. If you have any questions about
          this policy or the personal data we hold about you, contact us at{' '}
          <a href={`mailto:${CANDIDATE.email}`} style={linkStyle}>
            {CANDIDATE.email}
          </a>
          {CANDIDATE.phone ? ` or ${CANDIDATE.phone}` : ''}.
        </p>

        <h2 style={h2Style}>2. Information we collect</h2>
        <p style={pStyle}>We only collect information you choose to give us:</p>
        <ul style={{ paddingLeft: 20, margin: '0 0 0.75rem' }}>
          <li style={liStyle}>
            <strong>Volunteers:</strong> your full name, phone number, and ward.
          </li>
          <li style={liStyle}>
            <strong>Polling agents:</strong> the above, plus your National ID
            number and preferred polling station, which are required for
            official IEBC gazettement.
          </li>
          <li style={liStyle}>
            <strong>Donors:</strong> your phone number and the donation amount,
            processed through Safaricom M-Pesa.
          </li>
        </ul>

        <h2 style={h2Style}>3. How we use your information</h2>
        <p style={pStyle}>We use your information only to:</p>
        <ul style={{ paddingLeft: 20, margin: '0 0 0.75rem' }}>
          <li style={liStyle}>
            Coordinate volunteer and polling-agent activities.
          </li>
          <li style={liStyle}>
            Send you campaign updates by SMS and WhatsApp, where you have
            consented.
          </li>
          <li style={liStyle}>Process and acknowledge donations.</li>
          <li style={liStyle}>
            Submit polling-agent details to the IEBC for official appointment.
          </li>
        </ul>

        <h2 style={h2Style}>4. Legal basis</h2>
        <p style={pStyle}>
          We process your personal data on the basis of your consent, which you
          give by ticking the consent box on our forms. You may withdraw your
          consent at any time (see section 7).
        </p>

        <h2 style={h2Style}>5. Who we share it with</h2>
        <p style={pStyle}>
          We do not sell your personal data, and we do not share it with any
          foreign government or third-party advertiser. We share data only where
          necessary to operate the campaign: with Safaricom to process M-Pesa
          donations, with our SMS and WhatsApp messaging providers to send
          updates you have consented to, and with the IEBC for polling-agent
          gazettement.
        </p>

        <h2 style={h2Style}>6. How long we keep it</h2>
        <p style={pStyle}>
          We retain your personal data only for as long as needed for the
          purposes above, and no longer than the conclusion of the 2027 election
          cycle, after which it is securely deleted. You may request earlier
          deletion at any time.
        </p>

        <h2 style={h2Style}>7. Your rights</h2>
        <p style={pStyle}>
          Under the Data Protection Act, 2019, you have the right to access the
          personal data we hold about you, to ask us to correct it if it is
          inaccurate, to request its deletion, and to withdraw your consent to
          being contacted. To exercise any of these rights, email us at{' '}
          <a href={`mailto:${CANDIDATE.email}`} style={linkStyle}>
            {CANDIDATE.email}
          </a>
          .
        </p>

        <h2 style={h2Style}>8. Opting out of messages</h2>
        <p style={pStyle}>
          You can stop receiving campaign SMS at any time by replying STOP to
          any message. To stop WhatsApp messages, block the campaign number or
          email us to be removed from our lists.
        </p>

        <h2 style={h2Style}>9. Cookies and analytics</h2>
        <p style={pStyle}>
          This website does not use advertising or tracking cookies. If
          analytics are introduced in future, we will display a cookie notice
          and ask for your consent before any tracking begins.
        </p>

        <h2 style={h2Style}>10. Changes to this policy</h2>
        <p style={pStyle}>
          We may update this policy from time to time. Any changes will be
          posted on this page with a revised "last updated" date.
        </p>

        <h2 style={h2Style}>11. Complaints</h2>
        <p style={pStyle}>
          If you believe we have mishandled your personal data, you have the
          right to lodge a complaint with the Office of the Data Protection
          Commissioner (ODPC) of Kenya at{' '}
          <a
            href='https://www.odpc.go.ke'
            target='_blank'
            rel='noopener noreferrer'
            style={linkStyle}
          >
            odpc.go.ke
          </a>
          .
        </p>
      </main>
    </div>
  );
}
