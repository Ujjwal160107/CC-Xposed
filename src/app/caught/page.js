"use client"
import { useRouter } from "next/navigation"

export default function Caught() {
    const router = useRouter()

    return (
        <main className="flex flex-col items-center justify-center h-full gap-5" style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-widest" style={{color: "#EFCB47"}}>
                CC XPOSED
            </h1>

            {/* Target Identified Banner */}
            <div className="flex items-center justify-center gap-4 rounded-full w-80" style={{backgroundColor: "#EFCB47", padding: "0.3vw 1.5vw"}}>
                <span style={{color: "#1C1C15"}}>★ ★</span>
                <span className="text-sm font-bold tracking-widest" style={{color: "#1C1C15"}}>TARGET IDENTIFIED</span>
                <span style={{color: "#1C1C15"}}>★ ★</span>
            </div>

            {/* Main Card */}
            <div className="rounded-2xl w-80" style={{backgroundColor: "#1C1C15", border: "1px solid #2a2a1f", padding: "1.5vw"}}>

                {/* Exhibit A + Name */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-widest" style={{color: "#EFCB47"}}>EXHIBIT A</span>
                    {/* NAME FROM BACKEND */}
                    <span className="text-xl font-bold tracking-widest" style={{color: "#EFCB47"}}>Name</span>
                </div>

                {/* Image container — backend will fill this */}
                <div className="w-full h-52 rounded-lg mb-4" style={{border: "1px solid #2a2a1f"}}>
                </div>

                {/* Confidence bar */}
                <div className="w-full h-1 rounded-full mb-1" style={{backgroundColor: "#2a2a1f"}}>
                    <div className="h-1 rounded-full" style={{backgroundColor: "#EFCB47", width: "78.6%"}} />
                </div>
                {/* CONFIDENCE % FROM BACKEND */}
                <span className="text-xs" style={{color: "#EFCB47"}}>xx% confidence</span>

            </div>

            {/* Quote box */}
            <div className="rounded-2xl w-80 flex gap-4" style={{backgroundColor: "#1C1C15", border: "1px solid #2a2a1f", padding: "0.5vw 0.8vw"}}>
    {/* Yellow vertical bar */}
    <div className="w-1 rounded-full flex-shrink-0" style={{backgroundColor: "#EFCB47"}} />
    {/* Text */}
    <p className="text-sm leading-relaxed" style={{color: "#DFD6B1", fontFamily: "monospace"}}>
        Did you really think a blank screen would hide you? Your phrasing, vocabulary choices, and sentence structure gave you away immediately.
    </p>
</div>

            {/* Close case button */}
            <button
                onClick={() => router.push("/landing")}
                className="w-80 rounded-full text-sm font-bold tracking-widest"
                style={{backgroundColor: "#EFCB47", color: "#1C1C15", padding: "0.8vw 0", cursor: "pointer"}}
            >
                Close case
            </button>

        </main>
    )
}