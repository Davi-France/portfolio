"use client"
import { motion } from 'framer-motion'


export default function Projects() {
    return (
        <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold">Projetos</h2>
            <p className="mt-4 text-sm text-muted-light dark:text-gray-400">A seção de projetos está preparada — adicione seus repositórios do GitHub quando quiser.</p>


            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl surface-light dark:surface-dark border hover:shadow-soft transition">Projeto A (placeholder)</div>
                <div className="p-4 rounded-2xl surface-light dark:surface-dark border hover:shadow-soft transition">Projeto B (placeholder)</div>
            </div>
        </motion.div>
    )
}