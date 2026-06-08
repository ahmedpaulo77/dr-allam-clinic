import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const PHONE = '01100690997';
const WHATSAPP_URL =
  'https://wa.me/20' + PHONE.slice(1) + '?text=' +
  encodeURIComponent('السلام عليكم دكتور، أرغب في الاستفسار وحجز موعد بالعيادة.');

const INSTAGRAM_URL = 'https://www.instagram.com/dr_mahmoudallam?igsh=YWk1NGtla2ZveXoz&utm_source=qr';
const TIKTOK_URL = 'https://www.tiktok.com/@dr.mhamoud.allam?_r=1&_t=ZS-972bmbPS1ES';

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">
        تواصل <span>معنا</span>
      </h2>
      <p className="section-subtitle">
        يسعدنا استقبالك في العيادة أو المتابعة أونلاين
      </p>
      <div className="divider"></div>

      <div className="contact__inner">

        <div className="contact__info">

          <p className="contact__info-intro">
            لحجز موعد أو الاستفسار عن الأنظمة الغذائية، تواصل معنا عبر الواتساب
            أو زر العيادة مباشرة في بنها — عمارة بنك القاهرة، أمام برج مكة. نرد في أسرع وقت ممكن.
          </p>

          <div className="contact__items">

            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="contact__item">
              <div className="contact__item-icon whatsapp">
                <FaWhatsapp size={22} color="#128C7E" />
              </div>
              <div>
                <div className="contact__item-label">واتساب العيادة</div>
                <div className="contact__item-value">{PHONE}</div>
              </div>
            </a>

            <a href={`tel:${PHONE}`} className="contact__item">
              <div className="contact__item-icon phone">
                <Phone size={22} color="#1565c0" />
              </div>
              <div>
                <div className="contact__item-label">رقم الهاتف</div>
                <div className="contact__item-value">{PHONE}</div>
              </div>
            </a>

            <div className="contact__item">
              <div className="contact__item-icon location">
                <MapPin size={22} color="var(--gold)" />
              </div>
              <div>
                <div className="contact__item-label">عنوان العيادة</div>
                <div className="contact__item-value">بنها — عمارة بنك القاهرة، أمام برج مكة</div>
              </div>
            </div>

          </div>

          <div>
            <p style={{ fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 12 }}>
              تابعنا على السوشيال ميديا
            </p>
            <div className="contact__socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="contact__social instagram">
                <FaInstagram size={16} />
                Instagram
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="contact__social tiktok">
                <FaTiktok size={16} />
                TikTok
              </a>
            </div>
          </div>

        </div>

        <div className="contact__cta-card">
          <Clock size={40} color="var(--gold)" style={{ marginBottom: 16 }} />
          <h3 className="contact__cta-title">احجز موعدك الآن</h3>
          <p className="contact__cta-desc">
            تواصل معنا عبر الواتساب واحجز كشفك الأول. رد فوري خلال دقائق.
          </p>

          <div className="contact__cta-number">
            <Phone size={18} />
            <span>{PHONE}</span>
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
            <FaWhatsapp size={18} />
            تواصل عبر الواتساب
          </a>

          <div className="contact__cta-divider"></div>

          <div className="contact__hours">
            <p style={{ fontWeight: 800, color: 'var(--white)', marginBottom: 10, fontSize: '0.9rem' }}>
              مواعيد العيادة
            </p>
            <div className="contact__hour-row">
              <span className="contact__hour-day">السبت — الخميس</span>
              <span className="contact__hour-time">10 ص — 10 م</span>
            </div>
            <div className="contact__hour-row">
              <span className="contact__hour-day">الجمعة</span>
              <span className="contact__hour-time">4 م — 9 م</span>
            </div>
            <div className="contact__hour-row">
              <span className="contact__hour-day">متابعة أونلاين</span>
              <span className="contact__hour-time">24/7</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
