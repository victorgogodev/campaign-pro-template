import Nav from './components/Nav';
import Hero from './components/Hero';
import Issues from './components/Issues';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Donate from './components/Donate';
import Events from './components/Events';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  // Lightweight routing: /privacy renders the standalone policy page;
  // everything else renders the main campaign site. Full-page navigation,
  // no router dependency. NOTE: for direct loads/refreshes of /privacy on
  // Vercel, add the SPA rewrite in vercel.json (see handoff notes).
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/privacy') {
    return <PrivacyPolicy />;
  }

  return (
    <div>
      <Nav />
      <Hero />
      <Issues />
      <About />
      <VolunteerForm />
      <Donate />
      <Events />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
