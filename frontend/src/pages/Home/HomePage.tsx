import { motion } from "framer-motion"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import { CgArrowLongRightC } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import squareMin from "@/assets/icons/squareMin.svg"
import aboutPhoto from "@/assets/images/aboutInfoProfileSR.png"
import square from "@/assets/icons/square.svg"
import smile from "@/assets/images/smileFrend.jpeg"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle
} from "@/components/ui/item"
import {
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import VericalLines from "@/components/ui/decor/VerticalLines"
import IconsInfo from "@/components/ui/decor/IconsInfo"
import ScrollLine from "@/components/ui/decor/ScrollLine"
import { LiquidGlassCard, LiquidButton } from "@/components/kokonutui/liquid-glass-card"
import { Button } from "@/components/ui/button";

const BlurEffect = ({ position }: { position: string } ) => (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className={`absolute z-10 ${position}`}
        >
            <div className="w-100 h-100 rounded-full bg-(--icon-cl) opacity-20 blur-[100px]" />
        </motion.div>
)

const SquareMin = () => (
    <motion.div
            initial={{ opacity:0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className={`absolute z-10 right-0 top-[46em] bottom-30`}
    >
        <img src={squareMin} alt="square" />
    </motion.div>
)

const projects = [
  {
    id: 1,
    imageUrl: smile,
    imageAlt: "RSS Aggregator",
    stack: ["HTML", "bootstrap", "JS", "REST API", 'Axios', 'yup', ],
    title: "RSS Aggregator",
    description: "Web application for real-time news tracking. Implements automated XML parsing, background data updates, and a clean, ad-free interface for efficient content consumption.",
    linkText: "Check code",
    projectUrl: "https://github.com/immortal-p/frontend-project-11",
    live: "Live",
    liveUrl: "https://frontend-project-11-three-azure.vercel.app/"
  },
  {
    id: 2,
    imageUrl: smile,
    imageAlt: "Weather Dashboard",
    stack: ["React", "Tailwind", "OpenWeather API", "Axios"],
    title: "Weather Dashboard",
    description: "Comprehensive real-time weather tracking with detailed environmental metrics and precise atmospheric data updates.",
    linkText: "Check code",
    projectUrl: "https://github.com/immortal-p/Weather-Dashboar"
  },
  {
    id: 3,
    imageUrl: smile,
    imageAlt: "Real-Time Chat",
    stack: ["React", "Tailwind", "Socket.io", "JWT", "State API"],
    title: "Real-Time Chat Platform",
    description: "A full-featured communication platform with persistent sessions and real-time synchronization. Implements secure JWT-based authentication with token storage and complex state management to maintain chat history and active channels.",
    linkText: "Check code",
    projectUrl: "https://github.com/immortal-p/Weather-Dashboar",
    live: "Live",
    liveUrl: "https://frontend-project-12-ndyp.onrender.com"
  },
]

const InfoProjects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity:0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.2
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <LiquidGlassCard className="rounded-md bg-transparent shadow-none border-none p-1 *:shadow-0 z-20">
                        <div className="aspect-video w-full relative">
                            <img
                                src={project.imageUrl}
                                alt={project.imageAlt}
                                className="w-full h-full object-cover rounded-tr-md rounded-tl-md"    
                            />
                        </div>

                        <div className="p-2 flex border-t border-b border-(--text-cl) text-[16px] text-(--text-cl) *:ml-2 relative">
                            {project.stack.map((sk, index) => (
                                <span key={index} className="border border-(text-cl) px-2 py-1 rounded-sm">{sk}</span>
                            ))}
                        </div>

                        <CardContent className="p-4 space-y-4">
                            <CardTitle className="text-2xl font-medium text-(--white-cl)">{project.title}</CardTitle>
                            <CardDescription className="text-(--text-cl) text-[16px]">{project.description}</CardDescription>
                            {project.live && (
                                <Button
                                    className="border rounded-sm border-(--icon-cl) text-(--white-cl) mr-4 mb-0">
                                        <Link to={project.liveUrl} className="py-2 px-4">Live</Link>
                                </Button> 
                            )}
                            <Button
                                className="border rounded-sm border-(--text-cl) text-(--white-cl)">
                                <Link to={project.projectUrl} className="p-2">{project.linkText}</Link>
                                <IoCodeSlash />
                            </Button>
                        </CardContent>
                    </LiquidGlassCard>
                </motion.div>
            ))}
        </div>
    )
}

