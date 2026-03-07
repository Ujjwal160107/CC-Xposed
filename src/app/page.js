"use client"
import { useState } from "react"
import ChatArea from "@/components/ChatArea"
import InputBar from "@/components/InputBar"

export default function Home() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: '"Question1"' },
    ])

    const handleSend = (text) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            sender: "user",
            text: text
        }])
    }

    return (
        <main className="flex flex-col flex-1 min-h-0">
            <ChatArea messages={messages} />
            <InputBar onSend={handleSend} />
        </main>
    )
}