import { LiquidGlassCard } from '@/components/kokonutui/liquid-glass-card'
import discord from '@/assets/icons/discord.svg'
import mail from '@/assets/icons/mail.svg'
import telegram from '@/assets/icons/telegram.svg'
import { CardContent } from '@/components/ui/card'
import santaHat from '@/assets/images/santaHat.webp'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { TypingAnimation } from '@/components/ui/typing-animation'
import GlassCopyTooltip from './GlassCopyTooltip'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.5,
                ease: 'easeOut',
            }}
            onAnimationComplete={() => setIsVisible(true)}
            viewport={{ once: true }}
            className="ralative w-full flex justify-end items-center -mt-20 max-sm:mt-0"
        >
            <LiquidGlassCard className="relative max-w-[60%] max-xl:max-w-[80%] [@media(max-width:925px)]:min-w-[94%] max-md:max-w-full w-full p-0  border-none overflow-visible *:hover:bg-none">
                <motion.img
                    src={santaHat}
                    alt="Santa Hat"
                    className="
                        absolute z-30 pointer-events-none
                        -right-14 top-[-18%] [@media(max-width:925px)]:mt-2 [@media(max-width:925px)]:mr-3
                        w-40 max-lg:w-32
                    "
                    initial={{ y: -60, opacity: 0, rotate: 15 }}
                    whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 12,
                        delay: 0.8,
                    }}
                    viewport={{ once: true }}
                />
                
                <CardContent className="p-4 group *:my-4 w-full">
                    <p className="font-bold text-(--white-cl)">
                        {t('contacts.messages')}
                    </p>

                    <div className="flex items-center [&>strong]:text-(--text-cl) [&>strong]:ml-2 *:transition *:duration-300 *:ease-in *:text-(--text-cl) *:group-hover:text-(--white-cl)">
                        <img src={discord} className="h-5.5" />
                        <GlassCopyTooltip text="solid22p">
                            {isVisible && (
                                <TypingAnimation className="cursor-pointer ml-2 leading-none">
                                    solid22p
                                </TypingAnimation>
                            )}
                        </GlassCopyTooltip>
                    </div>

                    <div className="flex items-center [&>strong]:text-(--text-cl) [&>strong]:ml-2 *:transition *:duration-300 *:ease-in *:text-(--text-cl) *:group-hover:text-(--white-cl)">
                        <img src={mail} className="h-5" />
                        <GlassCopyTooltip text="immortalkil4oy@gmail.com">
                            {isVisible && (
                                <TypingAnimation
                                    delay={500}
                                    className="cursor-pointer ml-2 leading-none"
                                >
                                    immortalkil4oy@gmail.com
                                </TypingAnimation>
                            )}
                        </GlassCopyTooltip>
                    </div>
                    
                    <div className="flex items-center [&>strong]:text-(--text-cl) [&>strong]:ml-2 *:transition *:duration-300 *:ease-in *:text-(--text-cl) *:group-hover:text-(--white-cl)">
                        <img src={telegram} className="h-7" />
                        <GlassCopyTooltip text="@Spru71k">
                            {isVisible && (
                                <TypingAnimation
                                    delay={1000}
                                    className="cursor-pointer ml-2 leading-none"
                                >
                                    @Spru71k
                                </TypingAnimation>
                            )}
                        </GlassCopyTooltip>
                    </div>
                </CardContent>
            </LiquidGlassCard>
        </motion.div>
    )
}

export default Contacts
