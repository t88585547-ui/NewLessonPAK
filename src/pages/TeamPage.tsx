import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/site';
import { teamMembers } from '../data/team';
import { PaperBadge } from '../components/common/PaperBadge';
import { FloatingPaper } from '../components/common/FloatingPaper';
import { WaveGraphic } from '../components/common/WaveGraphic';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'exec' | 'operations'>('all');

  const president = teamMembers.find((m) => m.id === 'candidate-president') || teamMembers[0];
  const otherMembers = teamMembers.filter((m) => m.id !== 'candidate-president');

  const filteredMembers = otherMembers.filter((member) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'exec') return member.roleNumber <= 3;
    if (selectedCategory === 'operations') return member.roleNumber > 3;
    return true;
  });

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
            <PaperBadge variant="ocean">CANDIDATES ROSTER</PaperBadge>
            <span className="text-xs font-mono text-ink-muted">
              เบอร์ {siteConfig.campaignNumber} • {siteConfig.schoolNameTh}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-ink font-thai leading-tight">
            ทีมผู้สมัคร <br />
            <span className="text-ocean">พรรคบทเรียนใหม่</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted font-thai leading-relaxed">
            การรวมตัวของตัวแทนนักเรียนจากหลากหลายระดับชั้น ที่อาสาเข้ามาทำงานเพื่อส่วนรวม 
            ด้วยความมุ่งมั่น โปร่งใส และพร้อมรับฟังทุกเสียงของเพื่อนนักเรียนโรงเรียนเกาะสมุย
          </p>

          <div className="pt-2">
            <WaveGraphic variant="contour" className="text-wave" />
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          PRESIDENT SPOTLIGHT (Editorial Spread)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-paper/80 border border-paper-dark rounded-sm p-6 sm:p-10 lg:p-14 shadow-paper-natural">
          {/* Subtle paper decorative stamp */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-right hidden sm:block">
            <span className="text-[10px] font-mono tracking-widest uppercase text-ink-faint block">
              COUNCIL PRESIDENT CANDIDATE
            </span>
            <span className="font-mono text-3xl font-black text-ocean">
              NO. 0{president.roleNumber}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Col: Tactile Portrait Frame */}
            <div className="lg:col-span-5">
              <FloatingPaper
                elevation="elevated"
                tilt="left"
                padded="none"
                className="overflow-hidden bg-[#DDD5C5] border-paper-dark"
              >
                <div className="aspect-[3/3.8] flex flex-col justify-between p-6 relative">
                  {/* Top tag */}
                  <div className="flex items-center justify-between">
                    <PaperBadge variant="ocean">เบอร์ {siteConfig.campaignNumber}</PaperBadge>
                    <span className="text-xs font-mono bg-white/70 px-2 py-0.5 rounded-xs text-ink-muted">
                      {president.gradeTh}
                    </span>
                  </div>

                  {/* Placeholder Avatar */}
                  <div className="my-auto text-center py-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-ocean text-white font-mono font-bold text-3xl flex items-center justify-center shadow-paper-natural mb-3">
                      {president.imagePlaceholder.initials}
                    </div>
                    <span className="text-xs uppercase font-mono tracking-widest text-ink-muted block">
                      [ รูปถ่ายตัวแทนประธานนักเรียน ]
                    </span>
                    <span className="text-[11px] font-thai text-ink-faint mt-1 block">
                      ใส่รูปจริงได้ที่ src/data/team.ts
                    </span>
                  </div>

                  {/* Identification bottom bar */}
                  <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-xs border border-paper-dark">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-ocean font-semibold">
                      {president.positionTh}
                    </div>
                    <div className="text-lg font-bold text-ink font-thai">
                      {president.nameTh}
                    </div>
                    <div className="text-xs text-ink-muted font-sans">
                      {president.nameEn}
                    </div>
                  </div>
                </div>
              </FloatingPaper>
            </div>

            {/* Right Col: Editorial Biography & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <PaperBadge variant="wave">{president.positionEn}</PaperBadge>
                <h2 className="text-2xl sm:text-4xl font-bold text-ink font-thai">
                  {president.nameTh}
                </h2>
                <p className="text-sm font-sans tracking-wide text-ink-muted">
                  {president.nameEn} • {president.gradeEn}
                </p>
              </div>

              {/* Big Quote */}
              <blockquote className="border-l-3 border-ocean pl-5 py-1 text-base sm:text-lg font-thai italic text-ink-muted leading-relaxed">
                {president.quoteTh}
              </blockquote>

              {/* Bio & Focus */}
              <div className="space-y-4 text-ink-muted font-thai leading-relaxed text-sm sm:text-base">
                <p>{president.bioTh}</p>
                <p className="text-xs sm:text-sm font-sans text-ink-faint italic font-normal">
                  {president.bioEn}
                </p>
              </div>

              {/* Core Responsibility Pill */}
              <div className="pt-4 border-t border-paper-dark/70 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-ocean bg-wave/20 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>บทบาทหลัก: {president.focusArea}</span>
                </div>
                <div className="text-xs font-mono text-ink-faint">
                  สถานะ: พร้อมปฏิบัติหน้าที่ 2568
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          COUNCIL MEMBERS GRID
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-paper-dark">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink font-thai">
              คณะกรรมการและฝ่ายงานสภานักเรียน
            </h2>
            <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-ink-muted mt-1">
              Party Executive & Operational Council
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-thai transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-ocean text-white'
                  : 'bg-paper text-ink hover:bg-paper-dark'
              }`}
            >
              ทั้งหมด ({otherMembers.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('exec')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-thai transition-colors ${
                selectedCategory === 'exec'
                  ? 'bg-ocean text-white'
                  : 'bg-paper text-ink hover:bg-paper-dark'
              }`}
            >
              ฝ่ายบริหาร
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('operations')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-thai transition-colors ${
                selectedCategory === 'operations'
                  ? 'bg-ocean text-white'
                  : 'bg-paper text-ink hover:bg-paper-dark'
              }`}
            >
              ฝ่ายงานและสวัสดิการ
            </button>
          </div>
        </div>

        {/* Members Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-paper/70 border border-paper-dark hover:border-ink/30 rounded-sm p-6 sm:p-7 transition-all duration-300 hover:shadow-paper-lift flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Visual Editorial Frame */}
                <div className="relative aspect-[3/3.2] bg-[#DCD3C3] rounded-xs overflow-hidden flex flex-col justify-between p-5 border border-paper-dark">
                  <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted">
                    <span className="font-bold text-ocean">NO. 0{member.roleNumber}</span>
                    <span className="bg-white/70 px-2 py-0.5 rounded-xs">
                      {member.gradeTh}
                    </span>
                  </div>

                  {/* Initials Placeholder */}
                  <div className="my-auto text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-paper text-ocean font-mono font-bold text-xl flex items-center justify-center border border-paper-dark shadow-xs mb-2">
                      {member.imagePlaceholder.initials}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-ink-faint">
                      [ ภาพสมาชิกตัวแทน ]
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-[11px] font-thai font-medium text-ocean bg-white/80 px-2.5 py-0.5 rounded-full inline-block">
                      {member.positionTh}
                    </span>
                  </div>
                </div>

                {/* Member Identity & Details */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-ink-faint">
                    {member.positionEn}
                  </div>
                  <h3 className="text-lg font-bold text-ink font-thai group-hover:text-ocean transition-colors">
                    {member.nameTh}
                  </h3>
                  <p className="text-xs text-ink-muted font-sans">
                    {member.nameEn} • {member.gradeEn}
                  </p>
                </div>

                {/* Quote */}
                <p className="text-xs font-thai italic text-ink-muted border-l border-ocean/40 pl-3 leading-relaxed">
                  {member.quoteTh}
                </p>

                {/* Bio Placeholder */}
                <p className="text-xs text-ink-faint font-thai leading-relaxed">
                  {member.bioTh}
                </p>
              </div>

              {/* Bottom Focus Area */}
              <div className="pt-4 mt-6 border-t border-paper-dark/60">
                <span className="text-[11px] font-mono text-ocean block leading-tight">
                  Focus: {member.focusArea}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          EDITABLE CONTENT NOTICE FOR CAMPAIGN COMMITTEE
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-paper-light border border-dashed border-paper-dark rounded-sm p-6 text-xs text-ink-muted font-thai space-y-2">
          <div className="flex items-center gap-2 font-bold text-ink">
            <Sparkles className="w-4 h-4 text-ocean" />
            <span>คำแนะนำสำหรับคณะทำงานพรรคบทเรียนใหม่ (Content Customization)</span>
          </div>
          <p>
            ข้อมูลรายชื่อ ตำแหน่ง คำพูด และประวัติทั้งหมดบนหน้านี้ สามารถแก้ไขหรือเพิ่มเติมรูปภาพจริงได้โดยตรงที่ไฟล์{' '}
            <code className="bg-paper px-2 py-0.5 rounded-xs font-mono text-ocean">
              src/data/team.ts
            </code>{' '}
            โดยไม่จำเป็นต้องแก้ไขโครงสร้างโค้ด UI
          </p>
        </div>
      </section>
    </div>
  );
};
