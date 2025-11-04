"use client"
import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, SiTypescript, SiTailwindcss, SiPython, SiPostgresql, SiMysql, SiGit, SiDotnet } from 'react-icons/si'

const skills = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Python', icon: SiPython },
    { name: '.NET', icon: SiDotnet },
    { name: 'Java', icon: FaJava },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Git', icon: SiGit }
]

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
        >
            <h2 className="text-2xl font-semibold mb-6">Habilidades</h2>
            <div className="flex overflow-hidden relative group">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
                >
                    {[...skills, ...skills].map((skill, i) => {
                        const Icon = skill.icon
                        return (
                            <div
                                key={i}
                                className="flex-shrink-0 w-24 h-24 surface-light dark:surface-dark rounded-2xl p-4 flex flex-col items-center justify-center text-muted-light dark:text-gray-300 hover:text-accent transition"
                            >
                                <Icon size={36} />
                                <span className="mt-2 text-sm text-center">{skill.name}</span>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </motion.div>
    )
}