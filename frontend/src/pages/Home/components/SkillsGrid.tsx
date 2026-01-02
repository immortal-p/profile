import { CardHeader, CardContent } from "@/components/ui/card";
import { LiquidGlassCard } from "@/components/kokonutui/liquid-glass-card";
import { motion } from "framer-motion"

interface SkillCategory {
    id: number;
    title: string;
    skills: string[];
}

const SKILLS_DATA: SkillCategory[] = [
    { 
        id: 1,
        title: 'Languages',
        skills: ['TypeScript', "JavaScript"]
    },
    {
        id: 2,
        title: "Style",
        skills: ["SASS", "Bootstrap", "Tailwind", "Shadcn/UI"]
    },

    {
        id: 3,
        title: "Frameworks",
        skills: ["Tailwind", "React"]
    },
    {
        id: 4,
        title: "Other",
        skills: ["HTML", "Pug", "EJS", "REST", "Jest", "Redux"]
    },
    {
        id: 5,
        title: "Tools",
        skills: ["VSCode", "Linux", "Figma", "Fedora", "Git"]
    },
    {
        id: 6,
        title: "UI & Animations",
        skills: ["Shadcn", "Mantine", "MagicUI", "Framer Motion"],
    }
]

const SkillsGrid = () => {
    const col1 = SKILLS_DATA.filter((_, i) => i === 0);
    const col2 = SKILLS_DATA.filter((_, i) => i > 0 && i < 3);
    const col3 = SKILLS_DATA.filter((_, i) => i > 2);

    return (
        <div className="flex flex-row gap-4 items-start">
            {[col1, col2, col3].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col flex-1">
                    {column.map((skillData, index) => (
                        <motion.div
                            key={skillData?.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                                delay: index * 0.2
                            }}
                            viewport={{ once: true, margin: "-50px"}}
                            className="break-inside-avoid mb-4 w-full h-auto inline-block align-top"
                        >
                            <LiquidGlassCard className="p-0 rounded-sm w-full *:rounded-sm border-none *:shadow-0 z-20">
                                <CardHeader className="p-2 border-b border-(--text-cl) text-[16px] text-(--white-cl)">
                                    <p className="font-bold">{skillData.title}</p>
                                </CardHeader>
                                <CardContent className="p-2 text-[16px] text-(--text-cl)">
                                    {skillData.skills.map((skill, index) => (
                                        <span key={index} className="border border-(--text-cl) rounded-sm px-2 py-1 ml-2 my-1 whitespace-nowrap inline-block">{skill}</span>
                                    ))}
                                </CardContent>
                            </LiquidGlassCard>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SkillsGrid