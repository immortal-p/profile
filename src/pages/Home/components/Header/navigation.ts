import { useEffect, useState, useCallback } from 'react'

export type SectionId = 'home' | 'works' | 'skills' | 'about' | 'contacts'

export type NavigationSection = {
    id: SectionId
    labelKey: string
}

export const SECTIONS: NavigationSection[] = [
    { id: 'home', labelKey: 'header.home' },
    { id: 'works', labelKey: 'header.works' },
    { id: 'skills', labelKey: 'header.skills' },
    { id: 'about', labelKey: 'header.about' },
    { id: 'contacts', labelKey: 'header.contacts' },
]

export function useNavigation() {
    const [activeSection, setActiveSection] = useState<SectionId | null>(null)

    const scrollToSection = useCallback((id: SectionId) => {
        const element = document.getElementById(id)

        if (element) {
            const HEADER_HEIGHT = 40;
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }, [])

    const HEADER_HEIGHT = 40

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visible[0]) {
                    setActiveSection(visible[0].target.id as SectionId)
                }
            },
            {
                root: null,
                threshold: [0.25, 0.5, 0.75],
                rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
            },
        )

        document
            .querySelectorAll<HTMLElement>('section[id]')
            .forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return { activeSection, scrollToSection }
}
