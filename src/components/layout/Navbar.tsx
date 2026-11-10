import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', labelTh: 'หน้าหลัก', labelEn: 'Overview' },
    { to: '/team', labelTh: 'ทีมผู้สมัคร', labelEn: 'Members' },
    { to: '/policies', labelTh: 'นโยบายพรรค', labelEn: 'Policies' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#F3EEE7]/90 backdrop-blur-md border-b border-paper-dark/60 py-3 shadow-xs'
          : 'bg-transparent py-5 md:py-7'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Editorial Label */}
          <Link
            to="/"
            className="group flex items-baseline gap-3 focus:outline-hidden"
            aria-label="NEWLESSON Homepage"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-ocean group-hover:bg-wave transition-colors duration-300" />
              <span className="font-editorial text-xl sm:text-2xl font-extrabold tracking-tighter text-ink uppercase">
                {siteConfig.campaignName}
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs font-thai tracking-wider text-ink-muted border-l border-ink/20 pl-3 py-0.5">
              {siteConfig.schoolNameTh}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-paper/70 border border-paper-dark/50 rounded-full px-4 py-1.5 backdrop-blur-xs">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex flex-col items-center',
                    isActive
                      ? 'bg-ocean text-white shadow-xs'
                      : 'text-ink-muted hover:text-ink hover:bg-paper-light'
                  )
                }
              >
                <span>{item.labelTh}</span>
                <span className="text-[9px] opacity-75 font-sans uppercase tracking-wider">
                  {item.labelEn}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Campaign Number & Proposal Link */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-ink-muted">
                ELECTION 2568
              </span>
              <span className="text-xs font-mono font-medium text-ocean">
                NO. {siteConfig.campaignNumber}
              </span>
            </div>

            {siteConfig.feedbackFormUrl && (
              <a
                href={siteConfig.feedbackFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-ink text-[#F3EEE7] rounded-full hover:bg-ocean transition-all duration-200 shadow-xs"
              >
                <span>ส่งข้อเสนอแนะ</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="text-right mr-1">
              <span className="text-xs font-mono font-bold text-ocean">
                NO.{siteConfig.campaignNumber}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-ink bg-paper border border-paper-dark/60 hover:bg-paper-dark transition-colors focus:outline-hidden"
              aria-expanded={isOpen}
              aria-label="สลับเมนูนำทาง"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#F3EEE7] border-b border-paper-dark/80 px-6 py-8 shadow-paper-elevated animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="text-xs tracking-widest uppercase font-mono text-ink-muted pb-2 border-b border-paper-dark">
              Navigation / สารบัญเว็บไซต์
            </div>
            <div className="space-y-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between p-3 rounded-lg text-base font-medium font-thai transition-colors',
                      isActive
                        ? 'bg-ocean text-white'
                        : 'text-ink hover:bg-paper'
                    )
                  }
                >
                  <span>{item.labelTh}</span>
                  <span className="text-xs font-sans opacity-70 uppercase tracking-widest">
                    {item.labelEn}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-paper-dark space-y-3">
              <p className="text-xs text-ink-muted font-thai">
                {siteConfig.schoolNameTh} — หมายเลข {siteConfig.campaignNumber}
              </p>
              {siteConfig.feedbackFormUrl && (
                <a
                  href={siteConfig.feedbackFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-ocean text-white rounded-md text-sm font-medium font-thai hover:bg-ocean-deep transition-colors"
                >
                  <span>ส่งข้อเสนอแนะถึงพรรค (Google Form)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
