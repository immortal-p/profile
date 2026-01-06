import { motion } from 'framer-motion'
import code from '@/assets/icons/code.svg'
import infostormImg from '@/assets/images/infostormImg.png'
import nekoDash from '@/assets/images/weatherDashboardImg.webp'
import nekoChat from '@/assets/images/nekoChatImg.webp'
import { CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { LiquidGlassCard } from '@/components/kokonutui/liquid-glass-card'
import { useTranslation } from 'react-i18next' 

interface ProjectsList {
    id: number
    imageUrl: string
    imageAlt: string
    stack: string[]
    title: string
    description: string
    linkText: string
    projectUrl: string
    live?: string
    liveUrl?: string
}

const useProjectsData = () => {
    const { t } = useTranslation()

    const PROJECTS: ProjectsList[] = [
        {
            id: 1,
            imageUrl: infostormImg,
            imageAlt: 'infostorm',
            stack: ['HTML', 'bootstrap', 'JS', 'REST API', 'Axios', 'yup'],
            title: 'Infostorm',
            description: t('projects.items.infostorm.description'),
            linkText: t('projects.labels.checkCode'),
            projectUrl: 'https://github.com/immortal-p/frontend-project-11',
            live: t('projects.labels.live'),
            liveUrl: 'https://frontend-project-11-three-azure.vercel.app/',
        },
        {
            id: 2,
            imageUrl: nekoDash,
            imageAlt: 'Weather Dashboard img',
            stack: ['TS', 'React', 'Tailwind', 'OpenWeather API', 'Axios'],
            title: 'Weather Dashboard',
            description: t('projects.items.weather.description'),
            linkText: t('projects.labels.checkCode'),
            projectUrl: 'https://github.com/immortal-p/Weather-Dashboar',
        },
        {
            id: 3,
            imageUrl: nekoChat,
            imageAlt: 'Real-Time Chat img',
            stack: ['JS', 'React', 'Redux', 'Tailwind', 'Socket.io', 'JWT', 'State API'],
            title: 'Neco Chat',
            description: t('projects.items.necoChat.description'),
            linkText: t('projects.labels.checkCode'),
            projectUrl: 'https://github.com/immortal-p/frontend-project-12',
            live: t('projects.labels.live'),
            liveUrl: 'https://frontend-project-12-ndyp.onrender.com',
        },
    ]

    return PROJECTS
}

const InfoProjects = () => {
    const projects = useProjectsData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeOut',
                        delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                >
                    <LiquidGlassCard className="rounded-md bg-transparent shadow-none border-none p-1 *:shadow-0 z-20">
                        <div className="aspect-video w-full relative">
                            <img
                                src={project.imageUrl}
                                alt={project.imageAlt}
                                loading='lazy'
                                decoding='async'
                                className="w-full h-full object-cover rounded-tr-md rounded-tl-md"
                            />
                        </div>

                        <div className="p-2 flex flex-wrap gap-2 border-t border-b border-(--text-cl) text-[16px] text-(--text-cl) relative">
                            {project.stack.map((sk, index) => (
                                <span
                                    key={index}
                                    className="border border-(text-cl) rounded-sm px-2 py-1 whitespace-nowrap inline-block"
                                >
                                    {sk}
                                </span>
                            ))}
                        </div>

                        <CardContent className="p-4 space-y-4">
                            <CardTitle className="text-2xl font-medium text-(--white-cl)">
                                {project.title}
                            </CardTitle>
                            <CardDescription className="text-(--text-cl) text-[16px]">
                                {project.description}
                            </CardDescription>
                            {project.live && (
                                <Button className="border rounded-sm border-(--icon-cl) text-(--white-cl) mr-4 mb-0">
                                    <Link
                                        to={project.liveUrl !== undefined ? project.liveUrl : ''}
                                        className="py-2 px-4"
                                    >
                                        {project.live}
                                    </Link>
                                </Button>
                            )}
                            <Button className="border rounded-sm border-(--text-cl) text-(--white-cl)">
                                <Link to={project.projectUrl}>{project.linkText}</Link>
                                <img src={code} className="h-4" alt="" />
                            </Button>
                        </CardContent>
                    </LiquidGlassCard>
                </motion.div>
            ))}
        </div>
    )
}

export default InfoProjects
