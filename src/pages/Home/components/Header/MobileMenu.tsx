import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from '@/components/ui/sheet'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SECTIONS, useNavigation } from './navigation'
import { useState } from 'react'
import logo from '@/assets/icons/logo.webp'
import Glow from '@/components/ui/decor/Glow'
import { Link } from 'react-router-dom'

export function MobileMenu() {
    const { t } = useTranslation()
    const { activeSection, scrollToSection } = useNavigation()
    const [open, setOpen] = useState(false)

    const handleNavigate = (id: (typeof SECTIONS)[number]['id']) => {
        scrollToSection(id)
        setOpen(false)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="p-2 md:hidden">
                    <Menu />
                </button>
            </SheetTrigger>

            <SheetContent
                side="top"
                className="
          [&>button>svg]:w-8
          [&>button>svg]:h-8
          [&>button>svg]:text-(--text-cl)
          min-h-svh
          max-w-none
          border-none
          rounded-none
          p-6
          flex flex-col
          justify-between
          bg-(--background)
        "
            >
                <Glow right="-10%" bottom="-10%" size="300px" />
                <VisuallyHidden>
                    <SheetTitle>Mobile navigation</SheetTitle>
                    <SheetDescription>Main site navigation menu</SheetDescription>
                </VisuallyHidden>

                <div className="relative flex items-center gap-2 z-10 max-w-[20%]">
                    <img src={logo} alt="Logo" className="h-8" />
                    <span className="text-(--white-cl) -ml-1.5 font-bold">Profile</span>
                </div>

                <nav className="flex flex-col gap-6 items-start">
                    {SECTIONS.map(({ id, labelKey }) => {
                        const isActive = activeSection === id

                        return (
                            <button
                                key={id}
                                onClick={() => handleNavigate(id)}
                                className={`
                  text-2xl font-semibold transition-colors [&>span]:ml-1 text-[26px] max-sm:text-[24px]
                  ${
                      isActive
                          ? 'text-(--icon-cl) [&>span]:text-white'
                          : 'text-(--icon-cl) [&>span]:text-(--text-cl)'
                  }
                `}
                            >
                                #<span>{t(labelKey)}</span>
                            </button>
                        )
                    })}
                </nav>

                <div className="mx-auto items-center flex justify-between *:mx-4">
                    <Link to={'https://github.com/immortal-p'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 21 20"
                            className="*:transition *:duration-300 hover:*:fill-(--white-cl)"
                        >
                            <path
                                fill="#8d9094"
                                d="M10.5 0C4.699 0 0 4.588 0 10.253c0 4.537 3.006 8.369 7.18 9.727.524.09.721-.218.721-.487 0-.243-.013-1.05-.013-1.91-2.638.475-3.32-.627-3.53-1.204-.119-.295-.63-1.205-1.077-1.448-.367-.192-.892-.667-.013-.68.827-.012 1.418.744 1.615 1.052.944 1.55 2.454 1.114 3.058.845.092-.666.367-1.115.669-1.371-2.336-.256-4.777-1.14-4.777-5.062 0-1.115.406-2.038 1.076-2.756-.105-.256-.473-1.307.105-2.717 0 0 .88-.269 2.887 1.051a10 10 0 0 1 2.625-.346c.893 0 1.785.115 2.625.346 2.008-1.333 2.888-1.05 2.888-1.05.577 1.409.21 2.46.105 2.716.67.718 1.076 1.628 1.076 2.756 0 3.934-2.454 4.806-4.79 5.062.38.32.708.936.708 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.197.589.722.486a10.5 10.5 0 0 0 5.179-3.74A10.1 10.1 0 0 0 21 10.253C21 4.588 16.301 0 10.5 0"
                            />
                        </svg>
                    </Link>
                    <Link to={'https://web.telegram.org/k/#@Spru71k'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="31"
                            fill="none"
                            viewBox="0 0 21 21"
                            className="*:transition *:duration-300 hover:*:fill-(--white-cl)"
                        >
                            <path
                                fill="#8b8f95"
                                d="M15.714.9c2.738 1.633 4.44 3.892 5.286 6.975.328 3.642.115 6.804-2.215 9.782-1.856 1.988-4.168 3.209-6.885 3.453-3.521.08-6.423-.331-9.1-2.832C.372 15.579-.19 12.72-.104 9.184c.156-2.752 1.342-5.05 3.384-6.887C6.805-.353 11.671-1.041 15.714.9m-3.36 6.429-.608.238q-.637.25-1.272.502-.973.384-1.949.762l-1.236.487-1.137.448c-.926.353-.926.353-1.558 1.062 1.145.705 1.946.814 3.281.656 1.082-.515 2.072-1.153 3.076-1.804l.827-.522q1.005-.635 2.003-1.283c-.946 1.169-1.862 2.227-3.014 3.2-.66.56-1.295 1.11-1.908 1.722-.054 1.012-.054 1.012 0 1.969l.985-.657c1.477.08 2.432.793 3.61 1.641 1.05-2.902 2.09-6.072 1.968-9.187-1.19 0-1.959.332-3.067.766"
                            />
                        </svg>
                    </Link>
                    <Link
                        to="https://www.figma.com/design/U6eeslozu1QcWR3mkaz1vT/Portfolio?node-id=1-2&t=oXrTUeHiERRq7X8j-0"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 14 20"
                            className="*:transition *:duration-300 hover:*:fill-(--white-cl)"
                        >
                            <path
                                fill="#8d9094"
                                d="M7 10c0-.884.369-1.732 1.025-2.357a3.6 3.6 0 0 1 2.475-.976 3.6 3.6 0 0 1 2.475.976A3.26 3.26 0 0 1 14 10c0 .884-.369 1.732-1.025 2.357a3.6 3.6 0 0 1-2.475.976 3.6 3.6 0 0 1-2.475-.976A3.26 3.26 0 0 1 7 10m-7 6.667c0-.884.369-1.732 1.025-2.357a3.6 3.6 0 0 1 2.475-.977H7v3.334c0 .884-.369 1.732-1.025 2.357A3.6 3.6 0 0 1 3.5 20a3.6 3.6 0 0 1-2.475-.976A3.26 3.26 0 0 1 0 16.667M7 0v6.667h3.5a3.6 3.6 0 0 0 2.475-.977A3.26 3.26 0 0 0 14 3.333c0-.884-.369-1.732-1.025-2.357A3.6 3.6 0 0 0 10.5 0zM0 3.333c0 .884.369 1.732 1.025 2.357a3.6 3.6 0 0 0 2.475.977H7V0H3.5a3.6 3.6 0 0 0-2.475.976A3.26 3.26 0 0 0 0 3.333M0 10c0 .884.369 1.732 1.025 2.357a3.6 3.6 0 0 0 2.475.976H7V6.667H3.5a3.6 3.6 0 0 0-2.475.976A3.26 3.26 0 0 0 0 10"
                            />
                        </svg>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}
