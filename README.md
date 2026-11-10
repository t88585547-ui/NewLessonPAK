# NEWLESSON — พรรคบทเรียนใหม่
> **Student Council Campaign Website — Ko Samui School, Thailand**  
> *Modern Editorial × Organic Minimalism × Samui Identity*

---

## 🌊 Overview

**NEWLESSON (พรรคบทเรียนใหม่)** is a premium, minimal, editorial-inspired campaign website for the Ko Samui School Student Council election. 

Drawing visual and typographic inspiration from modern high-craft editorial design (such as Tilly and independent publications), the platform blends organic minimalism with the oceanic spirit of Ko Samui.

---

## 🎨 Design System & Palette

- **Warm Ivory (Background)**: `#F3EEE7`
- **Paper**: `#E8E1D7`
- **Ink**: `#191715`
- **Ocean**: `#254E68`
- **Wave**: `#83AFC0`
- **Typography**: 
  - English: **Manrope**
  - Thai: **IBM Plex Sans Thai**

---

## 🗂️ Project Structure & Content Customization

All campaign content is decoupled from UI components into editable TypeScript data files in `src/data/`:

| Data File | Content Covered |
| :--- | :--- |
| [`src/data/site.ts`](file:///d:/Documents/NewLessonPAK/src/data/site.ts) | Campaign name, ballot number, school name, election year, Google Form URL, social links, and the official manifesto. |
| [`src/data/team.ts`](file:///d:/Documents/NewLessonPAK/src/data/team.ts) | Candidate list: President candidate, Vice Presidents, Secretary, Welfare, Eco-Campus, PR, and Academic leads with names, roles, quotes, and bios. |
| [`src/data/policies.ts`](file:///d:/Documents/NewLessonPAK/src/data/policies.ts) | The 5 policy pillars with action items, categories, and measurable impact metrics. |

---

## 🧭 Routes

- **`/`** — **Homepage**: Oversized typography hero, ballot stamp `#01`, floating candidate card, manifesto spread, 5-pillar overview, candidate spotlight, and call to action.
- **`/team`** — **Party Members**: Presidential candidate spotlight spread, category filters, and editorial roster of executive and operational council members.
- **`/policies`** — **Party Policies**: Comprehensive breakdown of the 5 policy pillars with category filtering, action items, target impact metrics, and feedback form link.

---

## 🚀 Running the Project

```bash
# 1. Start development server
npm run dev

# 2. Build for production (TypeScript check & Vite bundling)
npm run build

# 3. Preview production build locally
npm run preview
```
