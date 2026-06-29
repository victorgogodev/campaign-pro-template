import { useState } from 'react';
import { C } from '../constants/theme';
import { CANDIDATE, QUICK_AMOUNTS } from '../constants/candidate';

function validatePhone(phone) {
  const cleaned = phone.replace(/\s/g, '');
  return (
    /^(07|01)\d{8}$/.test(cleaned) ||
    /^\+254\d{9}$/.test(cleaned) ||
    /^254\d{9}$/.test(cleaned)
  );
}

export default function Donate() {
  const [tab, setTab] = useState('stk');

  // STK state
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [stkStep, setStkStep] = useState(1); // 1: pick amount  2: enter phone  3: waiting  4: success
  const [error, setError] = useState('');

  const selectedAmount =
    amount || (customAmount ? parseInt(customAmount, 10) : null);

  function handleStkSubmit() {
    if (!selectedAmount || selectedAmount < 10) {
      setError('Please enter a valid amount (min KSh 10)');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Please enter a valid Safaricom or Airtel number');
      return;
    }
    if (!consent) {
      setError('Please consent to continue.');
      return;
    }
    setError('');
    setStkStep(3);
    // Simulated STK push — replaced with real Daraja call in feature/mpesa-integration
    setTimeout(() => setStkStep(4), 3000);
  }

  function resetStk() {
    setAmount(null);
    setCustomAmount('');
    setPhone('');
    setConsent(false);
    setStkStep(1);
    setError('');
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
    transition: 'all 0.2s'
  });

  const inputBase = (hasError) => ({
    width: '100%',
    padding: '13px 14px',
    borderRadius: 8,
    border: `2px solid ${hasError ? '#ef4444' : C.border}`,
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
    color: C.text,
    background: C.white,
    fontFamily: 'inherit'
  });

  return (
    <section
      id='donate'
      style={{ background: C.greenLight, padding: '80px 0' }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span
            style={{
              display: 'inline-block',
              background: C.goldLight,
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
            Support the Campaign
          </span>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: C.text,
              margin: '0 0 8px'
            }}
          >
            Donate via M-Pesa
          </h2>
          <p style={{ color: C.muted, margin: 0 }}>
            Every contribution powers the movement.
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
              style={tabBtn(tab === 'stk')}
              onClick={() => {
                setTab('stk');
                resetStk();
              }}
            >
              STK Push
            </button>
            <button
              style={tabBtn(tab === 'paybill')}
              onClick={() => setTab('paybill')}
            >
              Paybill
            </button>
          </div>

          {/* ── STK PUSH TAB ── */}
          {tab === 'stk' && (
            <>
              {stkStep === 1 && (
                <div>
                  <p style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>
                    Choose an amount — we'll send a prompt directly to your
                    phone.
                  </p>
                  <div
                    className='grid grid-cols-2 md:grid-cols-3'
                    style={{
                      gap: 10,
                      marginBottom: 16
                    }}
                  >
                    {QUICK_AMOUNTS.map((a) => (
                      <button
                        key={a}
                        onClick={() => {
                          setAmount(a);
                          setCustomAmount('');
                        }}
                        style={{
                          padding: '12px 8px',
                          borderRadius: 8,
                          border: `2px solid ${amount === a ? C.green : C.border}`,
                          background: amount === a ? C.greenLight : C.white,
                          color: amount === a ? C.green : C.text,
                          fontWeight: 600,
                          fontSize: 14,
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        KSh {a.toLocaleString()}
                      </button>
                    ))}
                    <input
                      type='number'
                      placeholder='Other'
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount(null);
                      }}
                      style={{
                        ...inputBase(false),
                        border: `2px solid ${customAmount ? C.green : C.border}`,
                        padding: '12px 8px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                  <button
                    onClick={() => selectedAmount && setStkStep(2)}
                    disabled={!selectedAmount}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: 8,
                      border: 'none',
                      background: selectedAmount ? C.green : C.border,
                      color: C.white,
                      fontWeight: 700,
                      fontSize: 15,
                      cursor: selectedAmount ? 'pointer' : 'not-allowed',
                      fontFamily: 'inherit'
                    }}
                  >
                    Continue{' '}
                    {selectedAmount
                      ? `— KSh ${selectedAmount.toLocaleString()}`
                      : ''}
                  </button>
                </div>
              )}

              {stkStep === 2 && (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 20
                    }}
                  >
                    <button
                      onClick={() => setStkStep(1)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: C.muted,
                        fontSize: 22,
                        lineHeight: 1,
                        padding: 0
                      }}
                    >
                      ←
                    </button>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, color: C.text }}>
                        KSh {selectedAmount?.toLocaleString()}
                      </p>
                      <p style={{ margin: 0, fontSize: 12, color: C.muted }}>
                        Enter your Safaricom number
                      </p>
                    </div>
                  </div>
                  <input
                    type='tel'
                    placeholder='07XX XXX XXX'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setError('');
                    }}
                    style={{ ...inputBase(!!error), marginBottom: 16 }}
                  />

                  {/* DPA 2019 consent — required, unchecked by default */}
                  <label
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                      cursor: 'pointer',
                      marginBottom: 12
                    }}
                  >
                    <input
                      type='checkbox'
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        setError('');
                      }}
                      style={{
                        marginTop: 3,
                        width: 18,
                        height: 18,
                        accentColor: C.green,
                        flexShrink: 0,
                        cursor: 'pointer'
                      }}
                    />
                    <span
                      style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}
                    >
                      I consent to the {CANDIDATE.nameShort} {CANDIDATE.year}{' '}
                      campaign storing my contact details. See our{' '}
                      <a
                        href='/privacy'
                        style={{ color: C.green, textDecoration: 'underline' }}
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {error && (
                    <p
                      style={{
                        color: '#ef4444',
                        fontSize: 13,
                        margin: '0 0 12px'
                      }}
                    >
                      {error}
                    </p>
                  )}
                  <button
                    onClick={handleStkSubmit}
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
                    Send M-Pesa Prompt
                  </button>
                </div>
              )}

              {stkStep === 3 && (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>📱</div>
                  <h3 style={{ color: C.text, margin: '0 0 8px' }}>
                    Check your phone
                  </h3>
                  <p style={{ color: C.muted, margin: 0 }}>
                    An M-Pesa prompt has been sent to <strong>{phone}</strong>.
                    <br />
                    Enter your PIN to complete the payment.
                  </p>
                </div>
              )}

              {stkStep === 4 && (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: C.green, margin: '0 0 8px' }}>
                    Asante sana!
                  </h3>
                  <p style={{ color: C.muted, margin: '0 0 24px' }}>
                    Your donation of{' '}
                    <strong>KSh {selectedAmount?.toLocaleString()}</strong> has
                    been received. Thank you for supporting the campaign.
                  </p>
                  <button
                    onClick={resetStk}
                    style={{
                      padding: '10px 24px',
                      borderRadius: 8,
                      border: `2px solid ${C.green}`,
                      background: 'transparent',
                      color: C.green,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    Donate Again
                  </button>
                </div>
              )}
            </>
          )}

          {/* ── PAYBILL TAB ── */}
          {tab === 'paybill' && (
            <div>
              <p style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>
                Send any amount directly from your M-Pesa menu — no prompt
                required, available 24/7.
              </p>

              {/* Paybill details card */}
              <div
                style={{
                  background: C.greenLight,
                  borderRadius: 12,
                  padding: 24,
                  marginBottom: 24
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: C.muted,
                      margin: '0 0 4px'
                    }}
                  >
                    Paybill Number
                  </p>
                  <p
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: C.green,
                      margin: 0,
                      letterSpacing: '0.06em'
                    }}
                  >
                    {CANDIDATE.paybill}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: C.muted,
                      margin: '0 0 4px'
                    }}
                  >
                    Account Number
                  </p>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: C.text,
                      margin: 0
                    }}
                  >
                    {CANDIDATE.accountNo}
                  </p>
                </div>
              </div>

              {/* Step-by-step */}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.text,
                  margin: '0 0 12px'
                }}
              >
                How to pay:
              </p>
              {[
                'Go to M-Pesa on your phone',
                'Select Lipa na M-Pesa → Pay Bill',
                `Enter Business No: ${CANDIDATE.paybill}`,
                `Enter Account No: ${CANDIDATE.accountNo}`,
                'Enter your donation amount',
                'Enter your M-Pesa PIN and confirm'
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 10
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: C.green,
                      color: C.white,
                      fontSize: 11,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      color: C.text,
                      lineHeight: 1.5
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}

              <div
                style={{
                  marginTop: 24,
                  padding: '12px 16px',
                  background: C.goldLight,
                  borderRadius: 8,
                  borderLeft: `3px solid ${C.gold}`
                }}
              >
                <p style={{ margin: 0, fontSize: 12, color: C.text }}>
                  You'll receive an M-Pesa confirmation SMS. Screenshot it and
                  share on WhatsApp — the team will send a personal thank-you.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
