import React from 'react';
import { GraduationCap, Smartphone, Calendar, MapPin } from 'lucide-react';
import './About.css';
import Videos from './Videos';
import cred1 from '../images/4.jpg';
import cred2 from '../images/5.jpg';
import drAllamImg from '../images/dr-allam.jpg';

const CREDENTIALS = [
  {
    img: cred1,
    badge: <GraduationCap size={52} color="rgba(255,255,255,0.5)" />,
    label: 'مؤهل علمي',
    title: 'ماجستير التغذية العلاجية',
    desc: 'Scope certified by the World Obesity Federation.',
    color: 'green',
  },
  {
    img: cred2,
    badge: <Smartphone size={52} color="rgba(255,255,255,0.5)" />,
    label: 'خبرة عملية',
    title: 'متابعة أونلاين',
    desc: 'يقدم استشارات وبرامج متابعة أونلاين لأكثر من 3 سنوات.',
    color: 'gold',
  },
];

const STATS = [
  { icon: <Calendar size={22} color="var(--primary-light)" />, num: '3+', label: 'سنوات خبرة' },
  { icon: <MapPin size={22} color="var(--primary-light)" />, num: 'بنها', label: 'عمارة بنك القاهرة' },
];

function CredCard({ cred }) {
  return (
    <div className={`cred-card cred-card--${cred.color}`}>
      <div className="cred-card__img-wrap">
        {cred.img ? (
          <img src={cred.img} alt={cred.title} className="cred-card__img" />
        ) : (
          <div className="cred-card__img-placeholder">
            <span className="cred-card__big-badge">{cred.badge}</span>
          </div>
        )}
        <span className="cred-card__label">{cred.label}</span>
      </div>
      <div className="cred-card__body">
        <h3 className="cred-card__title">{cred.title}</h3>
        <p className="cred-card__desc">{cred.desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__card">
          <div className="about-hero__img-wrap">
            <img src={drAllamImg} alt="د. محمود علام" className="about-hero__img" />
          </div>
          <div className="about-hero__info">
            <h1 className="about-hero__name">د. محمود علام</h1>
            <p className="about-hero__spec">أخصائى تغذية علاجية — بنها</p>
            <div className="about-hero__tags">
              <span className="about-hero__tag">تخسيس</span>
              <span className="about-hero__tag">تغذية علاجية</span>
              <span className="about-hero__tag">أونلاين</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__inner">

          <div className="about-story__stats">
            {STATS.map((s, i) => (
              <div className="about-story__stat" key={i}>
                <span className="about-story__stat-icon">{s.icon}</span>
                <span className="about-story__stat-num">{s.num}</span>
                <span className="about-story__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about-story__text">
            <h3>من هو الدكتور محمود؟</h3>
            <p>
              دكتور محمود علام أخصائى تغذية علاجية وتخسيس، يعمل في مجال التغذية
              منذ أكثر من 3 سنوات وحقق نتائج مذهلة مع مئات المرضى من مختلف المحافظات.
            </p>
            <p>
              يتميز الدكتور محمود بأسلوبه الإنساني والعلمي في التعامل مع كل حالة على حدة،
              ووضع أنظمة غذائية مرنة لا تعتمد على الحرمان بل على التوازن والاستدامة.
            </p>
            <p>
              يقدم استشاراته في عيادته ببنها ويتيح أيضاً متابعة أونلاين عبر
              الواتساب لمرضاه من خارج المحافظة.
            </p>
          </div>

        </div>
      </section>

      <section className="about-creds">
        <h2 className="section-title">
          الشهادات <span>والخبرات</span>
        </h2>
        <p className="section-subtitle">كفاءة علمية وخبرة عملية في خدمتك</p>
        <div className="divider"></div>

        <div className="about-creds__row">
          {CREDENTIALS.map((c, i) => (
            <CredCard key={i} cred={c} />
          ))}
        </div>
      </section>

      <Videos />
    </>
  );
}
