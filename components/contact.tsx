"use client"
import { Mail, MessageSquare } from 'lucide-react'


export default function Contact() {
    const email = 'davifrancajobs@gmail.com'
    const phone = '5511950835794'


    return (
        <div>
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p className="mt-4 text-muted-light dark:text-gray-300">Fale comigo por e-mail ou WhatsApp:</p>
            <div className="mt-4 flex gap-3">
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border"> <Mail size={16} /> Email</a>
                <a target="_blank" rel="noreferrer" href={`https://wa.me/${phone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] text-white"> <MessageSquare size={16} /> WhatsApp</a>
            </div>
        </div>
    )
}