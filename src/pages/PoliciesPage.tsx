import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { policyPillars } from '../data/policies';
import { siteConfig } from '../data/site';
import { PaperBadge } from '../components/common/PaperBadge';
import { WaveGraphic } from '../components/common/WaveGraphic';
import { ArrowUpRight, Target, Sparkles, Filter } from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelTh: 'ทุกด้าน', labelEn: 'All Policies' },
    { key: 'learning', labelTh: 'การเรียนรู้ & ทักษะ', labelEn: 'Learning & Skills' },
    { key: 'wellbeing', labelTh: 'สุขภาวะ & สวัสดิการ', labelEn: 'Wellbeing' },
    { key: 'environment', labelTh: 'สิ่งแวดล้อม & เกาะสมุย', labelEn: 'Eco-Campus' },
    { key: 'voice', labelTh: 'ความโปร่งใส & สิทธิเสียง', labelEn: 'Open Council' },
    { key: 'community', labelTh: 'กิจกรรม & ชมรม', labelEn: 'Student Life' },
  ];

  const filteredPillars = activeCategory === 'all'
    ? policyPillars
    : policyPillars.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 md:pt-40 pb-20 space-y-20 md:space-y-28">
      {/* ========================================================
          PAGE HEADER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <PaperBadge variant="ocean">CAMPAIGN PLATFORM</PaperBadge>
            <span className="text-xs font-mono text-ink-muted">
              5 เสาหลักเพื่อโรงเรียนเกาะสมุย • เบอร์ {siteConfig.campaignNumber}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-ink font-thai leading-tight">
            นโยบายพรรค <br />
            <span className="text-ocean">ทำได้จริง ไม่ขายฝัน</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted font-thai leading-relaxed">
            แผนงานเพื่อพัฒนาโรงเรียนเกาะสมุยในทุกมิติ โดยเน้นที่ความต้องการแท้จริงของนักเรียน 
            ความโปร่งใสในการบริหาร และความยั่งยืนที่สอดคล้องกับวิถีชีวิตบนเกาะของเรา
          </p>

          <div className="pt-2">
            <WaveGraphic variant="contour" className="text-wave" />
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          CATEGORY TABS / NAVIGATION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-paper-dark scrollbar-none">
          <div className="text-xs font-mono uppercase tracking-widest text-ink-faint pr-2 hidden sm:flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>หมวดหมู่:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium font-thai whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-ocean text-white shadow-xs'
                  : 'bg-paper/70 text-ink-muted hover:text-ink hover:bg-paper'
              }`}
            >
              <span>{cat.labelTh}</span>
              <span className="text-[10px] opacity-75 font-sans ml-1.5 uppercase">
                {cat.labelEn}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================
          POLICIES EDITORIAL LIST
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredPillars.map((pillar) => (
              <motion.article
                key={pillar.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-paper/80 border border-paper-dark rounded-sm p-6 sm:p-10 lg:p-12 shadow-paper-natural relative overflow-hidden"
              >
                {/* Large Background Watermark Number */}
                <div className="absolute top-2 right-4 sm:top-4 sm:right-8 font-mono text-7xl sm:text-9xl font-black text-ink/[0.03] select-none pointer-events-none">
                  {pillar.number}
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-ocean">
                        PILLAR {pillar.number}
                      </span>
                      <PaperBadge variant="wave">{pillar.category}</PaperBadge>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-ink font-thai leading-snug">
                      {pillar.titleTh}
                    </h2>

                    <p className="text-xs sm:text-sm font-sans tracking-wide uppercase text-ink-muted">
                      {pillar.titleEn}
                    </p>

                    <p className="text-sm sm:text-base text-ink-muted font-thai leading-relaxed pt-2">
                      {pillar.shortDescTh}
                    </p>

                    {/* Impact Metric Box */}
                    <div className="pt-4">
                      <div className="bg-white/70 border border-paper-dark rounded-xs p-4 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-ocean">
                          <Target className="w-3.5 h-3.5" />
                          <span>เป้าหมายความสำเร็จ (Metric):</span>
                        </div>
                        <p className="text-xs font-thai text-ink font-medium leading-relaxed">
                          {pillar.impactMetricTh}
                        </p>
                        <p className="text-[11px] font-sans text-ink-faint italic">
                          {pillar.impactMetricEn}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Detailed Action Items */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-ink-muted pb-2 border-b border-paper-dark">
                      Action Items / แนวทางการดำเนินงาน
                    </div>

                    <ul className="space-y-4">
                      {pillar.detailedPointsTh.map((pointTh, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 bg-paper-light/80 p-4 rounded-xs border border-paper-dark/70"
                        >
                          <span className="w-5 h-5 rounded-full bg-ocean/10 text-ocean flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div className="space-y-1">
                            <p className="text-sm sm:text-base text-ink font-thai leading-relaxed">
                              {pointTh}
                            </p>
                            {pillar.detailedPointsEn[idx] && (
                              <p className="text-xs text-ink-faint font-sans leading-relaxed">
                                {pillar.detailedPointsEn[idx]}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================
          FEEDBACK & CO-CREATION SECTION
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#254E68] text-white rounded-sm p-8 sm:p-12 lg:p-16 shadow-paper-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
            <WaveGraphic variant="flow" className="text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <PaperBadge variant="wave" className="text-white border-white/20">
                OPEN SUGGESTION BOX
              </PaperBadge>
              <h2 className="text-3xl sm:text-4xl font-black font-thai">
                นโยบายที่ดี เกิดจากการรับฟังเสียงทุกคน
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-thai leading-relaxed max-w-2xl">
                หากคุณมีข้อเสนอแนะเพิ่มเติม มีปัญหาที่โรงเรียนยังไม่ได้รับการแก้ไข หรือต้องการส่งความคิดเห็นถึงคณะทำงานพรรคบทเรียนใหม่
                สามารถร่วมส่งเสียงของคุณได้ผ่านแบบฟอร์มด้านล่างนี้
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              {siteConfig.feedbackFormUrl && (
                <a
                  href={siteConfig.feedbackFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-ocean font-semibold text-sm rounded-full hover:bg-paper-light transition-colors shadow-paper"
                >
                  <span>เปิด Google Form ส่งข้อเสนอแนะ</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DATA EDIT NOTE
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-paper-light border border-dashed border-paper-dark rounded-sm p-6 text-xs text-ink-muted font-thai space-y-2">
          <div className="flex items-center gap-2 font-bold text-ink">
            <Sparkles className="w-4 h-4 text-ocean" />
            <span>คำแนะนำสำหรับคณะทำงานพรรค (Content Customization)</span>
          </div>
          <p>
            นโยบายและเป้าหมายตัวชี้วัดทั้งหมด สามารถปรับแก้ เพิ่มเติม หรือจัดหมวดหมู่ใหม่ได้ง่ายๆ ที่ไฟล์{' '}
            <code className="bg-paper px-2 py-0.5 rounded-xs font-mono text-ocean">
              src/data/policies.ts
            </code>{' '}
            โดยข้อความทั้งภาษาไทยและอังกฤษจะอัปเดตบนหน้าเว็บโดยอัตโนมัติ
          </p>
        </div>
      </section>
    </div>
  );
};
