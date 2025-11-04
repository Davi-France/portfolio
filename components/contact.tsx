"use client"
import { Mail, MessageSquare, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
    const phone = "5511950835794"
    const email = "davifrancajobs@gmail.com"
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        if (!form.current) return

        emailjs
            .sendForm(
                "service_lqu5mxr",
                "template_nw41qex",
                form.current,
                "WjwBU-mBlGZswP81_"
            )
            .then(
                () => {
                    setSent(true)
                    setLoading(false)
                },
                (error) => {
                    console.error("Erro ao enviar e-mail:", error)
                    setLoading(false)
                    alert("❌ Ocorreu um erro ao enviar sua mensagem. Tente novamente.")
                }
            )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mt-12"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Contato</h2>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                    <p className="text-muted-light dark:text-gray-300 mb-6">
                        Fale comigo diretamente por e-mail, WhatsApp ou envie uma mensagem pelo formulário ao lado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-gray-300  dark:border-gray-700  transition"
                        >
                            <Mail size={18} /> Email
                        </a>

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={`https://wa.me/${phone}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-green-500 text-white font-medium shadow-md hover:bg-green-600 transition-transform hover:-translate-y-0.5"
                        >
                            <MessageSquare size={18} /> WhatsApp
                        </a>
                    </div>
                </div>

                {!sent ? (
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col gap-4 surface-light dark:surface-dark p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Seu nome"
                            required
                            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Seu e-mail"
                            required
                            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Digite sua mensagem..."
                            rows={4}
                            required
                            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-md transition ${loading
                                ? "opacity-70 cursor-not-allowed"
                                : "hover:bg-blue-600 hover:-translate-y-0.5"
                                }`}
                        >
                            {loading ? "Enviando..." : (
                                <>
                                    <Send size={18} /> Enviar Mensagem
                                </>
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-400 rounded-lg text-green-600 dark:text-green-400">
                        ✅ Mensagem enviada com sucesso!
                        <br /> Entrarei em contato em breve.
                    </div>
                )}
            </div>
        </motion.div>
    )
}
