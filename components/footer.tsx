"use client"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="py-6 mt-12 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-center gap-5 mb-3 text-lg">
                <a
                    href="https://github.com/Davi-France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/davi-lopes-franca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                >
                    <FaLinkedin />
                </a>
            </div>

            <p>© {new Date().getFullYear()} Davi França — Todos os direitos reservados.</p>
        </footer>
    )
}
