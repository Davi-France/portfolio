"use client"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
    return (
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
        >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Davi Lopes França
            </h1>
            <p className="mt-4 text-lg text-muted-light dark:text-gray-300">
                Desenvolvedor Fullstack que você precisa!
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="#experience" className="btn-primary">
                    Experiência
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600 transition"
                >
                    Contato
                </a>
            </div>

            <div className="mt-6 flex gap-5 text-2xl text-gray-600 dark:text-gray-300">
                <a
                    href="https://github.com/Davi-France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/davifran%C3%A7a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                >
                    <FaLinkedin />
                </a>
            </div>
        </motion.section>
    )
}
