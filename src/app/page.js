"use client"
import { useState } from "react"
import ChatArea from "@/components/ChatArea"
//import Options from "@/components/Options"
import InputBar from "@/components/InputBar"

export default function Home() {
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: '"EXAMPLE TEXT"' },
        { id: 2, sender: "bot", text: "IDENTIFY WHO SAID THIS", hint: true },
    ])

    return (
        <main className="flex flex-col" style={{height: "calc(100vh - 88px)"}}>
            <ChatArea messages={messages} />
            <InputBar />
        </main>
    )
}