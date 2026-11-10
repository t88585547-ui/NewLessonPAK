export interface SiteConfig {
  campaignName: string;
  campaignNumber: string;
  taglineEn: string;
  taglineTh: string;
  schoolNameEn: string;
  schoolNameTh: string;
  electionYear: string;
  contactEmail: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  feedbackFormUrl?: string;
}

export interface TeamMember {
  id: string;
  roleNumber: number;
  positionTh: string;
  positionEn: string;
  nameTh: string;
  nameEn: string;
  nicknameTh: string;
  gradeTh: string;
  gradeEn: string;
  quoteTh: string;
  quoteEn: string;
  bioTh: string;
  bioEn: string;
  focusArea: string;
  imagePlaceholder: {
    initials: string;
    aspectRatio: string;
    accentColor?: string;
  };
  highlight?: boolean;
}

export interface PolicyPillar {
  id: string;
  number: string; // e.g. "01", "02"
  titleTh: string;
  titleEn: string;
  shortDescTh: string;
  shortDescEn: string;
  detailedPointsTh: string[];
  detailedPointsEn: string[];
  impactMetricTh: string;
  impactMetricEn: string;
  category: 'learning' | 'wellbeing' | 'environment' | 'voice' | 'community';
}

export interface ManifestoStatement {
  headlineTh: string;
  headlineEn: string;
  bodyTh: string[];
  bodyEn: string[];
}
