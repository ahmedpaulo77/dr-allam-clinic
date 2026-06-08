import React, { useState, useEffect } from 'react';
import { Home, User, Star, Phone, Leaf } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'الرئيسية', icon: <Home size={16} />, page: 'home' },
  { label: 'عن الدكتور', icon: <User size={16} />, page: 'about' },
  { label: 'النتائج', icon: <Star size={16} />, page: 'results' },
  { label: 'تواصل معنا', icon: <Phone size={16} />, page: 'contact' },
];

const WHATSAPP_URL =
  'https://wa.me/201100690997?text=' +
  encodeURIComponent('السلام عليكم دكتور، أرغب في الاستفسار عن نظام غذائي مخصص وحجز موعد.');

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">

        <div className="navbar__logo" onClick={() => handleNav('home')}>
          <div className="navbar__logo-icon">
            <Leaf size={22} color="#fff" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">د. محمود علام</span>
            <span className="navbar__logo-title">أخصائى تغذية علاجية</span>
          </div>
        </div>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.page}>
              <button
                className={currentPage === item.page ? 'active' : ''}
                onClick={() => handleNav(item.page)}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="navbar__cta"
              onClick={() => setMenuOpen(false)}
            >
              <FaWhatsapp size={16} />
              احجز موعدك
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="قائمة التنقل"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}
