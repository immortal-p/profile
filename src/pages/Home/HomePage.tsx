import { motion } from 'framer-motion'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { CgArrowLongRightC } from 'react-icons/cg'
import squareMin from '@/assets/icons/squareMin.svg'
import square from '@/assets/icons/squreMall.svg'
import startImg from '@/assets/images/img_start.png'
import imgAboutMe from '@/assets/images/img_aboutMeN.png'
import geomFrom from '@/assets/icons/geom-form.svg'
import matrix from '@/assets/icons/matrix.svg'
import matrixLong from '@/assets/icons/matrix-long.svg'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import { Link } from 'react-router-dom'
import HomeHeader from './components/Header/HomeHeader'
import VericalLines from '@/components/ui/decor/VerticalLines'
import IconsInfo from '@/components/ui/decor/IconsInfo'
import ScrollLine from '@/components/ui/decor/ScrollLine'
import Glow from '@/components/ui/decor/Glow'
import InfoProjects from './components/InfoProjects'
import SkillsGrid from './components/SkillsGrid'
import SideElement from '@/components/ui/decor/SideElement'
import Contacts from './components/Contacts'
import { LiquidGlassCard, LiquidButton } from '@/components/kokonutui/liquid-glass-card'
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal'
import { useTranslation, Trans } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation()

    return (
        <main className="w-full relative">
            <HomeHeader />

            <section className="relative w-full pt-32" id="home">
                <SideElement side="right" top="86%" right="3%">
                    <img src={squareMin} alt="square" className="h-22" />
                </SideElement>

                <Glow right="28%" top="0" />
                <Glow left="10%" bottom="5%" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-wrap justify-between w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                            className="max-w-1/2 z-20"
                        >
                            <ItemContent className="mt-22">
                                <ItemTitle className="inline text-[34px] max-w-130 font-bold text-(--white-cl) [&>strong]:text-(--icon-cl)">
                                    <Trans i18nKey={'hero.title'}>
                                        Bargest is a <strong>web designer</strong> and{' '}
                                        <strong>front-end developer</strong>
                                    </Trans>
                                </ItemTitle>
                                <ItemDescription className="mt-6 text-[16px] max-w-140 text-(--text-cl)">
                                    {t('hero.description')}
                                </ItemDescription>
                                <ItemActions className="mt-6">
                                    <Link target="_blank" to="https://web.telegram.org/k/#@Spru71k">
                                        <LiquidButton className="*:border-(--icon-cl) *:rounded-md text-[16px] text-(--white-cl) transition duration-200 ease-in hover:text-(--white) cursor-pointer">
                                            {t('hero.button')}
                                        </LiquidButton>
                                    </Link>
                                </ItemActions>
                            </ItemContent>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                            className="max-w-1/2 w-full z-20 flex justify-center relative"
                        >
                            <Item className="flex justify-end p-0 w-[78%]">
                                <img src={startImg} alt="" className="w-[84%]" />
                                <img
                                    src={geomFrom}
                                    alt=""
                                    className="absolute left-[18%] top-12 w-[24%]"
                                />
                                <LiquidGlassCard
                                    className="
                                        max-w-full w-[89%] right-[-1em] mt-[-1em]
                                        flex items-center font-medium text-[16px] border border-(--text-cl) *:border-(--text-cl) p-3
                                        before:w-4 before:h-4 before:bg-(--icon-cl) before:block before:mr-2.5"
                                >
                                    <Trans i18nKey={'hero.status'}>
                                        Currently working on <strong>Portfolio</strong>
                                    </Trans>
                                </LiquidGlassCard>
                            </Item>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            className="mt-28 flex flex-col items-center w-full"
                        >
                            <div className="flex flex-col items-end max-w-max">
                                <LiquidGlassCard className="p-6 z-10 border-(--text-cl) rounded-br-none *:rounded-br-none cursor-pointer overflow-visible">
                                    <ImQuotesLeft
                                        className="absolute left-[-0.8em] top-[-2.3em] ease-in transition duration-200 group-hover:fill-(--white-cl) text-(--white-cl)/70 group-hover:text-white/80"
                                        size={26}
                                    />
                                    <ItemContent className="*:text-[22px] *:text-(--white-cl) *:m-auto">
                                        <ItemTitle>{t('hero.quote')}</ItemTitle>
                                    </ItemContent>
                                    <ImQuotesRight
                                        className="absolute right-[-0.8em] bottom-[-2.3em] ease-in transition duration-200 group-hover:fill-(--white-cl) text-(--white-cl)/70 group-hover:text-white/80"
                                        size={26}
                                    />
                                </LiquidGlassCard>

                                <LiquidGlassCard className="p-2 cursor-pointer border-(--text-cl) rounded-tl-none rounded-tr-none border-t-0 *:rounded-tl-none *:rounded-tr-none">
                                    <ItemContent className="*:text-[20px] *:text-(--white-cl) px-4">
                                        <ItemTitle>{t('hero.author')}</ItemTitle>
                                    </ItemContent>
                                </LiquidGlassCard>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative w-full mt-32" id="works">
                <SideElement side="left" top="20%" left="2.3%">
                    <img src={matrix} alt="square" className="h-16" />
                </SideElement>

                <SideElement side="right" top="50%" right="0">
                    <img src={square} alt="" className="w-34" />
                </SideElement>

                <Glow right="22%" top="20%" size="560px" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-cl justify-center min-w-full relative min-h-screen">
                        <Item className="block min-w-full">
                            <ItemContent className="w-full flex flex-row justify-between items-center">
                                <ItemTitle className="text-[32px] text-(--icon-cl) [&>strong]:text-(--white-cl) max-w-[70%] w-full h-11">
                                    <Trans i18nKey={'projects.title'}>
                                        #<strong>projects</strong>
                                    </Trans>
                                    <ScrollLine width="90%" />
                                </ItemTitle>

                                <p className="flex items-center max-w-[10%] w-auto border-none">
                                    <Link
                                        to="404"
                                        className="text-[16px] text-(--white-cl) font-medium"
                                    >
                                        {t('projects.viewAll')}
                                    </Link>
                                    <CgArrowLongRightC
                                        size={18}
                                        color="var(--text-cl)"
                                        className="ml-2.5"
                                    />
                                </p>
                            </ItemContent>

                            <InfoProjects />
                        </Item>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-20 z-10" id="skills">
                <Item className="block min-w-full">
                    <ItemTitle
                        className="
                                text-[32px] text-(--icon-cl) [&>strong]:text-(--white-cl)
                                [&>h1]:whitespace-nowrap w-full max-w-[70%] h-11"
                    >
                        <Trans i18nKey={'skills.title'}>
                            #<strong>skills</strong>
                        </Trans>
                        <ScrollLine width="45%" />
                    </ItemTitle>

                    <ItemContent className="mt-11 flex flex-row justify-between min-w-full w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            viewport={{ once: true, margin: '50px' }}
                            className="w-full max-w-[40%]"
                        >
                            <Terminal
                                className="
                                        border-0 bg-(--background)/40 backdrop-blur-md *:border-0
                                        shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_0px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_12px_0px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                            >
                                <TypingAnimation className="text-(--white-cl)">
                                    &gt; system_check --list-skills
                                </TypingAnimation>
                                <AnimatedSpan className="text-green-600">
                                    [scanning] Languages... [TypeScript, JavaScript, HTML/CSS]
                                </AnimatedSpan>
                                <AnimatedSpan className="text-green-600">
                                    [scanning] Frameworks... [React, Vite]
                                </AnimatedSpan>
                                <AnimatedSpan className="text-green-600">
                                    [scanning] Styles... [Tailwind, SASS, Shadcn/UI]
                                </AnimatedSpan>
                                <AnimatedSpan className="text-green-600">
                                    [scanning] Tools... [Git, Linux, Figma, Fedora]
                                </AnimatedSpan>
                                <AnimatedSpan className="text-green-600">
                                    [status] All systems operational.
                                </AnimatedSpan>
                                <AnimatedSpan className="text-red-700">
                                    [warning] {t('skills.warning')}
                                </AnimatedSpan>
                                <AnimatedSpan className="text-red-700">
                                    [critical] {t('skills.critical')}
                                </AnimatedSpan>
                                <TypingAnimation
                                    delay={500}
                                    className="text-muted-foreground text-(--white-cl)"
                                >
                                    &gt; execute: make_coffee --double-espresso
                                </TypingAnimation>
                                <TypingAnimation
                                    delay={1500}
                                    className="text-muted-foreground text-(--white-cl)"
                                >
                                    [process] Brewing... ████████░░ 80%
                                </TypingAnimation>
                                <TypingAnimation delay={2500} className="text-(--white-cl)">
                                    &gt; status: online and motivated
                                </TypingAnimation>
                            </Terminal>
                        </motion.div>

                        <div className="max-w-[58%]">
                            <SkillsGrid />
                        </div>
                    </ItemContent>
                </Item>
            </section>

            <section className="relative w-full" id="about">
                <Glow top="15%" left="4%" size="650px" />

                <SideElement top="36%" left="-2%" side="left">
                    <img src={square} alt="" className="w-40" />
                </SideElement>

                <img src={matrix} alt="" className="w-20 absolute top-[50%] right-0" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-wrap justify-between w-full py-20">
                        <Item className="block min-w-full">
                            <ItemTitle
                                className="
                                    text-[32px] [&>strong]:text-(--white-cl) text-(--icon-cl)
                                    *:whitespace-nowrap w-full min-w-full h-11"
                            >
                                <Trans i18nKey={'about.title'}>
                                    #<strong>aboute-me</strong>
                                </Trans>
                                <ScrollLine width="50%" />
                            </ItemTitle>
                            <ItemContent className="flex flex-row justify-between w-full items-center min-h-[50vh]">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="max-w-[40%] [&>p]:text-(--text-cl) [&>p]:text-[18px] [&>p]:leading-7 [&>h4]:text-xl [&>h4]:text-(--white-cl)"
                                >
                                    <h4>{t('about.greeting')}</h4>
                                    <p className="mt-8">{t('about.paragraphs.first')}</p>
                                    <p className="mt-8">{t('about.paragraphs.second')}</p>
                                    <Link to="/aboutMe" className="inline-block">
                                        <LiquidButton className="mt-9 cursor-pointer *:rounded-sm *:flex *:items-center *:text-(--white-cl)">
                                            <p>{t('about.button')}</p>
                                            <CgArrowLongRightC className="ml-2" />
                                        </LiquidButton>
                                    </Link>
                                </motion.div>

                                <div className="flex flex-col justify-center items-center relative w-1/2 shrink-0">
                                    <img src={imgAboutMe} alt="" className="w-[80%]" />
                                    <hr className="w-[50%] text-(--icon-cl) absolute right-24 bottom-0" />
                                    <img
                                        src={matrix}
                                        alt=""
                                        className="absolute w-20 top-9 left-40"
                                    />
                                    <img
                                        src={matrixLong}
                                        alt=""
                                        className="absolute top-[55%] right-28"
                                    />
                                </div>
                            </ItemContent>
                        </Item>
                    </div>
                </div>
            </section>

            <section className="mt-32 relative w-full" id="contacts">
                <SideElement left="1%" top="40%" side="left">
                    <img src={matrix} alt="" className="w-23" />
                </SideElement>

                <Glow bottom="-25%" right="-7%" size="600px" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-wrap justify-between w-full py-25">
                        <Item className="block min-w-full">
                            <ItemTitle
                                className="
                                        text-[32px] [&>strong]:text-(--white-cl) text-(--icon-cl)
                                        w-full min-w-full h-11
                                    "
                            >
                                <Trans i18nKey={'contacts.title'}>
                                    #<strong>contacts</strong>
                                </Trans>
                                <ScrollLine width="40%" />
                            </ItemTitle>
                            <ItemContent className="flex flex-row justify-between w-full min-h-[40vh]">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: 'easeOut',
                                    }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    className="max-w-[40%] [&>p]:text-(--text-cl) [&>p]:text-[18px] [&>p]:leading-7 [&>h4]:text-xl [&>h4]:text-(--white-cl) *:mt-14"
                                >
                                    <p className="whitespace-pre-line">{t('contacts.text')}</p>
                                </motion.div>
                                <div className="max-w-[50%] w-full flex items-center justify-end mr-20">
                                    <Contacts />
                                </div>
                            </ItemContent>
                        </Item>
                    </div>
                </div>
            </section>

            <IconsInfo />
            <VericalLines />
        </main>
    )
}

export default HomePage
