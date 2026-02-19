import { useEffect, useState, useCallback, useRef } from 'react'

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
    const [activeSection, setActiveSection] = useState<SectionId | null>('home')

    const isScrollingByClick = useRef(false)

    const scrollToSection = useCallback((id: SectionId) => {
        setActiveSection(id)
        isScrollingByClick.current = true

        const element = document.getElementById(id)
        if (element) {
            const offsetPosition =
                element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }

        setTimeout(() => {
            isScrollingByClick.current = false
        }, 800)
    }, [])

    const HEADER_HEIGHT: number = 0
    const handleScroll = () => {
        if (isScrollingByClick.current) return
        const sections = document.querySelectorAll('section[id]')
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10

        if (isAtBottom) {
            const last = sections[sections.length - 1]
            setActiveSection(last.id as SectionId)
            return
        }
        let current: SectionId = 'home'

        sections.forEach((section) => {
            const top = section.getBoundingClientRect().top
            if (top <= HEADER_HEIGHT) {
                current = section.id as SectionId
            }
        })

        setActiveSection(current)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return { activeSection, scrollToSection }
}
