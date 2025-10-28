"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <div className="min-h-[70vh] flex flex-col md:flex-row items-center gap-8">
            <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Davi Lopes França</h1>
                <p className="mt-4 text-lg text-muted-light dark:text-gray-300">Crio experiências digitais modernas e integrações poderosas.</p>
                <div className="mt-6 flex gap-3">
                    <a href="#projects" className="btn-primary">Ver Projetos</a>
                    <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border">Contato</a>
                </div>
            </motion.div>


            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="w-44 h-44 rounded-2xl overflow-hidden bg-surface flex-shrink-0 shadow-soft">
                <Image src="/placeholder.jpg" alt="Foto" width={176} height={176} />
            </motion.div>
        </div>
    )
}