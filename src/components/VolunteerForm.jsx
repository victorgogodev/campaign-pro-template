import { useState } from 'react';
import { C } from '../constants/theme';
import { CANDIDATE, WARDS } from '../constants/candidate';

function validatePhone(phone) {
  const cleaned = phone.replace(/\s/g, '');
  return (
    /^(07|01)\d{8}$/.test(cleaned) ||
    /^\+254\d{9}$/.test(cleaned) ||
    /^254\d{9}$/.test(cleaned)
  );
}

const empty = {
  fullName: '',
  phone: '',
  ward: '',
  nationalId: '',
  pollingStation: '',
  consent: false
};

export default function VolunteerForm() {
  const [tab, setTab] = useState('volunteer'); // 'volunteer' | 'agent'
  const [form, setForm] = useState({ ...empty });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function setField(key, val) {
    setForm((prev) => ({ ...prev, [key]: val }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  }

  function switchTab(next) {
    setTab(next);
    setErrors({});
  }

  function validate() {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Required';
    if (!validatePhone(form.phone))
      errs.phone = 'Enter a valid Kenyan mobile number (07XX or 01XX)';
    if (!form.ward) errs.ward = 'Please select your ward';

    if (tab === 'agent') {
      if (!/^\d{7,8}$/.test(form.nationalId.trim()))
        errs.nationalId = 'Enter a valid 7–8 digit National ID number';
      if (!form.pollingStation.trim()) errs.pollingStation = 'Required';
    }

    if (!form.consent)
      errs.consent = 'Please consent to be contacted to continue.';

    return errs;
  }

  function handleSubmit() {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // TODO (backend phase): POST form data to /api/volunteer or /api/agent
    setSubmitted(true);
  }

  const tabBtn = (active) => ({
    flex: 1,
    padding: '12px 0',
    fontWeight: 600,
    fontSize: 14,
    border: 'none',
    cursor: 'pointer',
    borderRadius: 8,
    background: active ? C.green : 'transparent',
    color: active ? C.white : C.muted,
    transition: 'all 0.2s',
    fontFamily: 'inherit'
  });

  const inputBase = (hasError) => ({
    width: '100%',
    padding: '12px 14px',
    borderRadius: 8,
    border: `2px solid ${hasError ? '#ef4444' : C.border}`,
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
    color: C.text,
    background: C.white,
    fontFamily: 'inherit'
  });

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: C.text,
    marginBottom: 6
  };

  const errorMsg = (key) =>
    errors[key] ? (
      <span
        style={{
          color: '#ef4444',
          fontSize: 12,
          marginTop: 4,
          display: 'block'
        }}
      >
        {errors[key]}
      </span>
    ) : null;

  const hint = (text) => (
    <span
      style={{ color: C.muted, fontSize: 11, marginTop: 4, display: 'block' }}
    >
      {text}
    </span>
  );

  // ── Success state ──
  if (submitted) {
    return (
      <section id='volunteer' style={{ background: C.bg, padding: '80px 0' }}>
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: 56, marginBottom: 16 }}>🙌</div>
          <h2 style={{ color: C.green, fontSize: 32, margin: '0 0 12px' }}>
            {tab === 'agent' ? 'Application Received!' : "You're In!"}
          </h2>
          <p
            style={{
              color: C.muted,
              maxWidth: 400,
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            {tab === 'agent'
              ? 'Thank you for applying as a Polling Agent. Our legal team will contact you with your official assignment and briefing details before Election Day.'
              : `Thank you for joining the ${CANDIDATE.nameShort} campaign. Our team will be in touch shortly with next steps.`}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id='volunteer' style={{ background: C.bg, padding: '80px 0' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
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
            Get Involved
          </span>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: C.text,
              margin: '0 0 8px'
            }}
          >
            Join the Campaign
          </h2>
          <p style={{ color: C.muted, margin: 0 }}>
            Whether you volunteer or serve as a polling agent — your role
            matters.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: C.white,
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
          }}
        >
          {/* Tab switcher */}
          <div
            style={{
              display: 'flex',
              background: C.greenLight,
              borderRadius: 10,
              padding: 4,
              marginBottom: 28,
              gap: 4
            }}
          >
            <button
              style={tabBtn(tab === 'volunteer')}
              onClick={() => switchTab('volunteer')}
            >
              Volunteer
            </button>
            <button
              style={tabBtn(tab === 'agent')}
              onClick={() => switchTab('agent')}
            >
              Polling Agent
            </button>
          </div>

          {/* Polling agent explainer — only show on agent tab */}
          {tab === 'agent' && (
            <div
              style={{
                background: C.goldLight,
                borderLeft: `3px solid ${C.gold}`,
                borderRadius: 8,
                padding: '12px 16px',
                marginBottom: 24
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: C.text,
                  lineHeight: 1.6
                }}
              >
                <strong>Polling Agents</strong> are legally appointed campaign
                representatives who observe voting and tallying at their
                assigned polling station on Election Day. You will be officially
                gazetted and receive a campaign legal briefing before August 10,
                2027.
              </p>
            </div>
          )}

          {/* Full Names */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Full Names</label>
            <input
              style={inputBase(!!errors.fullName)}
              value={form.fullName}
              onChange={(e) => setField('fullName', e.target.value)}
              placeholder='e.g. Mary Achieng Otieno'
            />
            {errorMsg('fullName')}
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Phone Number</label>
            <input
              type='tel'
              style={inputBase(!!errors.phone)}
              value={form.phone}
              onChange={(e) => setField('phone', e.target.value)}
              placeholder='07XX XXX XXX'
            />
            {errorMsg('phone')}
            {!errors.phone &&
              hint(
                'Safaricom or Airtel. Used for campaign WhatsApp and SMS updates.'
              )}
          </div>

          {/* Ward */}
          <div style={{ marginBottom: tab === 'agent' ? 16 : 24 }}>
            <label style={labelStyle}>Ward</label>
            <select
              style={{ ...inputBase(!!errors.ward), cursor: 'pointer' }}
              value={form.ward}
              onChange={(e) => setField('ward', e.target.value)}
            >
              <option value=''>Select your ward</option>
              {WARDS.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
            {errorMsg('ward')}
          </div>

          {/* Polling agent extra fields */}
          {tab === 'agent' && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>National ID Number</label>
                <input
                  type='text'
                  inputMode='numeric'
                  style={inputBase(!!errors.nationalId)}
                  value={form.nationalId}
                  onChange={(e) =>
                    setField('nationalId', e.target.value.replace(/\D/g, ''))
                  }
                  placeholder='12345678'
                  maxLength={8}
                />
                {errorMsg('nationalId')}
                {!errors.nationalId &&
                  hint(
                    'Required for official IEBC gazettement as a polling agent.'
                  )}
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Preferred Polling Station</label>
                <input
                  type='text'
                  style={inputBase(!!errors.pollingStation)}
                  value={form.pollingStation}
                  onChange={(e) => setField('pollingStation', e.target.value)}
                  placeholder='e.g. Kangemi Primary School'
                />
                {errorMsg('pollingStation')}
                {!errors.pollingStation &&
                  hint(
                    'Enter the polling station closest to you. Final assignment confirmed by the campaign team.'
                  )}
              </div>
            </>
          )}

          {/* DPA 2019 consent — required, unchecked by default */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                cursor: 'pointer'
              }}
            >
              <input
                type='checkbox'
                checked={form.consent}
                onChange={(e) => setField('consent', e.target.checked)}
                style={{
                  marginTop: 3,
                  width: 18,
                  height: 18,
                  accentColor: C.green,
                  flexShrink: 0,
                  cursor: 'pointer'
                }}
              />
              <span style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>
                I consent to the {CANDIDATE.nameShort} {CANDIDATE.year} campaign
                contacting me by SMS and WhatsApp.
              </span>
            </label>
            {errorMsg('consent')}
            <span
              style={{
                color: C.muted,
                fontSize: 11,
                marginTop: 6,
                display: 'block',
                paddingLeft: 28
              }}
            >
              You can opt out anytime — reply STOP to any SMS to unsubscribe.
              See our{' '}
              <a
                href='/privacy'
                style={{ color: C.green, textDecoration: 'underline' }}
              >
                Privacy Policy
              </a>
              .
            </span>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: 8,
              border: 'none',
              background: C.green,
              color: C.white,
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            {tab === 'agent'
              ? 'Submit Polling Agent Application'
              : 'Join the Campaign'}
          </button>
        </div>
      </div>
    </section>
  );
}
