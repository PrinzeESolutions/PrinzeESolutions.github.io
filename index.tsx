import { useEffect, useState } from 'react';

export default function PrinzeeSolutionsWebsite() {
  const [isDark, setIsDark] = useState(false);
  const [page, setPage] = useState('home');

  useEffect(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemDark);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  const apps = [
    { name: 'Jelly Kingdom', link: 'https://play.google.com/store/apps/details?id=com.prinzeesoftware.jellykingdom', desc: 'Puzzle adventure game' },
    { name: 'Velvet Slice', link: 'https://play.google.com/store/apps/details?id=com.prinzeesoftware.velvetslice', desc: 'Arcade slicing game' },
    { name: 'Bubble Shot', link: 'https://play.google.com/store/apps/details?id=com.prinzeesoftware.bubbleshot', desc: 'Bubble shooter game' },
    { name: 'Jewel Kingdom', link: 'https://play.google.com/store/apps/details?id=com.prinzeesoftware.jewelkingdom', desc: 'Match-3 puzzle game' },
    { name: 'Ludo Rise', link: 'https://play.google.com/store/apps/details?id=com.prinzeesoftware.ludorise', desc: 'Multiplayer board game' },
    { name: 'DocScanner AI', link: 'https://play.google.com/store/apps/details?id=com.prinzeesoftware.docscannerai', desc: 'AI document scanner' }
  ];

  const services = [
    'Website Development',
    'Mobile App Development',
    'Google Ads Management',
    'Digital Marketing',
    'IT Consultancy',
    'CCTV Camera Installation',
    'Networking Solutions',
    'IT Hardware Support',
    'Software Solutions',
    'Technical Support Services'
  ];

  const brandName = "PrinzeE Solutions";
  const tagline = "Web • Apps • Google Ads • IT • Security Solutions";

  const buttonClass =
    "px-5 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-md bg-gradient-to-r from-blue-600 to-blue-500 text-white";

  const cardClass =
    "p-6 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition-all duration-300";

  const Nav = () => (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-blue-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="cursor-pointer" onClick={() => setPage('home')}>
          <h1 className="font-bold text-lg">{brandName}</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">{tagline}</p>
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <button className={buttonClass} onClick={() => setPage('home')}>Home</button>
          <button className={buttonClass} onClick={() => setPage('services')}>Services</button>
          <button className={buttonClass} onClick={() => setPage('apps')}>Apps</button>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${isDark ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow transform transition-all duration-300 ${isDark ? 'translate-x-6' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );

  const Home = () => (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-5xl font-bold mb-6">IT Consultancy & Digital Services Company</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          PrinzeE Solutions is a complete IT and digital services company offering website development,
          app development, Google Ads marketing, software solutions, CCTV camera installation,
          networking, and technical support services.
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We focus on delivering reliable, affordable, and scalable solutions to improve digital presence
          and business efficiency.
        </p>

        <div className="flex gap-4">
          <button className={buttonClass} onClick={() => setPage('services')}>Explore Services</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={cardClass}><h3 className="font-bold">6 Apps</h3></div>
        <div className={cardClass}><h3 className="font-bold">Google Ads</h3></div>
        <div className={cardClass}><h3 className="font-bold">IT Services</h3></div>
        <div className={cardClass}><h3 className="font-bold">Security</h3></div>
      </div>
    </section>
  );

  const ServicesPage = () => (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-center text-gray-500 mb-10">
        Web Development | Apps | Google Ads | IT Support | CCTV Solutions
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className={cardClass}>
            <h3 className="font-bold text-lg mb-2">{s}</h3>
            <p className="text-sm text-gray-500">Professional and scalable business solution.</p>
          </div>
        ))}
      </div>
    </section>
  );

  const AppsPage = () => (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Our Apps</h2>
      <p className="text-center text-gray-500 mb-10">Published Android applications on Google Play Store</p>

      <div className="grid md:grid-cols-3 gap-6">
        {apps.map((a, i) => (
          <div key={i} className={cardClass}>
            <h3 className="font-bold text-lg mb-2">{a.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{a.desc}</p>
            <a className="text-blue-600 font-medium hover:underline" href={a.link} target="_blank">
              View on Play Store
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-slate-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-bold mb-3">{brandName}</h3>
          <p className="text-gray-400 text-sm">
            Technology consultancy providing web development, mobile apps, Google Ads, IT support, CCTV solutions, and software services.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            {services.slice(0,6).map((s,i)=> <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Bio & Links</h3>
          <p className="text-sm text-gray-400 mb-3">
            Web Development | Apps | Google Ads<br/>
            IT Support & CCTV Solutions<br/>
            Complete Digital & Technology Services
          </p>

          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="https://www.youtube.com/@PrrinzeESolutions" target="_blank">YouTube Channel</a></li>
            <li><a href="https://www.instagram.com/prinzeesolutions" target="_blank">Instagram</a></li>
            <li><a href="https://www.facebook.com/prinzeesolutions" target="_blank">Facebook</a></li>
            <li><a href="https://play.google.com/store/apps/dev?id=8790393094937827904" target="_blank">Play Store</a></li>
            <li><a href="https://www.youtube.com/@PrinceChaurasiaVlogs" target="_blank">Owner YouTube</a></li>
            <li><a href="https://www.instagram.com/prinzeegaming/" target="_blank">Owner Instagram</a></li>
            <li><a href="https://www.facebook.com/prinzeegaming" target="_blank">Owner Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t border-gray-800">
        © 2026 PrinzeE Solutions • IT Consultancy & Digital Services
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-all duration-300">
      <Nav />

      {page === 'home' && <Home />}
      {page === 'services' && <ServicesPage />}
      {page === 'apps' && <AppsPage />}

      <Footer />
    </div>
  );
}
