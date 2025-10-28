'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'


export default function Header() {
    const [mounted, setMounted] = useState(false)
    const [dark, setDark] = useState(false)


    useEffect(() => {
        setMounted(true)
        const stored = localStorage.getItem('theme')
        if (stored === 'dark') {
            document.documentElement.classList.add('dark')
            setDark(true)
        }
    }, [])


    function toggle() {
        const next = !dark
        setDark(next)
        if (next) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', next ? 'dark' : 'light')
    }


    return (
        <header className="fixed w-full bg-white/70 dark:bg-[#071026]/60 z-50">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                <a href="#home" className="font-semibold text-lg">Davi Lopes França</a>
                <nav className="hidden md:flex gap-6 items-center text-sm">
                    <a href="#about">Sobre</a>
                    <a href="#experience">Experiência</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                    <button onClick={toggle} aria-label="toggle theme" className="p-2 rounded">
                        {mounted ? (dark ? <Sun size={16} /> : <Moon size={16} />) : null}
                    </button>
                </nav>
            </div>
        </header>
    )
}