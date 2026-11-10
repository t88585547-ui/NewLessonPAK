import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, CheckCircle2 } from 'lucide-react';
import { siteConfig, manifestoData } from '../data/site';
import { teamMembers } from '../data/team';
import { policyPillars } from '../data/policies';
import { PaperBadge } from '../components/common/PaperBadge';
import { EditorialButton } from '../components/common/EditorialButton';
import { FloatingPaper } from '../components/common/FloatingPaper';
import { WaveGraphic } from '../components/common/WaveGraphic';
import { SectionHeader } from '../components/common/SectionHeader';

export const HomePage: React.FC = () => {
  const president = teamMembers.find((m) => m.id === 'candidate-president') || teamMembers[0];
  const spotlightTeam = teamMembers.slice(0, 4);

  return (
    <div className="space-y-24 md:space-y-36">
      {/* ========================================================
          HERO SECTION: Oversized Typography & Asymmetric Floating Paper
         ======================================================== */}
      <section className="relative pt-28 md:pt-40 lg:pt-48 pb-12 overflow-hidden">
        {/* Subtle background ambient wave */}
        <div className="absolute top-1/4 right-0 w-1/2 opacity-20 pointer-events-none -z-10">
          <WaveGraphic variant="flow" className="text-wave" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Hero Typography */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <PaperBadge variant="ocean">
                  หมายเลข {siteConfig.campaignNumber}
                </PaperBadge>
                <PaperBadge variant="paper">
                  {siteConfig.schoolNameTh}
                </PaperBadge>
                <span className="text-xs font-mono tracking-wider text-ink-muted">
                  ELECTION {siteConfig.electionYear}
                </span>
              </div>

              {/* Oversized Editorial Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-ink leading-[0.95] font-editorial uppercase">
                  NEW<br />
                  <span className="font-thai font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-ocean block mt-1">
                    บทเรียนใหม่
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-light text-ink-muted font-thai tracking-tight pt-2">
                  แห่งเกาะสมุย — สานเสียงนักเรียนสู่การลงมือทำจริง
                </p>
              </div>

              <p className="text-base sm:text-lg text-ink-muted font-thai leading-relaxed max-w-xl">
                {siteConfig.taglineTh}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <EditorialButton to="/policies" variant="primary" size="lg" icon="arrow-right">
                  อ่านนโยบาย 5 ด้าน
                </EditorialButton>
                <EditorialButton to="/team" variant="paper" size="lg">
                  พบกับทีมผู้สมัคร
                </EditorialButton>
              </div>

              {/* Island Coordinate & Micro-stamp */}
              <div className="pt-6 border-t border-paper-dark/70 flex items-center gap-6 text-xs font-mono text-ink-faint">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-ocean" />
                  <span>9.5120° N, 100.0136° E</span>
                </div>
                <span>KO SAMUI ISLAND</span>
                <span>STUDENT COUNCIL</span>
              </div>
            </motion.div>

            {/* Right Col: Floating Paper Composition (Tilly style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Backing paper tilt layer */}
              <div className="absolute inset-0 bg-[#E0D7CB] rounded-sm transform rotate-2 translate-x-2 translate-y-3 -z-10 shadow-paper-natural" />

              {/* Main Floating Editorial Card */}
              <FloatingPaper
                elevation="elevated"
                tilt="left"
                padded="lg"
                className="bg-paper-light border-paper-dark space-y-6"
              >
                {/* Header Tag of Card */}
                <div className="flex items-center justify-between border-b border-paper-dark pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted block">
                      OFFICIAL CANDIDATE CARD
                    </span>
                    <span className="text-xs font-semibold text-ocean font-thai">
                      พรรคบทเรียนใหม่ • เบอร์ {siteConfig.campaignNumber}
                    </span>
                  </div>
                  <span className="font-mono text-2xl font-black text-ink">
                    #{siteConfig.campaignNumber}
                  </span>
                </div>

                {/* Candidate Photograph / Placeholder Area */}
                <div className="relative aspect-[4/4.8] bg-[#D8CFBF] rounded-xs overflow-hidden flex flex-col justify-between p-6 border border-paper-dark/80 group">
                  {/* Subtle island contour watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <WaveGraphic variant="contour" className="w-3/4 text-ink" />
                  </div>

                  <div className="flex justify-between items-start z-10">
                    <PaperBadge variant="wave">ผู้สมัครประธานนักเรียน</PaperBadge>
                    <span className="text-[11px] font-mono text-ink-muted bg-white/60 px-2 py-0.5 rounded-xs">
                      {president.gradeTh}
                    </span>
                  </div>

                  {/* Monogram / Placeholder Graphic */}
                  <div className="my-auto text-center z-10 py-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-ocean text-white flex items-center justify-center text-2xl font-bold font-editorial shadow-paper-natural mb-3">
                      NL
                    </div>
                    <div className="text-xs uppercase font-mono tracking-widest text-ink-muted">
                      [ รูปถ่ายผู้สมัครตัวแทน ]
                    </div>
                    <div className="text-[11px] text-ink-faint mt-1 font-thai">
                      (สามารถเปลี่ยนเป็นรูปจริงได้ที่ src/data/team.ts)
                    </div>
                  </div>

                  {/* Candidate Name Footer Overlay */}
                  <div className="z-10 bg-white/80 backdrop-blur-xs p-3 rounded-xs border border-paper-dark">
                    <h3 className="font-bold text-base text-ink font-thai">
                      {president.nameTh}
                    </h3>
                    <p className="text-xs text-ink-muted font-sans">
                      {president.nameEn}
                    </p>
                  </div>
                </div>

                {/* Candidate Quote */}
                <div className="border-l-2 border-ocean pl-4 py-1">
                  <p className="text-xs sm:text-sm font-thai italic text-ink-muted leading-relaxed">
                    {president.quoteTh}
                  </p>
                </div>
              </FloatingPaper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          EDITORIAL STATEMENT / THE MANIFESTO
         ======================================================== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-paper/70 border border-paper-dark rounded-sm p-8 sm:p-12 lg:p-16 shadow-paper-natural">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left Column: Headline & Intent */}
              <div className="lg:col-span-5 space-y-4">
                <PaperBadge variant="ocean">THE MANIFESTO</PaperBadge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-thai leading-snug">
                  {manifestoData.headlineTh}
                </h2>
                <p className="text-xs sm:text-sm font-sans tracking-wide uppercase text-ink-muted pt-2 font-medium">
                  {manifestoData.headlineEn}
                </p>
                <div className="pt-4">
                  <WaveGraphic variant="contour" className="text-wave" />
                </div>
              </div>

              {/* Right Column: Narrative Body */}
              <div className="lg:col-span-7 space-y-6 text-ink-muted font-thai leading-relaxed text-base sm:text-lg">
                {manifestoData.bodyTh.map((paragraph, idx) => (
                  <p key={idx} className="relative pl-6 border-l border-ocean/30">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 flex items-center justify-between border-t border-paper-dark text-xs font-mono text-ink-faint">
                  <span>KO SAMUI STUDENTS COLLECTIVE</span>
                  <span>OPEN FOR EVERY STUDENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5 KEY POLICY PILLARS OVERVIEW
         ======================================================== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            align="split"
            badge="OUR COMMITMENTS"
            titleTh="5 เสาหลักนโยบายเพื่อโรงเรียนเกาะสมุย"
            titleEn="Five Pillars of Real Campus Action"
            descriptionTh="ทุกนโยบายผ่านการคิดจากชีวิตจริงของพวกเรา เพื่อสร้างสภาพแวดล้อมที่เอื้อต่อการเติบโตและการเรียนรู้อย่างมีความสุข"
            descriptionEn="Ground-level solutions developed to enhance daily learning, student wellbeing, and island campus spirit."
          />

          {/* Asymmetric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {policyPillars.map((pillar, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <div
                  key={pillar.id}
                  className={`group relative bg-paper/60 hover:bg-paper border border-paper-dark rounded-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-paper-lift flex flex-col justify-between ${
                    isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Index Number & Badge */}
                    <div className="flex items-center justify-between border-b border-paper-dark/60 pb-3">
                      <span className="font-mono text-2xl font-bold text-ocean">
                        {pillar.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-ink-faint bg-white/50 px-2 py-0.5 rounded-xs">
                        {pillar.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-ink font-thai group-hover:text-ocean transition-colors">
                      {pillar.titleTh}
                    </h3>

                    <p className="text-xs font-sans text-ink-muted uppercase tracking-wider">
                      {pillar.titleEn}
                    </p>

                    <p className="text-sm text-ink-muted font-thai leading-relaxed line-clamp-3">
                      {pillar.shortDescTh}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-paper-dark/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-ocean font-thai flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ocean" />
                      <span>{pillar.detailedPointsTh.length} แผนปฏิบัติการ</span>
                    </span>
                    <EditorialButton to="/policies" variant="text-arrow" icon="arrow-right">
                      ดูรายละเอียด
                    </EditorialButton>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Call to action for suggestions */}
            <div className="bg-ocean text-white rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-paper-elevated">
              <div className="space-y-4">
                <PaperBadge variant="wave" className="text-white border-white/20">
                  YOUR IDEA MATTERS
                </PaperBadge>
                <h3 className="text-2xl font-bold font-thai">
                  มีนโยบายที่อยากให้เราผลักดัน?
                </h3>
                <p className="text-sm font-thai text-white/80 leading-relaxed">
                  พรรคบทเรียนใหม่พร้อมรับฟังทุกเสียงสะท้อนจากเพื่อน พี่ และน้องทุกคน ส่งความคิดเห็นของคุณผ่านแบบฟอร์มได้เสมอ
                </p>
              </div>

              <div className="pt-8">
                {siteConfig.feedbackFormUrl && (
                  <a
                    href={siteConfig.feedbackFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-ocean font-semibold text-xs rounded-full hover:bg-paper-light transition-colors"
                  >
                    <span>เปิดแบบฟอร์มส่งเสียงของคุณ</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TEAM SPOTLIGHT: The Candidates
         ======================================================== */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            align="split"
            badge="THE CANDIDATES"
            titleTh="ทีมผู้สมัครพรรคบทเรียนใหม่"
            titleEn="Dedicated Student Leaders"
            descriptionTh="ตัวแทนนักเรียนจากหลากหลายระดับชั้นและสายการเรียน พร้อมทำงานด้วยความจริงใจ โปร่งใส และเปิดกว้าง"
            descriptionEn="United by an island commitment to serve, listen, and transform our school community."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightTeam.map((member) => (
              <div
                key={member.id}
                className="group bg-paper/60 border border-paper-dark hover:border-ink/30 rounded-sm p-5 transition-all duration-300 hover:shadow-paper-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Portrait Placeholder with editorial framing */}
                  <div className="relative aspect-[3/3.8] bg-[#DDD4C4] rounded-xs overflow-hidden flex flex-col justify-between p-4 border border-paper-dark">
                    <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted">
                      <span>NO. 0{member.roleNumber}</span>
                      <span className="bg-white/60 px-1.5 py-0.5 rounded-xs">
                        {member.gradeTh}
                      </span>
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-14 h-14 mx-auto rounded-full bg-paper text-ocean font-mono font-bold text-lg flex items-center justify-center border border-paper-dark shadow-xs mb-2">
                        {member.imagePlaceholder.initials}
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-ink-faint">
                        [ รูปผู้สมัคร ]
                      </span>
                    </div>

                    <div className="text-center">
                      <span className="text-[11px] font-thai font-medium text-ocean bg-white/70 px-2 py-0.5 rounded-full inline-block">
                        {member.positionTh}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-ink font-thai group-hover:text-ocean transition-colors">
                      {member.nameTh}
                    </h3>
                    <p className="text-xs text-ink-muted font-sans">
                      {member.nameEn}
                    </p>
                  </div>

                  <p className="text-xs text-ink-muted font-thai italic line-clamp-2">
                    {member.quoteTh}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-paper-dark/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-ink-faint">
                    {member.nicknameTh}
                  </span>
                  <EditorialButton to="/team" variant="text-arrow" icon="arrow-right">
                    ประวัติ
                  </EditorialButton>
                </div>
              </div>
            ))}
          </div>

          {/* View All Team Members CTA */}
          <div className="text-center pt-4">
            <EditorialButton to="/team" variant="paper" size="lg" icon="arrow-right">
              ดูสมาชิกทีมผู้สมัครทั้งหมด ({teamMembers.length} คน)
            </EditorialButton>
          </div>
        </div>
      </section>

      {/* ========================================================
          CLOSING INVITATION BANNER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#254E68] text-white rounded-sm p-8 sm:p-14 overflow-hidden shadow-paper-elevated">
          {/* Subtle wave contours in background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <WaveGraphic variant="flow" className="w-full text-white" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <PaperBadge variant="wave" className="text-white border-white/30">
              JOIN THE LESSON
            </PaperBadge>

            <h2 className="text-3xl sm:text-5xl font-black font-thai leading-tight">
              ร่วมเขียนบทเรียนใหม่ <br />
              ไปด้วยกันกับพวกเรา
            </h2>

            <p className="text-base sm:text-lg font-thai text-white/80 leading-relaxed">
              วันที่กำหนดชะตากำลังจะมาถึง ทุกคะแนนเสียงของคุณมีความหมาย เข้าคูหากาเบอร์{' '}
              <strong className="underline underline-offset-4 font-mono font-bold text-white">
                {siteConfig.campaignNumber}
              </strong>{' '}
              พรรคบทเรียนใหม่
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <EditorialButton to="/policies" variant="paper" size="md">
                ศึกษานโยบายฉบับเต็ม
              </EditorialButton>
              <EditorialButton to="/team" variant="outline" size="md" className="border-white/40 text-white hover:bg-white/10">
                ทำความรู้จักผู้สมัคร
              </EditorialButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
