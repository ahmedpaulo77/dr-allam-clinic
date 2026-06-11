import React from 'react';
import { Salad, Stethoscope, Smartphone } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: <Salad size={28} />,
    iconClass: 'green',
    title: 'نظام عذائي مخصص',
    desc: 'برنامج غذائي مصمم خصيصاً لجسمك وأسلوب حياتك لضمان أقصى نتيجة في أقل وقت.',
  },
  {
    icon: <Stethoscope size={28} />,
    iconClass: 'teal',
    title: 'تغذية علاجية',
    desc: 'أنظمة غذائية لمرضى السكر والضغط والكوليسترول والأمراض المزمنة.',
  },
  {
    icon: <Smartphone size={28} />,
    iconClass: 'red',
    title: 'متابعة أونلاين',
    desc: 'متابعة مستمرة عن بعد عبر الواتساب لضمان الالتزام وتحقيق الأهداف.',
  },
];

export default function Services() {
  return (
    <section className="services">
      <h2 className="section-title">
        خدماتنا <span>المتخصصة</span>
      </h2>
      <p className="section-subtitle">
        نقدم حلولاً غذائية شاملة ومخصصة لكل حالة
      </p>
      <div className="divider"></div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <div className="service-card" key={i}>
            <div className={`service-card__icon ${s.iconClass}`}>{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
