import React, { useRef, useState } from 'react';
import './Videos.css';

const VIDEOS = [
  {
    src: '/videos/vid1.mp4',
    title: 'أفضل سناك طبيعي يسد الشهية في الشتا ويحرق دهون 🍏', 
  },
  {
    src: '/videos/vid2.mp4',
    title: 'أخطاء كارثية بتدمر الحرق أثناء الدايت بنقع فيها كلنا ⚠️', 
  },
];

export default function Videos() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // لحفظ الفيديو المفتوح حالياً
  const lightboxVideoRef = useRef(null);

  // فتح الـ Lightbox
  const openLightbox = (index) => {
    setCurrentVideoIndex(index);
  };

  // إغلاق الـ Lightbox
  const closeLightbox = () => {
    setCurrentVideoIndex(null);
  };

  // التنقل للفيديو التالي
  const nextVideo = (e) => {
    e.stopPropagation(); // عشان الشاشة ملوش قفل لما نضغط على السهم
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
  };

  // التنقل للفيديو السابق
  const prevVideo = (e) => {
    e.stopPropagation();
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <section className="videos">
      <div className="videos__header">
        <h2 className="section-title">
          نصائح ومحتوى <span style={{ color: '#c9a84c' }}>الدكتور</span>
        </h2>
        <p className="section-subtitle">
          فيديوهات ونصائح طبية مباشرة من الدكتور محمود علام
        </p>
        <div className="divider"></div>
      </div>

      {/* الجريد الأساسي للفيديوهات */}
      <div className="videos__local-grid">
        {VIDEOS.map((v, i) => (
          <div className="video-card-local" key={i} onClick={() => openLightbox(i)}>
            <div className="video-card-local__thumb">
              {/* فيديو صامت للعرض فقط جوة الكارت وبيملأ المساحة بالكامل */}
              <video src={v.src} className="video-card-local__video" muted playsInline preload="metadata" />
              
              <div className="video-card-local__overlay">
                <div className="video-card-local__play-btn">
                  <span>▶</span>
                </div>
                <span className="video-card-local__tap">اضغط للتكبير والمشاهدة 🎥</span>
              </div>
            </div>

            <div className="video-card-local__info">
              <span className="video-card-local__num">نصيحة {i + 1}</span>
              <p className="video-card-local__title">{v.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🌟 نظام الـ Lightbox (يظهر فقط لما تضغط على كارت) */}
      {currentVideoIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          {/* زر الإغلاق X */}
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>

          {/* سهم اليمين (التالي) */}
          <button className="lightbox-arrow lightbox-arrow--right" onClick={nextVideo}>❯</button>

          {/* كارد الفيديو الكبير */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <video
              key={currentVideoIndex} /* الكي ده مهم عشان يخلي المتصفح يعيد تحميل الفيديو الجديد لما نغير بالأسهم */
              ref={lightboxVideoRef}
              src={VIDEOS[currentVideoIndex].src}
              className="lightbox-video"
              controls
              autoPlay
              playsInline
            />
            <div className="lightbox-caption">
              <h3>{VIDEOS[currentVideoIndex].title}</h3>
            </div>
          </div>

          {/* سهم الشمال (السابق) */}
          <button className="lightbox-arrow lightbox-arrow--left" onClick={prevVideo}>❮</button>
        </div>
      )}
    </section>
  );
}