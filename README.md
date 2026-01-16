<div align="center">

# 👻 immortal-p/profile

A high-performance personal portfolio built with **Vite**, **React**, and **Tailwind CSS**.  
Focused on speed, clean typography, and subtle motion.

Live demo: https://profile-kappa-ten.vercel.app

</div>

## ✨ Features

- Built with **Vite** for near-instant HMR and ultra-fast performance
- **React 18** component-based architecture
- Responsive layouts with **Tailwind CSS**
- Smooth declarative animations using **Framer Motion**
- Clean, minimal UI focused on content

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Bundler | Vite |
| Framework | React 18 |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Type System | TypeScript |
| Deployment | Vercel |

<br>

## Getting Started

Setup

1. Clone the repository

```bash
git clone https://github.com/immortal-p/profile.git
cd profile
```

2.Install dependencies

```bash
npm install
```

3.Start the dev sever

```bash
npm run dev
```

---

### Projects Structure

```text
src/
├─ app
│   ├─ providers # i18n, theme-provider
│   ├─ App       # Main entry point and layout
│   └─ main      # Vite initialization
├─ assets/       # Static images and icons
├─ components/   # Modular UI elements (Header, Projects)
│   ├─ kokonutui # Liquid-glass-card
│   ├─ layout    # LanguageSwitcher
│   └─ ui/
│      ├─ decor/ # Custom components (Glow, IconsInfo, ScrollLine, SideElement...)
│      ├─ navigation-menu
│      ├─ sheet
│      ├─ terminal
│      └─ typing-animation
├─ lib/
│   └─ utils
│
├─ pages/   # Configuration (project data, Social links)
│   ├─ 404/ NotFoundPages
│   └─ Home/
│       ├─ components # Header, Contacts, GlassCopyTooltip, InfoProjects, SkillsGrid ...
│       └─ HomePage
└─ shared/
   ├─ config/
   │  └─ breakpoints
   └─ hooks/
      ├─ useMediaQuery
      └─ useResponsiveVisibility
```
