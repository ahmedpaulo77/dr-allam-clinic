import React from 'react';
import { Star, Trophy, MapPin } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'سارة م.',
    city: 'بنها',
    avatar: 'س',
    stars: 5,
    result: '-14 كيلو في 3 شهور',
    text: 'الدكتور محمود غيّر حياتي. كنت أحاول أتخسس من سنين ومش بنجح. مع نظامه وصلت لوزني المثالي من غير ما أحس بحرمان خالص.',
  },
  {
    name: 'محمد ع.',
    city: 'شبرا الخيمة',
    avatar: 'م',
    stars: 5,
    result: '-20 كيلو في 5 شهور',
    text: 'متابعة مستمرة وردود سريعة. النظام الغذائي كان مرن ومناسب لشغلي. أنصح بيه كل الناس.',
  },
  {
    name: 'نورا ك.',
    city: 'بنها',
    avatar: 'ن',
    stars: 5,
    result: 'تحسن ملحوظ في سكر الدم',
    text: 'عندي سكر وكنت خايفة من أي نظام. الدكتور فهم حالتي وعمل لي نظام آمن ومناسب. الدكتور المعالج بهت لما شاف التحسن.',
  },
  {
    name: 'أحمد س.',
    city: 'طوخ',
    avatar: 'أ',
    stars: 5,
    result: '+8 كيلو عضلات',
    text: 'بلاعب كرة وكنت محتاج أزود كتلتي العضلية. الدكتور فاهم تغذية الرياضيين وأديني برنامج شغال بشكل كبير.',
  },
  {
    name: 'هبة ر.',
    city: 'القناطر',
    avatar: 'ه',
    stars: 5,
    result: '-12 كيلو بعد الولادة',
    text: 'رجعت لوزني قبل الحمل في 4 شهور. الدكتور راعى إني بترضع وعمل نظام صحي لي وللبيبي.',
  },
  {
    name: 'عمر ف.',
    city: 'بنها',
    avatar: 'ع',
    stars: 5,
    result: 'ضغط الدم اتحسن',
    text: 'كنت عندي ضغط مرتفع وزيادة وزن. بعد 3 شهور مع الدكتور الضغط بقى طبيعي والوزن نزل 10 كيلو.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="section-title">
        قالوا عن <span>د. محمود</span>
      </h2>
      <p className="section-subtitle">
        آراء حقيقية من مرضى حققوا نتائج مذهلة
      </p>
      <div className="divider"></div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card" key={i}>

            <div className="testimonial-card__stars">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={14} fill="var(--gold)" color="var(--gold)" />
              ))}
            </div>

            <div className="testimonial-card__result">
              <Trophy size={13} />
              {t.result}
            </div>

            <p className="testimonial-card__text">"{t.text}"</p>

            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">{t.avatar}</div>
              <div>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__city">
                  <MapPin size={12} style={{ display: 'inline', marginLeft: 3 }} />
                  {t.city}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
