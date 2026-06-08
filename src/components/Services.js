import React from 'react';
import { Salad, Dumbbell, Stethoscope, Baby, Smartphone, HeartPulse } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: <Salad size={28} />,
    iconClass: 'green',
    title: 'نظام تخسيس مخصص',
    desc: 'برنامج غذائي مصمم خصيصاً لجسمك وأسلوب حياتك لضمان أقصى نتيجة في أقل وقت.',
  },
  {
    icon: <Dumbbell size={28} />,
    iconClass: 'gold',
    title: 'تغذية الرياضيين',
    desc: 'برامج غذائية متخصصة لزيادة الكتلة العضلية وتحسين الأداء الرياضي.',
  },
  {
    icon: <Stethoscope size={28} />,
    iconClass: 'teal',
    title: 'تغذية علاجية',
    desc: 'أنظمة غذائية لمرضى السكر والضغط والكوليسترول والأمراض المزمنة.',
  },
  {
    icon: <HeartPulse size={28} />,
    iconClass: 'purple',
    title: 'تغذية الحوامل والمرضعات',
    desc: 'تغذية آمنة ومتوازنة لصحة الأم والجنين طوال فترة الحمل والرضاعة.',
  },
  {
    icon: <Baby size={28} />,
    iconClass: 'blue',
    title: 'تغذية الأطفال',
    desc: 'برامج متخصصة لعلاج مشاكل وزن الأطفال وتعزيز نموهم الصحي.',
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
