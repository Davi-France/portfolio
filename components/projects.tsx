"use client"
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { SiReact, SiNextdotjs, SiLaravel, SiNodedotjs, SiTailwindcss, SiNestjs, SiMysql, SiAngular, SiSpring, SiTypescript, SiCss3, SiSass } from 'react-icons/si'

const projects = [
    {
        title: 'Blog Casp',
        desc: 'Desenvolvimento de um blog para assosiação CASP, utilizando NextJs e NestJs na criação de um CMS próprio para o usuario',
        img: '/projects/vetor-project.png',
        stacks: [SiNextdotjs, SiNestjs, SiMysql, SiTailwindcss, SiTypescript, SiCss3],
        github: 'https://github.com/Davi-France/blog-casp',
        link: 'https://github.com/Davi-France/blog-casp'
    },
    {
        title: 'SaaS Task Manager',
        desc: 'Um sistema de gerenciamento de tarefas estilo Kanban, desenvolvido com Angular no front-end e Spring Boot no back-end. Permite criar, visualizar e mover tarefas entre colunas("Todo", "In Progress" e "Done"), com atualização automática do status no backe',
        img: '/projects/vetor-project.png',
        stacks: [SiAngular, SiSpring, SiMysql, SiTypescript, SiCss3, SiSass],
        github: 'https://github.com/Davi-France/saas-task-manager',
        link: 'https://github.com/Davi-France/saas-task-manager'
    },

]

export function Projects() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <div key={i}>
                        <div
                            onClick={() => setOpenIndex(i)}
                            className="cursor-pointer group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition relative"
                        >
                            <Image src={p.img} alt={p.title} width={400} height={300} className="object-cover w-full h-56" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{p.title}</h3>
                                <div className="flex gap-3 mt-3">
                                    <a href={p.link} target="_blank" className="px-3 py-1 text-sm bg-accent text-white rounded-md">Ver Projeto</a>
                                    <a href={p.github} target="_blank" className="px-3 py-1 text-sm border rounded-md border-accent text-accent">GitHub</a>
                                </div>
                            </div>
                        </div>

                        {/* Modal Framer Motion */}
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                                    onClick={() => setOpenIndex(null)}
                                >
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white dark:bg-surface-dark rounded-xl p-6 max-w-lg w-full relative"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
                                        <div className="flex gap-4 flex-wrap mb-4">
                                            {p.stacks.map((Icon, i) => (
                                                <div key={i} className="flex items-center justify-center w-10 h-10 rounded-lg surface-light dark:surface-dark">
                                                    <Icon size={24} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={p.link} target="_blank" className="px-3 py-1 text-sm bg-accent text-white rounded-md">Ver Projeto</a>
                                            <a href={p.github} target="_blank" className="px-3 py-1 text-sm border rounded-md border-accent text-accent">GitHub</a>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}