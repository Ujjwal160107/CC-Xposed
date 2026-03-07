"use client"

function BotMessage({ text, hint, time }) {
    return (
        <div className="flex flex-col items-start gap-1 mb-4">
            <div className="rounded-2xl rounded-tl-sm max-w-xs" style={{backgroundColor: "#252420", padding: "16px"}}>
                <p className="text-sm tracking-widest" style={{color: "#DFD6B1"}}>{text}</p>
                {hint && (
                    <p className="text-sm tracking-widest mt-1" style={{color: "#EFCB47"}}>HINT</p>
                )}
            </div>
            <span className="text-xs tracking-widest ml-1" style={{color: "#DFD6B1"}}>
                <span style={{color: "#DCB117"}}>???</span> · {time} · <span style={{color: "#DCB117"}}>delivered</span>
            </span>
        </div>
    )
}

function UserMessage({ text, time }) {
    return (
        <div className="flex flex-col items-end gap-1 mb-4">
            <div className="rounded-2xl rounded-tr-sm max-w-xs" style={{backgroundColor: "#3B3101", padding: "16px"}}>
                <p className="text-sm tracking-widest" style={{color: "#DFD6B1"}}>{text}</p>
            </div>
            <span className="text-xs tracking-widest mr-1" style={{color: "#DFD6B1"}}>
                you · {time} · <span style={{color: "#DCB117"}}>delivered</span>
            </span>
        </div>
    )
}

export default function ChatArea({ messages }) {
    const now = new Date()

    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short"
    }).toUpperCase()

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }).toLowerCase()

    return (
        <div className="py-4 relative overflow-y-auto flex-1" style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingLeft: "24px",
            paddingRight: "24px",
        }}>
            {/* Date separator */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px" style={{backgroundColor: "#DFD6B1"}} />
                <span className="text-xs tracking-widest" style={{color: "#DFD6B1"}}>{date}</span>
                <div className="flex-1 h-px" style={{backgroundColor: "#DFD6B1"}} />
            </div>

            {/* Messages */}
            {messages.map((msg) =>
                msg.sender === "bot" ? (
                    <BotMessage key={msg.id} text={msg.text} hint={msg.hint} time={time} />
                ) : (
                    <UserMessage key={msg.id} text={msg.text} time={time} />
                )
            )}
        </div>
    )
}