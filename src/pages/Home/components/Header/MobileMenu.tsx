import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Menu } from 'lucide-react'
import { useTranslation } from "react-i18next"
import { SECTIONS, useNavigation } from "./navigation"
import { useState } from "react"

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
          w-screen h-screen
          max-w-none
          border-none
          rounded-none
          p-6
          flex flex-col
          bg-(--background)
        "
      >
        <VisuallyHidden>
          <SheetTitle>Mobile navigation</SheetTitle>
          <SheetDescription>
            Main site navigation menu
          </SheetDescription>
        </VisuallyHidden>

        <nav className="flex flex-col gap-6 items-start mt-32">
          {SECTIONS.map(({ id, labelKey }) => {
            const isActive = activeSection === id

            return (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                className={`
                  text-2xl font-semibold transition-colors [&>span]:ml-1 text-[26px]
                  ${isActive
                    ? 'text-(--icon-cl) [&>span]:text-white'
                    : 'text-(--icon-cl) [&>span]:text-(--text-cl)'}
                `}
              >
                #<span>{t(labelKey)}</span>
              </button>
            )
          })}

        </nav>
      </SheetContent>
    </Sheet>
  )
}