import { NavLink, useLocation } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import logo from '@/assets/icons/logo.svg'
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next"

const Header = () => {
    const location = useLocation()
    const { t } = useTranslation()

    const menuItems = [
        { path: "/", label: t('header.home')},
        { path: "/works", label: t('header.works')},
        { path: "/about", label: t('header.about')},
        { path: "/contacts", label: t('header.contacts')},
    ]

    return (
        <div className="flex items-center justify-between px-45 w-full min-h-10 mt-5">
            
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" />
                <span className="text-(--white-cl)">Profile</span>
            </div>

            <NavigationMenu className="max-w-1/3 w-full [&>div]:w-full">
                <NavigationMenuList className="flex w-full justify-between">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path
                        return (
                            <NavigationMenuItem key={item.label}>
                                <NavigationMenuLink asChild active={isActive}>
                                    <NavLink
                                        to={item.path}
                                        onClick={(e) => location.pathname === item.path && e.preventDefault()}
                                        className={`flex items-center transition-colors ${
                                            isActive
                                            ? "pointer-events-none text-(--icon-cl) [&>span]:text-(--white-cl)"
                                            : "text-(--icon-cl) [&>span]:text-(--text-cl) [&>span]:transition [&>span]:duration-300 [&>span]:hover:text-(--white-cl)"
                                        }`}
                                    >
                                        #<span>{item.label}</span>
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}

                    <NavigationMenuItem>
                        <LanguageSwitcher />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Header