import { SiteConfig, ManifestoStatement } from '../types';

export const siteConfig: SiteConfig = {
  campaignName: 'NEWLESSON',
  campaignNumber: '01', // หมายเลขผู้สมัคร (ตัวอย่าง placeholder)
  taglineEn: 'Every lesson shapes tomorrow, every voice creates the island.',
  taglineTh: 'ทุกบทเรียนสร้างวันพรุ่งนี้ ทุกเสียงร่วมสรรค์สร้างสมุยของเรา',
  schoolNameEn: 'Ko Samui School',
  schoolNameTh: 'โรงเรียนเกาะสมุย',
  electionYear: '2568 / 2025',
  contactEmail: 'contact@newlesson-samui.example',
  socialLinks: {
    instagram: 'https://instagram.com/newlesson.samui (Placeholder)',
    facebook: 'https://facebook.com/newlesson.samui (Placeholder)',
    tiktok: 'https://tiktok.com/@newlesson.samui (Placeholder)',
  },
  feedbackFormUrl: 'https://forms.google.com/placeholder-feedback', // Editable Google Form link
};

export const manifestoData: ManifestoStatement = {
  headlineTh: 'เปิดหน้าบทเรียนใหม่ สานเสียงนักเรียนสู่การลงมือทำจริง',
  headlineEn: 'Opening a new chapter where student voices transform into tangible action.',
  bodyTh: [
    'พรรคบทเรียนใหม่ (NEWLESSON) ก่อตั้งขึ้นจากความตั้งใจของกลุ่มนักเรียนโรงเรียนเกาะสมุย ที่เชื่อว่าโรงเรียนไม่ใช่แค่สถานที่ท่องจำตำรา แต่คือพื้นที่ชีวิต สังคม และบ้านหลังที่สองของพวกเราทุกคนบนเกาะแห่งนี้',
    'เราไม่ได้มาเพื่อสัญญาในสิ่งที่เป็นไปไม่ได้ แต่เราพร้อมรับฟังปัญหาจริงในรั้วโรงเรียน — ตั้งแต่เรื่องพื้นที่การเรียนรู้ สวัสดิการ สิทธิเสียงของเพื่อนนักเรียน จนถึงการเชื่อมโยงวิถีชีวิตเกาะสมุยเข้ากับทักษะสู่อนาคต',
    'ร่วมเปิดบทเรียนบทใหม่ไปด้วยกัน เพราะอนาคตของโรงเรียนเกาะสมุย คือเรื่องของพวกเราทุกคน',
  ],
  bodyEn: [
    'NEWLESSON was formed by students of Ko Samui School who believe our school is more than just classrooms—it is our shared living space, community, and second home on this island.',
    'We do not offer unattainable promises. Instead, we bring active listening, transparent representation, and pragmatic action—from student spaces and everyday wellbeing to island-rooted future skills.',
    'Let us turn the page together and author the next lesson for Ko Samui School.',
  ],
};
