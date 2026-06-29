// ============================================================
//  CANDIDATE / CLIENT DATA — edit THIS FILE to deploy a new client.
//  Everything per-candidate lives here: identity, party, hero stats,
//  platform issues, events, credentials, wards, donation amounts.
//  Components read from these exports — you should not need to edit
//  any component file to launch a new candidate.
// ============================================================

// ── Identity, stats, slogans, bio, contact, M-Pesa ──────────
export const CANDIDATE = {
  name: 'Hon. Jane Wanjiku',
  nameShort: 'Jane Wanjiku',
  initials: 'JW',
  title: 'Westlands MP',
  year: '2027',
  electionDate: '2027-08-10',
  constituency: 'Westlands Constituency',
  yearsOfService: 10,

  // Hero stats (vanity metrics — update manually)
  volunteers: '3,200+',
  wardsCovered: '5 / 5',

  // Slogans
  sloganLine1: 'A Westlands That Works',
  sloganLine2: 'For You.',
  sloganSw: 'Westlands Inayofanya Kazi Kwa Ajili Yako.',

  // Footer tagline
  footerTagline:
    "Together we'll build a Westlands that works for every resident, not just a few.",

  // Bio (About section prose)
  bio1: 'Born and raised in Kangemi, Jane Wanjiku has spent the last decade building small businesses, running a youth skills centre, and advocating for Westlands residents at the county level.',
  bio2: 'A University of Nairobi graduate and certified CPA, she brings financial discipline and deep community understanding to every policy she champions.',

  // Contact
  email: 'info@janewanjiku.ke',
  phone: '0700 000 000',
  poBox: 'P.O. Box 00100, Nairobi',
  whatsapp: 'https://wa.me/254700000000',

  // M-Pesa
  paybill: '123456',
  accountNo: 'WANJIKU2027'
};

// ── Party (badge colour + names) ────────────────────────────
export const PARTY = {
  name: 'Orange Democratic Movement',
  nameShort: 'ODM',
  color: '#FF6B00',
  colorBg: 'rgba(255,107,0,0.12)',
  colorBorder: 'rgba(255,107,0,0.45)'
};

// ── Platform issues (Issues section) ────────────────────────
export const ISSUES = [
  {
    icon: '🏗️',
    title: 'Infrastructure',
    desc: 'Roads, drainage, and public spaces that work for every ward — not just the centre.'
  },
  {
    icon: '📚',
    title: 'Education',
    desc: 'Bursaries, school facilities, and skills training that open real doors for Westlands youth.'
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Accessible clinics and maternal health services in every sub-location.'
  },
  {
    icon: '💼',
    title: 'Economic Growth',
    desc: 'SME support, upgraded markets, and local procurement that keeps money circulating here.'
  }
];

// ── Upcoming events (Events section) ────────────────────────
export const EVENTS = [
  {
    day: '12',
    month: 'Jul',
    title: 'Town Hall — Westlands Market',
    time: '10:00 AM',
    location: 'Westlands Market Square'
  },
  {
    day: '19',
    month: 'Jul',
    title: 'Youth Forum — Parklands Social Hall',
    time: '2:00 PM',
    location: 'Parklands Social Hall'
  },
  {
    day: '26',
    month: 'Jul',
    title: "Women's Breakfast — Aga Khan Hall",
    time: '8:00 AM',
    location: 'Aga Khan University'
  },
  {
    day: '02',
    month: 'Aug',
    title: 'Community Walk — Kangemi',
    time: '7:00 AM',
    location: 'Kangemi Market'
  }
];

// ── Credentials (About section) — "yrs" derives from yearsOfService ─
export const CREDENTIALS = [
  'UoN Graduate & CPA',
  `${CANDIDATE.yearsOfService} yrs community service`,
  'Youth centre founder',
  '500+ direct jobs created'
];

// ── Wards (Volunteer form dropdown) — match the constituency ─
export const WARDS = [
  'Parklands/Highridge',
  'Karura',
  'Kangemi',
  'Mountain View',
  'Kitisuru'
];

// ── Quick donation amounts in KSh (Donate → STK tab) ────────
export const QUICK_AMOUNTS = [500, 1000, 2500, 5000, 10000];