const HomePage = () => {
    return (
        <main className="px-4 mx-auto container">
            <section className="mt-20 flex justify-between max-w-full min-w-full flex-wrap relative">
                <motion.div
                    initial={{ opacity:0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="max-w-1/2 z-20"
                >
                    <ItemContent className="mt-22">
                        <ItemTitle className="inline text-[34px] max-w-130 font-bold text-(--white-cl) [&>strong]:text-(--icon-cl)">Bargest is a <strong>web designer</strong> and <strong>front-end developer</strong></ItemTitle>
                        <ItemDescription className="mt-6 text-[16px] max-w-140 text-(--text-cl)">He crafts responsive websites where technologies meet creativity</ItemDescription>
                        <ItemActions className="mt-6">
                            <Link target="_blank" to="https://web.telegram.org/k/#@Spru71k">
                                <LiquidButton className="*:border-(--icon-cl) *:rounded-md text-[16px] text-(--white-cl) transition duration-200 ease-in hover:text-(--white) cursor-pointer">
                                    Contact Me !
                                </LiquidButton>
                            </Link>
                        </ItemActions>
                    </ItemContent>
                </motion.div>

                <motion.div
                    initial={{ opacity:0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="max-w-1/2 w-full z-20 flex justify-center relative"
                >
                    <Item className="flex justify-end p-0 w-[78%]">
                        <img src={aboutPhoto} alt="" className="w-[84%]" />
                        <img src={square} alt="" className="absolute left-[18%] top-12 w-[24%]" />
                        <LiquidGlassCard
                            className="
                                max-w-full w-[89%] right-[-1em] mt-[-1em]
                                flex items-center font-medium text-[16px] border border-(--text-cl) *:border-(--text-cl) p-3
                                before:w-4 before:h-4 before:bg-(--icon-cl) before:block before:mr-2.5"
                            >
                                Currently working on Portfolio
                        </LiquidGlassCard>
                    </Item>
                </motion.div>

                <motion.div
                    initial={{ opacity:0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mt-28 flex flex-col items-center w-full"
                >
                    <div className="flex flex-col items-end max-w-max">

                        <LiquidGlassCard className="p-6 z-10 border-(--text-cl) rounded-br-none *:rounded-br-none cursor-pointer overflow-visible">

                            <ImQuotesLeft className="absolute left-[-0.8em] top-[-2.3em] ease-in transition duration-200 group-hover:fill-(--white-cl) text-(--white-cl)/70 group-hover:text-white/80" size={26} />
                            <ItemContent className="*:text-[22px] *:text-(--white-cl) *:m-auto">
                                <ItemTitle>With great power comes great electricity bill</ItemTitle>
                            </ItemContent>
                            <ImQuotesRight className="absolute right-[-0.8em] bottom-[-2.3em] ease-in transition duration-200 group-hover:fill-(--white-cl) text-(--white-cl)/70 group-hover:text-white/80" size={26} />

                        </LiquidGlassCard>

                        <LiquidGlassCard className="p-2 cursor-pointer border-(--text-cl) rounded-tl-none rounded-tr-none border-t-0 *:rounded-tl-none *:rounded-tr-none">
                            <ItemContent className="*:text-[22px] *:text-(--white-cl) *:m-auto">
                                <ItemTitle>- Dr. Who</ItemTitle>
                            </ItemContent>
                        </LiquidGlassCard>
                    
                    </div>
                </motion.div>

                <BlurEffect position="right-[20%] top-0" />
                <BlurEffect position="left-[2%] bottom-[3%]" />
            </section>

            <section className="mt-27 flex-col justify-center max-w-full min-w-full h-screen relative">
                <Item className="block min-w-full">
                    <ItemContent className="w-full flex flex-row justify-between items-center">
                        <ItemTitle className="*:text-[32px] text-(--icon-cl) *:[&>strong]:text-(--white-cl) max-w-[70%] w-full h-11">
                            <h1>#<strong>projects</strong></h1>
                            <ScrollLine />
                        </ItemTitle>
                        <p className="flex items-center max-w-[10%] w-auto border-none">
                            <Link to="" className="text-[16px] text-(--white-cl) font-medium">View all</Link>
                            <CgArrowLongRightC size={18} color="var(--text-cl)" className="ml-2.5" />
                        </p>
                    </ItemContent>
                </Item>
                <InfoProjects />

                <BlurEffect position="right-[20%] top-[35%]"/>
            </section>
            
            <IconsInfo />
            <VericalLines />
            <SquareMin />
        </main>
    )
}

export default HomePage