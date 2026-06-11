import React from 'react';
import { Award, TrendingDown, ArrowLeft,   } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.css';
import drAllamImg from '../images/dr-allam.jpg';

const WHATSAPP_URL =
  'https://wa.me/201100690997?text=' +
  encodeURIComponent('السلام عليكم دكتور، أرغب في الاستفسار عن نظام غذائي مخصص وحجز موعد.');

export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__content">
          <div className="hero__badge">
            <Award size={15} />
            أخصائى تغذية معتمد — بنها
          </div>

          <h1 className="hero__title">
            ابدأ رحلتك نحو
            <br />
            <span>جسم مثالي </span>
            وحياة
            <br />
            <span className="highlight">أكثر صحة وحيوية</span>
          </h1>

          <p className="hero__desc">
            أنظمة غذائية مخصصة لكل حالة، متابعة دقيقة ومستمرة، ونتائج حقيقية
            بدون حرمان. مع دكتور محمود، رحلة التغيير أسهل مما تتخيل.
          </p>

          <div className="hero__actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <FaWhatsapp size={18} />
              احجز موعدك الآن
            </a>
            <button className="btn-gold" onClick={() => onNavigate('results')}>
              النتائج
              <ArrowLeft size={16} />
            </button>
          </div>

          
        </div>

        <div className="hero__visual">
          <div className="hero__float hero__float--top">
            <div className="hero__float-icon green">
              <TrendingDown size={18} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>آخر نتيجة</div>
              <div style={{ fontWeight: 800 }}>تخسيس 18 كيلو</div>
            </div>
          </div>

          <div className="hero__card-main">
            <div className="hero__card-image-wrap">
              <img src={drAllamImg} alt="د. محمود علام" className="hero__card-img" />
            </div>
            <div className="hero__card-info-content">
              <div className="hero__card-name">د. محمود علام</div>
              <div className="hero__card-spec">أخصائى تغذية علاجية  </div>
              <div className="hero__card-tags">
                 <span className="hero__card-tag">علاج السمنه والنحافه</span>
              </div>
            </div>
          </div>

          <div className="hero__float hero__float--bottom">
            <div className="hero__float-icon gold">
              <Award size={18} color="var(--gold)" />
            </div>
            <div>
              <div style={{ fontWeight: 800 }}>تقييم المرضى</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>5.0 / 5.0</div>
            </div>
          </div>
        </div>

      </div>

       
    </section>
  );
}
