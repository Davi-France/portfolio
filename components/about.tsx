"use client"
import { motion } from 'framer-motion'


export default function About() {
    return (
        <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold">Sobre</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-light dark:text-gray-300">
                Desenvolvedor Fullstack com experiência em Next.js, React, Node.js e Laravel. Trabalhei em projetos de portais de vendas, integrações com ERPs (Senior), além de sites institucionais e landing pages.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>📞 (11) 95083-5794 • davifrancajobs@gmail.com</li>
                <li>📍 Disponível para freelance / contratação</li>
            </ul>
        </motion.div>
    )
}