import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import "./About.css";
import cred1 from "../images/4.jpg";
import drAllamImg from "../images/dr-allam.jpg";

const CREDENTIALS = [
  {
    img: cred1,
    badge: <GraduationCap size={52} color="rgba(255,255,255,0.5)" />,
    label: "مؤهل علمي",
    title: " شهادة SCOPE المعتمدة دولياً من الاتحاد العالمي للسمنة 🎓📜 ",
    color: "green",
  },
];

const STATS = [
  {
    icon: <Calendar size={22} color="var(--primary-light)" />,
    num: "8+",
    label: "سنوات خبرة",
  },
  {
    icon: <MapPin size={22} color="var(--primary-light)" />,
    num: "بنها",
    label: "عمارة بنك القاهرة",
  },
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
            <img
              src={drAllamImg}
              alt="د. محمود علام"
              className="about-hero__img"
            />
          </div>
          <div className="about-hero__info">
            <h1 className="about-hero__name">د. محمود علام</h1>
            <p className="about-hero__spec">أخصائى تغذية علاجية: بنها/
               القاهره التجمع الخامس (قريبا )
            </p>
            <div className="about-hero__tags">
              <span className="about-hero__tag">علاج السمنه والنحافه</span>
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
              د. محمود علام أخصائي التغذية العلاجية وعلاج السمنة الدكتور محمود
              علام هو أخصائي تغذية علاجية معتمد دولياً، وحاصل على شهادة SCOPE من
              الاتحاد العالمي للسمنة، ويمتلك خبرة ممتدة لأكثر من 8 سنوات في هذا
              المجال. نجح د. محمود في تغيير حياة الكثيرين نحو نمط حياة صحي ونظام
              غذائي متوازن ومستدام، مدمجاً بالنشاط الرياضي، لمساعدتهم في الوصول
              إلى الوزن المثالي وإعادة بناء علاقة صحية مع الطعام.{" "}
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
    </>
  );
}