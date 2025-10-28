"use client"
import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiCss3, SiHtml5, SiNodedotjs, SiNestjs, SiLaravel, SiPython, SiPostgresql, SiMysql, SiMongodb, SiGit, SiPostman, SiSpring } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skills = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: FaJava },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiPostman }
]


export default function Skills() {
    return (
        <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-semibold mb-6">Habilidades</h2>
            <div className="flex gap-6 overflow-x-auto py-4 px-2 scrollbar-hide">
                {skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                        <div key={skill.name} className="flex-shrink-0 w-24 h-24 surface-light dark:surface-dark rounded-2xl p-4 flex flex-col items-center justify-center text-muted-light dark:text-gray-300 hover:text-accent transition">
                            <Icon size={36} />
                            <span className="mt-2 text-sm text-center">{skill.name}</span>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}