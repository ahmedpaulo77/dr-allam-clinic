import React, { useState } from 'react';
import { Scale, Ruler, Calculator, RotateCcw, Info } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './BMICalculator.css';

const WHATSAPP_URL =
  'https://wa.me/201100690997?text=' +
  encodeURIComponent('السلام عليكم دكتور، حسبت BMI وأرغب في استشارة متخصصة.');

const RANGES = [
  { dot: '#90caf9', label: 'نقص في الوزن', values: 'أقل من 18.5' },
  { dot: '#66bb6a', label: 'وزن طبيعي مثالي', values: '18.5 – 24.9' },
  { dot: '#ffa726', label: 'زيادة في الوزن', values: '25 – 29.9' },
  { dot: '#ef5350', label: 'سمنة', values: '30 وما فوق' },
];

function getBmiCategory(bmi) {
  if (bmi < 18.5)
    return { cls: 'underweight', status: 'نقص في الوزن', desc: 'وزنك أقل من المعدل الطبيعي. ينصح بنظام غذائي مكثف لزيادة الوزن بشكل صحي.' };
  if (bmi < 25)
    return { cls: 'normal', status: 'وزنك مثالي', desc: 'مبروك! وزنك في المعدل الطبيعي الصحي. استمر في نمط حياتك الصحي.' };
  if (bmi < 30)
    return { cls: 'overweight', status: 'زيادة في الوزن', desc: 'وزنك فوق المعدل الطبيعي قليلاً. نظام غذائي منظم سيساعدك للوصول للوزن المثالي.' };
  return { cls: 'obese', status: 'سمنة — تحتاج متابعة', desc: 'ينصح بمتابعة الدكتور لوضع برنامج غذائي متخصص وآمن.' };
}

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleCalc = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const h = Number(height) / 100;
    const bmi = (Number(weight) / (h * h)).toFixed(1);
    setResult({ bmi, ...getBmiCategory(Number(bmi)) });
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <section className="bmi" id="bmi">
      <h2 className="section-title">
        احسب <span>مؤشر كتلة جسمك</span>
      </h2>
      <p className="section-subtitle">اعرف وزنك الصحي المثالي في ثوانٍ</p>
      <div className="divider"></div>

      <div className="bmi__inner">

        <div>
          <div className="bmi__form-card">
            <h3 className="bmi__form-title">حاسبة BMI</h3>
            <p className="bmi__form-sub">أدخل بياناتك للحصول على نتيجتك فوراً</p>

            <form onSubmit={handleCalc}>
              <div className="bmi__field">
                <label className="bmi__label">الوزن (كيلوجرام)</label>
                <div className="bmi__input-wrap">
                  <span className="bmi__input-icon"><Scale size={18} /></span>
                  <input
                    type="number"
                    className="bmi__input"
                    placeholder="مثال: 80"
                    value={weight}
                    min="20"
                    max="300"
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="bmi__field">
                <label className="bmi__label">الطول (سنتيمتر)</label>
                <div className="bmi__input-wrap">
                  <span className="bmi__input-icon"><Ruler size={18} /></span>
                  <input
                    type="number"
                    className="bmi__input"
                    placeholder="مثال: 170"
                    value={height}
                    min="100"
                    max="250"
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="bmi__submit">
                <Calculator size={18} />
                احسب الآن
              </button>
            </form>
          </div>

          {result && (
            <div className={`bmi__result ${result.cls}`}>
              <div className="bmi__result-number">{result.bmi}</div>
              <div className="bmi__result-status">{result.status}</div>
              <p className="bmi__result-desc">{result.desc}</p>
              <div className="bmi__result-cta" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
                  <FaWhatsapp size={17} />
                  استشر الدكتور
                </a>
                <button onClick={handleReset} className="btn-primary">
                  <RotateCcw size={16} />
                  إعادة الحساب
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bmi__guide">
          <h3 className="bmi__guide-title">دليل مؤشر كتلة الجسم</h3>

          {RANGES.map((r, i) => (
            <div className="bmi__range" key={i}>
              <div className="bmi__range-dot" style={{ background: r.dot }}></div>
              <div className="bmi__range-info">
                <div className="bmi__range-label">{r.label}</div>
                <div className="bmi__range-values">{r.values}</div>
              </div>
            </div>
          ))}

          <div className="bmi__guide-note">
            <Info size={15} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>المؤشر يعطيك فكرة عامة. للحصول على تقييم دقيق ونظام غذائي مخصص، استشر الدكتور مباشرة.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
