"use client"
import { useEffect } from "react"
import "./globals.css"

export default function RootLayout({ children }) {
    useEffect(() => {

        if (window.innerWidth <= 768) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className="bg-light text-text-light dark:bg-dark dark:text-text-dark transition-colors duration-500">
                {children}
            </body>
        </html>
    )
}
