import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/site';
import { WaveGraphic } from '../common/WaveGraphic';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-paper/80 border-t border-paper-dark mt-24 md:mt-36 pt-16 pb-12 overflow-hidden">
      {/* Decorative Wave flow at footer top */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 opacity-30 pointer-events-none">
        <WaveGraphic variant="flow" className="text-ocean" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-paper-dark/70">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-ocean" />
              <span className="font-editorial text-2xl font-black tracking-tight text-ink uppercase">
                {siteConfig.campaignName}
              </span>
              <span className="text-xs font-mono font-bold bg-white/70 px-2 py-0.5 rounded-sm border border-paper-dark text-ocean">
                NO. {siteConfig.campaignNumber}
              </span>
            </div>

            <p className="text-sm font-thai text-ink-muted leading-relaxed max-w-sm">
              {siteConfig.taglineTh}
            </p>
            <p className="text-xs font-sans text-ink-faint italic max-w-sm">
              "{siteConfig.taglineEn}"
            </p>

            <div className="pt-2">
              <div className="text-xs font-medium text-ink font-thai">
                {siteConfig.schoolNameTh}
              </div>
              <div className="text-[11px] text-ink-faint uppercase tracking-wider font-sans">
                {siteConfig.schoolNameEn} • Ko Samui, Surat Thani
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-ink-muted font-semibold">
              Index / สารบัญ
            </div>
            <ul className="space-y-2 text-sm font-thai">
              <li>
                <Link to="/" className="text-ink hover:text-ocean transition-colors flex items-center gap-1.5">
                  <span>หน้าหลัก (Overview)</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-ink hover:text-ocean transition-colors flex items-center gap-1.5">
                  <span>ทีมผู้สมัครและสมาชิก (Candidates)</span>
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-ink hover:text-ocean transition-colors flex items-center gap-1.5">
                  <span>นโยบาย 5 เสาหลัก (Key Policies)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Feedback & Socials */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-ink-muted font-semibold">
              Participate / มีส่วนร่วม
            </div>
            <p className="text-xs text-ink-muted font-thai leading-relaxed">
              สภานักเรียนเป็นของทุกคน หากมีข้อเสนอแนะหรือปัญหาที่อยากให้พรรครับฟัง สามารถส่งเสียงของคุณได้โดยตรง
            </p>

            {siteConfig.feedbackFormUrl && (
              <a
                href={siteConfig.feedbackFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-ocean text-white text-xs font-medium rounded-md hover:bg-ocean-deep transition-colors shadow-xs"
              >
                <span>เปิดแบบฟอร์มรับฟังความคิดเห็น</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <div className="pt-2 flex items-center gap-3 text-xs text-ink-muted">
              <span>Follow:</span>
              <span className="font-mono text-ocean">@newlesson.samui</span>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Meta Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint font-sans">
          <div className="flex items-center gap-1.5">
            <span>© {siteConfig.electionYear} NEWLESSON Campaign.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-thai bg-ivory/80 px-3 py-1 rounded-full border border-paper-dark/60">
            <Sparkles className="w-3 h-3 text-ocean" />
            <span>Modern Editorial × Organic Minimalism × Samui Identity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
