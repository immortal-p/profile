import { motion } from 'framer-motion'
import quotesLeft from '@/assets/icons/quotesLeft.svg'
import quotesRight from '@/assets/icons/quotesRight.svg'
import arrowLongRight from '@/assets/icons/arrowLongRight.png'
import squareMin from '@/assets/icons/squareMin.svg'
import square from '@/assets/icons/squreMall.svg'
import startImg from '@/assets/images/img_start.webp'
import imgAboutMe from '@/assets/images/img_aboutMe.webp'
import geomFrom from '@/assets/icons/geom-form.svg'
import matrix from '@/assets/icons/matrix.svg'
import matrixLong from '@/assets/icons/matrix-long.svg'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import HomeHeader from './components/Header/HomeHeader'
import VericalLines from '@/components/ui/decor/VerticalLines'
import IconsInfo from '@/components/ui/decor/IconsInfo'
import ScrollLine from '@/components/ui/decor/ScrollLine'
import Glow from '@/components/ui/decor/Glow'
import SideElement from '@/components/ui/decor/SideElement'
import { LiquidGlassCard, LiquidButton } from '@/components/kokonutui/liquid-glass-card'
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/ui/terminal'
import { useTranslation, Trans } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation()
    const InfoProjects = lazy(() => import('./components/InfoProjects'))
    const SkillsGrid = lazy(() => import('./components/SkillsGrid'))
    const Contacts = lazy(() => import('./components/Contacts'))

    return (
        <main className="w-full relative max-sm:[&>section]:min-h-svh">
            <HomeHeader />

            <section
                className="relative w-full pt-32 max-lg:pt-0 max-lg:mt-24 max-md:mt-16 max-sm:mt-12 max-sm:flex max-sm:items-center"
                id="home"
            >
                <SideElement side="right" top="86%" right="3%" hideBelow="sm">
                    <img src={squareMin} alt="square" className="h-22 max-md:mr-8 max-md:h-25 max-md:-mt-12" />
                </SideElement>

                <Glow right="28%" top="0" />
                <Glow left="10%" bottom="5%" hideBelow="lg" />

                <div className="container mx-auto relative z-10 px-0 xl:p-4 max-lg:max-w-[95%] max-md:px-4 [@media(max-width:420px)]:px-0">
                    <div className="flex flex-wrap justify-between w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                            className="max-w-[45%] z-20 ml-6 max-lg:max-w-1/2 max-md:max-w-full max-md:ml-0"
                        >
                            <ItemContent className="mt-22 max-sm:mt-2 [@media(max-width:380px)]:mt-12">
                                <ItemTitle className="
                                    inline font-bold text-[34px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px]
                                    max-w-130 max-md:w-full text-(--white-cl) [&>strong]:text-(--icon-cl)
                                    max-lg:leading-tight max-md:leading-normal"
                                >
                                    <Trans i18nKey={'hero.title'}>
                                        Bargest is a <strong>web designer</strong> and{' '}
                                        <strong>front-end developer</strong>
                                    </Trans>
                                </ItemTitle>
                                <ItemDescription className="mt-6 text-[16px] max-w-140 max-md:max-w-[80%] max-sm:max-w-full text-(--text-cl) max-sm:text-[15px] max-[840px]:mt-2">
                                    {t('hero.description')}
                                </ItemDescription>
                                <ItemActions className="mt-6 max-[840px]:mt-2 max-md:hidden">
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
                            className="max-w-1/2 w-full z-20 flex justify-center relative max-lg:max-w-[45%] max-md:max-w-full max-md:mt-20 [@media(max-width:420px)]:mt-12"
                        >
                            <Item className="flex justify-start p-0 w-[78%] max-lg:w-full max-sm:min-h-70.5">
                                <img
                                    src={startImg}
                                    alt=""
                                    className="w-[84%] max-xl:w-full max-md:w-[70%] z-20 max-md:scale-x-[-1] max-sm:w-[80%] [@media(max-width:420px)]:w-[90%]"
                                />
                                <img
                                    src={geomFrom}
                                    alt=""
                                    className="absolute left-[18%] top-12 w-[24%] max-lg:top-10 max-md:left-[-5%]"
                                />
                                <LiquidGlassCard
                                    className="
                                        max-w-full w-[89%] max-xl:w-full max-md:w-[80%] max-sm:w-[90%] right-[-1em] max-md:right-0 mt-[-1em]
                                        flex items-center font-medium text-[16px] max-sm:text-[15px] border border-(--text-cl) *:border-(--text-cl) p-3
                                        before:w-4 before:h-4 before:bg-(--icon-cl) before:block before:mr-2.5"
                                >
                                    <Trans i18nKey={'hero.status'}>
                                        Currently working on <strong>Portfolio</strong>
                                    </Trans>
                                </LiquidGlassCard>
                            </Item>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            className="mt-28 flex flex-col items-center w-full max-md:mt-20 [@media(max-width:420px)]:mt-12"
                        >
                            <div className="flex flex-col items-end max-w-max">
                                <LiquidGlassCard className="p-6 z-10 border-(--text-cl) rounded-br-none *:rounded-br-none overflow-visible max-lg:p-4">
                                    <img
                                        src={quotesLeft}
                                        sizes="26"
                                        alt="quotes left"
                                        className="
                                            absolute left-[-0.8em] top-[-2.3em] ease-in transition duration-200 group-hover:fill-(--white-cl)
                                            text-(--white-cl)/70 group-hover:text-white/80 max-lg:top-[-2em] max-sm:hidden"
                                    />
                                    <ItemContent className="*:text-[22px] *:text-(--white-cl) *:m-auto max-lg:*:text-[20px] max-md:*:text-[18px] max-sm:*:text-[16px]">
                                        <ItemTitle>{t('hero.quote')}</ItemTitle>
                                    </ItemContent>
                                    <img
                                        src={quotesRight}
                                        sizes="26"
                                        alt="quotes right"
                                        className="
                                            absolute right-[-0.8em] bottom-[-2.3em] ease-in transition duration-200 group-hover:fill-(--white-cl)
                                            text-(--white-cl)/70 group-hover:text-white/80 max-lg:bottom-[-2em] max-sm:hidden"
                                    />
                                </LiquidGlassCard>

                                <LiquidGlassCard className="p-2 cursor-pointer border-(--text-cl) rounded-tl-none rounded-tr-none border-t-0 *:rounded-tl-none *:rounded-tr-none">
                                    <ItemContent className="*:text-[20px] *:text-(--white-cl) px-4 max-lg:*:text-[18px] max-md:*:text-[16px] max-sm:*:text-[15px]">
                                        <ItemTitle>{t('hero.author')}</ItemTitle>
                                    </ItemContent>
                                </LiquidGlassCard>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section
                className="relative w-full mt-32 max-lg:mt-24 max-md:mt-16 max-sm:mt-12 max-xl:min-h-125"
                id="works"
            >
                <SideElement side="left" top="20%" left="3.3%">
                    <img
                        src={matrix}
                        alt="square"
                        className="h-16 max-xl:ml-2 max-lg:ml-4 max-lg:mt-10 max-lg:h-22"
                    />
                </SideElement>

                <SideElement side="right" top="50%" right="0">
                    <img src={square} alt="" className="w-34 max-md:mt-30" />
                </SideElement>

                <Glow right="22%" top="20%" size="560px" />

                <div className="container mx-auto px-4 relative z-10 max-lg:max-w-[95%] max-sm:p-0">
                    <div className="flex flex-cl justify-center min-w-full relative">
                        <Item className="block min-w-full">
                            <ItemContent className="w-full flex flex-row justify-between items-center">
                                <ItemTitle className="text-[32px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px] text-(--icon-cl) [&>strong]:text-(--white-cl) max-w-[70%] max-sm:max-w-[50%] w-full h-11">
                                    <Trans i18nKey={'projects.title'}>
                                        #<strong>projects</strong>
                                    </Trans>
                                    <ScrollLine width="90%" />
                                </ItemTitle>

                                <p className="flex items-center max-w-[30%] max-sm:max-w-[45%] w-auto border-none">
                                    <Link
                                        to="*"
                                        className="text-[16px] sm:text-[15px] text-(--white-cl) font-medium"
                                    >
                                        {t('projects.viewAll')}
                                    </Link>
                                    <img src={arrowLongRight} className="ml-1 h-3" alt="" />
                                </p>
                            </ItemContent>

                            <Suspense fallback={null}>
                                <InfoProjects />
                            </Suspense>
                        </Item>
                    </div>
                </div>
            </section>

            <section
                className="container mx-auto px-4 py-20 z-10 mt-26 max-lg:max-w-[95%] max-lg:mt-4 max-lg:py-14 max-md:mt-2 max-md:py-6 max-sm:px-0"
                id="skills"
            >
                <Item className="block min-w-full">
                    <ItemTitle
                        className="
                            text-[32px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px] text-(--icon-cl) [&>strong]:text-(--white-cl)
                            [&>h1]:whitespace-nowrap w-full max-w-[70%] h-11"
                    >
                        <Trans i18nKey={'skills.title'}>
                            #<strong>skills</strong>
                        </Trans>

                        <ScrollLine width="45%" />
                    </ItemTitle>

                    <ItemContent className="mt-12 flex flex-row justify-between min-w-full w-full [@media(max-width:925px)]:flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            viewport={{ once: true, margin: '50px' }}
                            className="w-full max-w-[40%] max-xl:max-w-[48%] [@media(max-width:925px)]:max-w-full"
                        >
                            <Terminal
                                className="
                                    border-0 bg-(--background)/40 backdrop-blur-md *:border-0
                                    shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_0px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_12px_0px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]
                                    max-xl:min-h-[80%] [@media(max-width:925px)]:max-w-full"
                            >
                                <TypingAnimation className="text-(--white-cl)">
                                    &gt; system_check --list-skills
                                </TypingAnimation>

                                <AnimatedSpan className="text-green-600">
                                    [scanning] Languages... [TypeScript, JavaScript]
                                </AnimatedSpan>

                                <AnimatedSpan className="text-green-600">
                                    [scanning] Frameworks... [React, Vite]
                                </AnimatedSpan>

                                <AnimatedSpan className="text-green-600">
                                    [scanning] Styles... [Tailwind, SASS, Shadcn/UI]
                                </AnimatedSpan>

                                <AnimatedSpan className="text-green-600">
                                    [scanning] Other... [HTML, Pug, REST, Jest]
                                </AnimatedSpan>

                                <AnimatedSpan className="text-green-600">
                                    [scanning] Tools... [Git, Linux, Figma, Fedora]
                                </AnimatedSpan>

                                <AnimatedSpan className="text-green-600">
                                    [scanning] UI... [Shadcn, Mantine, MagicUI]
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

                        <div className="max-w-[58%] max-xl:max-w-[50%] [@media(max-width:925px)]:max-w-full [@media(max-width:925px)]:mt-4">
                            <Suspense fallback={null}>
                                <SkillsGrid />
                            </Suspense>
                        </div>
                    </ItemContent>
                </Item>
            </section>

            <section className="relative w-full mt-20 max-md:flex max-md:items-center max-sm:mt-12 max-sm:min-h-[60svh]!" id="about">
                <Glow top="15%" left="4%" size="650px" />

                <SideElement top="40%" left="-1%" side="left" hideBelow='xl'>
                    <img src={square} alt="" className="w-30 ml-2" />
                </SideElement>

                <img src={matrix} alt="" className="w-20 absolute top-[50%] right-0 max-sm:hidden" />

                <div className="container mx-auto px-4 relative z-10 max-lg:max-w-[95%] max-lg:px-0">
                    <div className="flex flex-wrap justify-between w-full py-20 max-lg:py-14 max-md:py-6">
                        <Item className="block min-w-full">
                            <ItemTitle
                                className="
                                    text-[32px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px]
                                    [&>strong]:text-(--white-cl) text-(--icon-cl) *:whitespace-nowrap w-full min-w-full h-11"
                            >
                                <Trans i18nKey={'about.title'}>
                                    #<strong>aboute-me</strong>
                                </Trans>
                                <ScrollLine width="50%" />
                            </ItemTitle>
                            <ItemContent className="mt-12 [@media(max-width:925px)]:mt-0 max-md:pt-12 flex flex-row justify-between w-full items-center min-h-[50vh] z-20 relative">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="
                                        max-w-[40%] max-xl:max-w-1/2 [@media(max-width:925px)]:min-w-[80%] max-md:max-w-[90%] [@media(max-width:420px)]:max-w-full
                                        [&>p]:text-(--text-cl) [&>p]:text-[18px] [&>p]:leading-7
                                        [&>h4]:text-xl [&>h4]:text-(--white-cl)"
                                >
                                    <h4>{t('about.greeting')}</h4>
                                    <p className="mt-8 max-xl:mt-4">{t('about.paragraphs.first')}</p>
                                    <p className="mt-8 max-xl:mt-4">{t('about.paragraphs.second')}</p>
                                    <Link to="*" className="inline-block">
                                        <LiquidButton className="mt-9 max-lg:mt-4 cursor-pointer *:rounded-sm *:flex *:items-center *:text-(--white-cl)">
                                            <p>{t('about.button')}</p>
                                            <img src={arrowLongRight} className="ml-1 h-2" alt="" />
                                        </LiquidButton>
                                    </Link>
                                </motion.div>

                                <div className="flex flex-col justify-center items-center relative w-1/2 shrink-0 [@media(max-width:925px)]:hidden">
                                    <img src={imgAboutMe} alt="" className="w-[80%] max-2xl:w-full max-xl:scale-120 max-xl:-mt-10" />
                                    <hr className="w-[50%] text-(--icon-cl) absolute right-24 bottom-0 max-xl:-bottom-10 max-xl:w-[70%] max-xl:right-0" />
                                    <img
                                        src={matrix}
                                        alt=""
                                        className="absolute w-20 top-9 left-40 max-xl:hidden"
                                    />
                                    <img
                                        src={matrixLong}
                                        alt=""
                                        className="absolute top-[55%] right-28 max-xl:right-8"
                                    />
                                </div>
                            </ItemContent>
                        </Item>
                    </div>
                </div>
            </section>

            <section className="mt-32 max-lg:mt-24 max-md:mt-16 max-sm:mt-12 relative w-full max-sm:min-h-[60svh]!" id="contacts">
                <SideElement left="1%" top="60%" side="left">
                    <img src={matrix} alt="" className="w-23" />
                </SideElement>

                <Glow bottom="-25%" right="-7%" size="600px" />

                <div className="container mx-auto px-4 relative z-10 max-lg:max-w-[95%]">
                    <div className="flex flex-wrap justify-between w-full py-25 max-lg:py-14 max-md:py-6">
                        <Item className="block min-w-full max-sm:px-0">
                            <ItemTitle
                                className="
                                        text-[32px] max-lg:text-[30px] max-md:text-[26px] max-sm:text-[22px]
                                        [&>strong]:text-(--white-cl) text-(--icon-cl) w-full min-w-full h-11
                                    "
                            >
                                <Trans i18nKey={'contacts.title'}>
                                    #<strong>contacts</strong>
                                </Trans>
                                <ScrollLine width="40%" />
                            </ItemTitle>
                            <ItemContent className="flex flex-row justify-between w-full min-h-[40vh] max-md:flex-col">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: 'easeOut',
                                    }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    className="
                                        max-w-[40%] max-xl:max-w-1/2 max-md:max-w-full [&>p]:text-(--text-cl) [&>p]:text-[18px]
                                        [&>p]:leading-7 [&>h4]:text-xl [&>h4]:text-(--white-cl) *:mt-14"
                                >
                                    <p className="whitespace-pre-line">{t('contacts.text')}</p>
                                </motion.div>
                                <div className="max-w-[50%] max-md:max-w-full w-full flex items-center justify-end mr-20 max-xl:mr-0 max-md:min-h-50 max-sm:mt-12">
                                    <Suspense fallback={null}>
                                        <Contacts />
                                    </Suspense>
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
