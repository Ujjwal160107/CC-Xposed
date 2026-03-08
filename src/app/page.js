"use client"
import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Ribbon from "@/components/Ribbon"
import questions from "@/questions.json"
import ChatArea from "@/components/ChatArea"
import InputBar from "@/components/InputBar"

export default function Home() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
        setMessages([{ id: 1, sender: "bot", text: randomQuestion }])
    }, [])

    const handleSend = (text) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            sender: "user",
            text: text
        }])
    }

    return (
        <main className="flex flex-col flex-1 min-h-0">
            <Navbar />
            <Ribbon />
            <ChatArea messages={messages} />
            <InputBar onSend={handleSend} />
        </main>
    )
}