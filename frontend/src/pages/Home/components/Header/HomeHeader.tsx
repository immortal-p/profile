import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher/LanguageSwitcher'
import logo from '@/assets/icons/logo.svg'
import SnowParticles from './SnowParticles'

type SectionId = 'home' | 'works' | 'skills' | 'about' | 'contacts'

const SECTIONS: { id: SectionId; labelKey: string }[] = [
    { id: 'home', labelKey: 'header.home' },
    { id: 'works', labelKey: 'header.works' },
    { id: 'skills', labelKey: 'header.skills' },
    { id: 'about', labelKey: 'header.about' },
    { id: 'contacts', labelKey: 'header.contacts' },
]

const HomeHeader = () => {
    const { t } = useTranslation()
    const [activeSection, setActiveSection] = useState<SectionId | null>(null)

    const scrollToSection = (id: SectionId) => {
        const el = document.getElementById(id)
        if (!el) return

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id as SectionId)
                    }
                })
            },
            { threshold: 0.6 },
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <header
            className="
        fixed top-0 left-0 w-full flex items-center py-2 px-50 justify-between
        bg-(--background)/35 backdrop-blur-sm z-50 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),
        inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),
        inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]"
        >
            <SnowParticles />
            <div className="relative flex items-center gap-2 z-10">
                <img src={logo} alt="Logo" />
                <span className="text-(--white-cl)">Profile</span>
            </div>

            <NavigationMenu className="relative z-10 max-w-[44%] w-full [&>div]:w-full">
                <NavigationMenuList className="flex w-full justify-between">
                    {SECTIONS.map(({ id, labelKey }) => {
                        const isActive = activeSection === id

                        return (
                            <NavigationMenuItem key={id}>
                                <NavigationMenuLink asChild>
                                    <button
                                        onClick={() => scrollToSection(id)}
                                        className={`flex items-center transition-colors ${
                                            isActive
                                                ? 'pointer-events-none text-(--icon-cl) [&>span]:text-white'
                                                : 'cursor-pointer text-(--icon-cl) [&>span]:text-(--text-cl) [&>span]:transition [&>span]:duration-300 [&>span]:hover:text-white'
                                        }`}
                                    >
                                        #<span>{t(labelKey)}</span>
                                    </button>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}

                    <NavigationMenuItem>
                        <LanguageSwitcher />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}

export default HomeHeader
