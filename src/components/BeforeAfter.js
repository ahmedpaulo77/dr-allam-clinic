import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './BeforeAfter.css';

import result1 from '../images/1.jpg';
import result2 from '../images/2.jpg';
import result3 from '../images/3.jpg';
import result6 from '../images/6.jpg';

const WHATSAPP_URL =
  'https://wa.me/201100690997?text=' +
  encodeURIComponent('السلام عليكم دكتور شفت النتائج وعايز ابدأ معاك.');

// كل صورة فيها قبل وبعد في نفس الصورة
const RESULTS = [
  {
    img: result1,
    lost: '',
    duration: '',
    quote: '',
  },
  {
    img: result2,
    lost: '',
    duration: '',
    quote: '',
  },
  {
    img: result3,
    lost: '',
    duration: '',
    quote: '',
  },
  {
    img: result6,
    lost: '',
    duration: '',
    quote: '',
  },
];

export default function BeforeAfter() {
  return (
    <section className="before-after">
      <h2 className="section-title">
        نتائج <span>حقيقية</span> — قبل وبعد
      </h2>

      <p className="section-subtitle">
        قصص نجاح حقيقية لمرضى حولوا حياتهم مع الدكتور محمود
      </p>

      <div className="divider"></div>

      <div className="before-after__grid">
        {RESULTS.map((r, i) => (
          <div className="result-card" key={i}>

            {/* الصورة */}
            <div className="result-card__img-wrap">
              <img
                src={r.img}
                alt={`نتيجة ${i + 1} قبل وبعد`}
                className="result-card__img-full"
              />
              <div className="result-card__img-badge">
                قبل & بعد
              </div>
            </div>

            {/* Info */}
            <div className="result-card__info">

              {/* Stats */}
              {(r.lost || r.duration) && (
                <div className="result-card__stats">
                  {r.duration && (
                    <span className="result-card__stat">
                      <span className="result-card__stat-icon">⏱️</span>
                      {r.duration}
                    </span>
                  )}

                  {r.lost && (
                    <span className="result-card__stat highlight">
                      <span className="result-card__stat-icon">🏆</span>
                      {r.lost}
                    </span>
                  )}
                </div>
              )}

              {/* Quote */}
              {r.quote && r.quote.trim() !== '' ? (
                <p className="result-card__quote">
                  "{r.quote}"
                </p>
              ) : (
                <p className="result-card__quote result-card__quote--empty">
                  نتيجة حقيقية لأحد مرضى الدكتور محمود ✨
                </p>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="before-after__cta">
        <h3>أنت التالي 🎯</h3>

        <p>
          مئات النتائج الحقيقية بتنتظرك. ابدأ رحلتك اليوم مع دكتور محمود
          واحسب فرقك بنفسك.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-gold"
        >
          <FaWhatsapp size={17} />
          ابدأ رحلتك الآن
        </a>
      </div>

    </section>
  );
}