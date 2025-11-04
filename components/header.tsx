'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
    const [mounted, setMounted] = useState(false)
    const [dark, setDark] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
        const stored = localStorage.getItem('theme')
        if (stored === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark')
            setDark(true)
        }
    }, [])

    function toggleTheme() {
        const next = !dark
        setDark(next)
        if (next) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', next ? 'dark' : 'light')
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#071026]/60 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#home"
                    className="font-semibold text-lg md:text-xl text-gray-900 dark:text-gray-100 tracking-tight hover:opacity-80 transition-opacity"
                >
                    Davi Lopes França
                </a>

                <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700 dark:text-gray-200">
                    {['Sobre', 'Experiência', 'Habilidades', 'Projetos', 'Contato'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        aria-label="Alternar tema"
                        className="p-2 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {mounted ? (dark ? <Sun size={18} /> : <Moon size={18} />) : null}
                    </button>
                </nav>

                <button
                    onClick={toggleMenu}
                    aria-label="Menu"
                    className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <nav className="md:hidden bg-white dark:bg-[#071026] border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex flex-col gap-4 text-gray-800 dark:text-gray-200">
                    {['Sobre', 'Experiência', 'Habilidades', 'Projetos', 'Contato'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-blue-500 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            toggleTheme()
                            setMenuOpen(false)
                        }}
                        aria-label="Alternar tema"
                        className="p-2 rounded w-fit hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        {mounted ? (dark ? <Sun size={18} /> : <Moon size={18} />) : null}
                    </button>
                </nav>
            )}
        </header>
    )
}