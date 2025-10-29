"use client"
import { motion } from 'framer-motion'

const experiences = [
    {
        title: 'Desenvolvedor FullStack', company: 'Synergie Consulting', period: '04/2024 - 05/2025', desc: 'Liderei o desenvolvimento front-end do Portal de Vendas com Next.js e TypeScript, implementando um Design System completo com documentação no Storybook.No Portal Synergie, trabalhei com Laravel e jQuery para criar um sistema de autenticação hierárquico e interfaces responsivas integradas aos webservices do ERP Senior.Desenvolvi APIs robustas em Node.js e Laravel, testadas via Postman, para integração com sistemas legados.Também implementei interfaces para o sistema RFID(Java/ Android) e soluções de integração corporativa (Twilio, Microsoft Teams), utilizando um stack diversificado com foco em qualidade e performance.'
    },
    {
        title: 'Desenvolvedor Web Freelancer', company: 'Autônomo', period: '02/2024 - Atual', desc: 'Atuo no desenvolvimento e manutenção de sites para clientes como Clínica Com Vida, Cartão Paulista e AESP Com Vida, com foco em design, atualizações e presença digital via Wix e Google Business. Desenvolvi o site institucional da CASP em React e criei uma landing page para um projeto de planejamento turístico em parceria com a Prefeitura de Campos do Jordão e o Instituto Federal local'
    },
    {
        title: 'Desenvolvedor Frontend', company: 'Agência Agile', period: '06/2022 - 08/2023', desc: 'Na Agência Agile, atuei no desenvolvimento front-end de sites institucionais, criando interfaces responsivas e otimizadas com CSS puro, JavaScript e jQuery. Fui responsável por transformar layouts do Figma em código limpo e eficiente, garantindo a perfeita adaptação para diferentes dispositivos. Implementei técnicas avançadas de CSS para melhorar performance e animações fluidas, além de desenvolver scripts JavaScript personalizados para interações dinâmicas. Também otimizei temas WordPress existentes, refatorando código legado para melhorar manutenibilidade e tempo de carregamento.'
    }
]

export function Experience() {
    return (
        <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-semibold mb-6">Experiência</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experiences.map((exp, i) => (
                    <div key={i} className="rounded-xl p-6 surface-light dark:surface-dark shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
                        <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}