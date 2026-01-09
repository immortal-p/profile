import { useTranslation } from 'react-i18next'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher/LanguageSwitcher'
import logo from '@/assets/icons/logo.webp'
import SnowParticles from './SnowParticles'
import { SECTIONS, useNavigation } from './navigation'
import { MobileMenu } from './MobileMenu'

const HomeHeader = () => {
    const { t } = useTranslation()
    const { activeSection, scrollToSection } = useNavigation()

    return (
        <header
            className="
                fixed top-0 left-0 w-full py-2 justify-center px-0 xl:px-6
                bg-(--background)/35 backdrop-blur-sm z-50 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),
                inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),
                inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]"
        >
            <SnowParticles />
            <div className="flex justify-between container max-lg:max-w-[95%] max-xl:max-w-[90%] xl:max-w-screen-7xl 2xl:max-w-screen-2xl mx-auto w-full">
                <div className="relative flex items-center gap-2 z-10">
                    <img src={logo} alt="Logo" className="h-8" />
                    <span className="text-(--white-cl) -ml-1.5 font-bold">Profile</span>
                </div>

                <NavigationMenu className="relative z-10 max-w-[44%] max-xl:max-w-[64%] max-[800px]:max-w-[80%] w-full [&>div]:w-full max-md:hidden">
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

                <div className="items-center *:ml-3 md:hidden max-md:flex">
                    <LanguageSwitcher />
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
