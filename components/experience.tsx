"use client"
import { motion } from 'framer-motion'


const items = [
    {
        company: 'Synergie Consulting',
        period: '04/2024 - 05/2025',
        desc: 'Liderei front-end do Portal de Vendas (Next.js + TypeScript) e desenvolvi integrações com ERP usando Laravel e APIs.'
    },
    {
        company: 'Autônomo (Freelancer)',
        period: '02/2024 - Atual',
        desc: 'Desenvolvimento e manutenção de sites (Wix, React) e presença digital para clientes locais.'
    },
    {
        company: 'Agência Agile',
        period: '06/2022 - 08/2023',
        desc: 'Front-end para sites institucionais, tradução de layouts do Figma para código responsivo.'
    }
]


export default function Experience() {
    return (
        <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold">Experiência</h2>
            <div className="mt-6 space-y-4">
                {items.map((it) => (
                    <div key={it.company} className="p-4 surface-light dark:surface-dark border rounded-2xl">
                        <div className="flex items-baseline justify-between">
                            <h3 className="font-medium">{it.company}</h3>
                            <span className="text-sm text-muted-light dark:text-gray-400">{it.period}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-light dark:text-gray-300">{it.desc}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}