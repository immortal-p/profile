import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const language = [
    { code: 'en', label: 'En' },
    { code: 'ru', label: 'Ru' },
]

export function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    const currentLanguage = language.find((lng) => lng.code === i18n.language)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-1 focus:outline-none text-(--text-cl) hover:text-(--white) cursor-pointer border"
                >
                    {currentLanguage?.label}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                asChild
                className="w-(--radix-dropdown-menu-trigger-width) min-w-(--radix-dropdown-menu-trigger-width) hover:border-(--white) transition duration-300"
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="bg-popover border border-(--text-cl) rounded-md shadow-md max-md:bg-(--background)"
                >
                    {language.map((lng) => (
                        <DropdownMenuItem
                            key={lng.code}
                            className={`cursor-pointer justify-center text-(--text-cl) hover:text-(--white) max-w-10 max-md:bg-(--background) ${
                                i18n.language === lng.code ? 'bg-accent text-accent-foreground' : ''
                            }`}
                            onClick={() => changeLanguage(lng.code)}
                        >
                            {lng.label}
                        </DropdownMenuItem>
                    ))}
                </motion.div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
