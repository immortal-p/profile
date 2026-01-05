<div align="center">

# Profile

A high-performance personal portfolio built with Vite, React, and Tailwind CSS. <br>
Focused on speed, clean typography, and subtle motion.
</div>
<br>

## Overview 

This is a lightweight, single-page portfolio designed with a "less is more" philosophy. It showcases my technical stack, projects, and contact information through a streamlined interface.

- Fast by default: Powered by Vite for near-instant HMR.

- Minimal UI: Dark-themed, content-focused design using Tailwind CSS.

- Smooth Motion: Declarative animations with Framer Motion.

---

## Tech Stack

- Bundler	Vite
- Library	React 18
- Styling	Tailwind CSS
- Motion	Framer Motion
- Icons	Lucide React / Simple Icons

---

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
│   └─ ui        # Shadcn components and custom components in the decor folder
│
├─ lib/
│   └─ utils
│
└─ pages/   # Configuration (Project data, Social links)
    ├─ 404/ NotFoundPages
    └─ Home/
        ├─ components # Header, Contacts, GlassCopyTooltip, InfoProjects, SkillsGrid
        └─ HomePage
```