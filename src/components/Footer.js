import React from 'react';
import { Leaf, MessageCircle, MapPin, Phone, Clock, Home, User, Star } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const WHATSAPP_URL =
  'https://wa.me/201100690997?text=' +
  encodeURIComponent('السلام عليكم دكتور، أرغب في حجز موعد.');

const INSTAGRAM_URL = 'https://www.instagram.com/dr_mahmoudallam?igsh=YWk1NGtla2ZveXoz&utm_source=qr';
const TIKTOK_URL = 'https://www.tiktok.com/@dr.mhamoud.allam?_r=1&_t=ZS-972bmbPS1ES';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <Leaf size={22} color="#fff" />
            </div>
            <div className="footer__logo-text">
              <span className="footer__logo-name">د. محمود علام</span>
              <span className="footer__logo-title">أخصائى تغذية علاجية</span>
            </div>
          </div>
          <p className="footer__desc">
            أخصائى تغذية علاجية وتخسيس. نقدم أنظمة غذائية مخصصة ومتابعة دقيقة
            لمساعدتك في تحقيق أهدافك الصحية بأمان وفاعلية.
          </p>
          <div className="footer__social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="TikTok">
              <FaTiktok size={18} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer__col-title">روابط سريعة</h4>
          <ul className="footer__links">
            {[
              { label: 'الرئيسية', icon: <Home size={14} />, page: 'home' },
              { label: 'عن الدكتور', icon: <User size={14} />, page: 'about' },
              { label: 'النتائج', icon: <Star size={14} />, page: 'results' },
              { label: 'تواصل معنا', icon: <Phone size={14} />, page: 'contact' },
            ].map((item) => (
              <li key={item.page}>
                <button onClick={() => onNavigate(item.page)}>
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__col-title">تواصل معنا</h4>
          <div className="footer__contact-item">
            <MapPin size={16} className="footer__contact-icon" />
            <span>بنها — عمارة بنك القاهرة، أمام برج مكة</span>
          </div>
          <div className="footer__contact-item">
            <Phone size={16} className="footer__contact-icon" />
            <span>01100690997</span>
          </div>
          <div className="footer__contact-item">
            <Clock size={16} className="footer__contact-icon" />
            <span>السبت – الخميس: 10ص – 10م</span>
          </div>
          <div className="footer__contact-item">
            <MessageCircle size={16} className="footer__contact-icon" />
            <span>متابعة أونلاين 24/7</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          جميع الحقوق محفوظة © {new Date().getFullYear()} | <span>د. محمود علام</span>
        </p>
        <p className="footer__heart">صُنع بعناية للصحة والعافية</p>
      </div>
    </footer>
  );
}
