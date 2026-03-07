"use client"
import { useState } from "react"
import ChatArea from "@/components/ChatArea"
import Options from "@/components/Options"
import InputBar from "@/components/InputBar"

export default function Home() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: '"EXAMPLE TEXT"' },
        { id: 2, sender: "bot", text: "IDENTIFY WHO SAID THIS", hint: true },
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
            <Options />
            <InputBar onSend={handleSend} />
        </main>
    )
}