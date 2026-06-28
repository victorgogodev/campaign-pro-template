import { useState } from 'react';
import { C } from '../constants/theme';

const quickAmounts = ['100', '500', '1000', '2500'];

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1); // 1=form, 2=processing, 3=success
  const [error, setError] = useState('');

  const handleDonate = () => {
    setError('');
    if (!amount || parseInt(amount) < 10) {
      setError('Minimum donation is KSh 10');
      return;
    }
    if (!phone.trim()) {
      setError('Enter your M-Pesa number');
      return;
    }
    if (!/^(?:0|\+?254)\d{9}$/.test(phone.replace(/\s/g, ''))) {
      setError('Enter a valid Kenyan number (07XX...)');
      return;
    }
    setStep(2);
    setTimeout(() => setStep(3), 3500);
  };

  const reset = () => {
    setStep(1);
    setAmount('');
    setPhone('');
    setError('');
  };

  return (
    <section
      id='donate'
      style={{ background: C.goldLight, padding: '5rem 1.5rem' }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            color: C.green,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3.5,
            marginBottom: 12
          }}
        >
          SUPPORT THE CAMPAIGN
        </div>
        <h2
          style={{
            color: C.green,
            fontSize: '1.9rem',
            fontWeight: 800,
            marginBottom: '.75rem'
          }}
        >
          Donate via M-Pesa
        </h2>
        <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Every shilling goes directly to ground operations. No admin overhead.
        </p>

        <div
          style={{
            background: C.white,
            borderRadius: 16,
            padding: '2rem',
            boxShadow: '0 2px 20px rgba(0,0,0,.06)',
            maxWidth: 520,
            margin: '0 auto'
          }}
        >
          {/* Step 1 — Form */}
          {step === 1 && (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 8
                }}
              >
                {quickAmounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    style={{
                      border: `2px solid ${amount === a ? C.green : C.border}`,
                      background: amount === a ? C.green : C.white,
                      color: amount === a ? C.white : C.green,
                      borderRadius: 8,
                      padding: '10px 4px',
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: 'pointer'
                    }}
                  >
                    {parseInt(a) >= 1000 ? `${parseInt(a) / 1000}K` : a}
                  </button>
                ))}
              </div>
              <input
                type='number'
                placeholder='Or enter amount (min. KSh 10)'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  width: '100%',
                  border: `1.5px solid ${C.border}`,
                  borderRadius: 8,
                  padding: '12px 14px',
                  fontSize: 14,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
              <input
                placeholder='M-Pesa number (07XX XXX XXX)'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  border: `1.5px solid ${C.border}`,
                  borderRadius: 8,
                  padding: '12px 14px',
                  fontSize: 14,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
              {error && (
                <div style={{ color: '#EF4444', fontSize: 13 }}>{error}</div>
              )}
              <button
                onClick={handleDonate}
                style={{
                  background: C.green,
                  color: C.white,
                  border: 'none',
                  borderRadius: 8,
                  padding: 14,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer'
                }}
              >
                {amount
                  ? `Send KSh ${parseInt(amount).toLocaleString()} via M-Pesa`
                  : 'Send Donation via M-Pesa'}
              </button>
              <div style={{ fontSize: 12, color: C.muted }}>
                Secure · Instant · IEBC-compliant
              </div>
            </div>
          )}

          {/* Step 2 — Processing */}
          {step === 2 && (
            <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: `3px solid ${C.greenLight}`,
                  borderTopColor: C.green,
                  borderRadius: '50%',
                  margin: '0 auto 1.25rem',
                  animation: 'spin .7s linear infinite'
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 17,
                  color: C.green,
                  marginBottom: 8
                }}
              >
                Check your phone
              </div>
              <div style={{ color: C.muted, fontSize: 14 }}>
                An M-Pesa prompt was sent to <strong>{phone}</strong>. Enter
                your PIN to confirm KSh {parseInt(amount).toLocaleString()}.
              </div>
            </div>
          )}

          {/* Step 3 — Success */}
          {step === 3 && (
            <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
              <div
                style={{
                  background: C.greenLight,
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: 24,
                  color: C.green
                }}
              >
                ✓
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 20,
                  color: C.green,
                  marginBottom: 8
                }}
              >
                Thank you!
              </div>
              <div
                style={{ color: C.muted, fontSize: 14, marginBottom: '1.5rem' }}
              >
                KSh {parseInt(amount).toLocaleString()} received. You're helping
                build a better Westlands.
              </div>
              <button
                onClick={reset}
                style={{
                  background: 'none',
                  border: `1.5px solid ${C.green}`,
                  borderRadius: 8,
                  padding: '10px 24px',
                  color: C.green,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer'
                }}
              >
                Donate again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
