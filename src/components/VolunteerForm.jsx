import { useState } from 'react';
import { C } from '../constants/theme';

const wards = [
  'Kangemi',
  'Mountain View',
  'Highridge',
  'Parklands/Highridge',
  'Kitisuru',
  'North Mwimuto',
  'Nyathuna'
];
const skills = [
  'Canvassing / Door knocking',
  'Social media',
  'Event logistics',
  'Transport',
  'Data & Tech',
  'Legal / Professional'
];

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    ward: '',
    skill: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^(?:0|\+?254)\d{9}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid Kenyan number (07XX...)';
    if (!form.ward) e.ward = 'Please select your ward';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const field = (key) => ({
    value: form[key],
    onChange: (ev) => {
      setForm({ ...form, [key]: ev.target.value });
      setErrors({ ...errors, [key]: '' });
    },
    style: {
      width: '100%',
      border: `1.5px solid ${errors[key] ? '#EF4444' : C.border}`,
      borderRadius: 8,
      padding: '12px 14px',
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      background: C.white
    }
  });

  return (
    <section
      id='volunteer'
      style={{ padding: '5rem 1.5rem', background: C.bg }}
    >
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
        {/* Left copy */}
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
            GET INVOLVED
          </div>
          <h2
            style={{
              color: C.green,
              fontSize: '1.9rem',
              fontWeight: 800,
              marginBottom: '1rem'
            }}
          >
            Join the Movement
          </h2>
          <p
            style={{
              color: C.muted,
              lineHeight: 1.75,
              fontSize: 15,
              marginBottom: '1.25rem'
            }}
          >
            We need people on the ground — knocking doors, organizing meetings,
            and spreading the word. Whatever your skill, there's a role for you.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: C.muted,
              fontSize: 14
            }}
          >
            <span style={{ color: C.green, fontSize: 18 }}>👥</span>
            <span>
              <strong style={{ color: C.green }}>3,200+</strong> volunteers
              already signed up
            </span>
          </div>
        </div>

        {/* Form card */}
        <div
          style={{
            background: C.white,
            borderRadius: 16,
            padding: '2rem',
            boxShadow: '0 2px 20px rgba(0,0,0,.06)',
            border: `1px solid ${C.border}`
          }}
        >
          {!submitted ? (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div>
                <input placeholder='Full name' {...field('name')} />
                {errors.name && (
                  <div style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>
                    {errors.name}
                  </div>
                )}
              </div>
              <div>
                <input
                  placeholder='Phone number (07XX XXX XXX)'
                  {...field('phone')}
                />
                {errors.phone && (
                  <div style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>
                    {errors.phone}
                  </div>
                )}
              </div>
              <div>
                <select {...field('ward')}>
                  <option value=''>Select your ward</option>
                  {wards.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
                {errors.ward && (
                  <div style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>
                    {errors.ward}
                  </div>
                )}
              </div>
              <select {...field('skill')}>
                <option value=''>How can you help? (optional)</option>
                {skills.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button
                onClick={handleSubmit}
                style={{
                  background: C.green,
                  color: C.white,
                  border: 'none',
                  borderRadius: 8,
                  padding: 14,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Sign Up as Volunteer
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
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
                  fontSize: 24
                }}
              >
                ✓
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 19,
                  color: C.green,
                  marginBottom: 6
                }}
              >
                You're in, {form.name.split(' ')[0]}!
              </div>
              <div style={{ color: C.muted, fontSize: 14, lineHeight: 1.6 }}>
                Our team will reach out on <strong>{form.phone}</strong>{' '}
                shortly. Welcome to the movement.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
