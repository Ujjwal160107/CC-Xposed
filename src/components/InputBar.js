"use client"
import Image from "next/image"
import { useState } from "react"

export default function InputBar() {
    const [input, setInput] = useState("")

    const handleSend = () => {
        if (!input.trim()) return
        // bhai yahan pe api calls karni hai
        setInput("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSend()
    }

    return (
        <div className="flex items-center gap-3 px-4 py-3 w-full h-20" style={{backgroundColor: "#1C1C15", padding: "8px 18px"}}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder=""
                className="flex-1 rounded-full text-sm outline-none border-none text-white"
                style={{backgroundColor: "#111109", padding: "8px 18px"}}
            />

            <button
                onClick={handleSend}
                className="flex items-center justify-center rounded-full w-10 h-10 flex-shrink-0"
                style={{backgroundColor: "#EFCB47"}}
            >
                <Image src="/arrow.svg" alt="send" width={18} height={18} />
            </button>

        </div>
    )
}