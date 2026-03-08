"use client"
import { useRouter } from "next/navigation"

export default function Landing() {
    const router = useRouter()

    return (
        <main className="flex flex-col items-center justify-center h-full" style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            {/*Naam*/}
            <h1 className="text-4xl font-bold tracking-widest" style={{color: "#EFCB47", marginBottom: "2vh"}}>
                CC XPOSED
            </h1>

            {/*main card*/}
            <div className="rounded-2xl p-8 w-[28vw] h-[13vw]" style={{backgroundColor: "#1C1C15", border: "1px solid #2a2a1f", margin: "1vw", padding: "0.8vw 0.5vw 0vw 0.8vw"}}>
                <p className="text-xs tracking-widest mb-3" style={{color: "#EFCB47", margin: "0.5vw 0vw"}}>CASE BRIEF</p>
                <h2 className="text-2xl font-semibold mb-4 leading-snug" style={{color: "#DFD6B1", fontFamily: "monospace"}}>
                    Someone said something very suspicious.
                </h2>
                <p className="text-sm leading-relaxed" style={{color: "#DFD6B1", fontFamily: "monospace", fontSize: "0.85vw", margin: "0.8vw 0vw"}}>
                    You will be asked a simple question. Answer it exactly how you naturally would.
                </p>
            </div>

            {/*donno buttons*/}
            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => router.push("/")}
                    className="rounded-full text-sm font-semibold tracking-widest"
                    style={{backgroundColor: "transparent", border: "1px solid #DFD6B1", color: "#DFD6B1", padding: "0.6vw 1.5vw"}}
                >
                    Okay    
                </button>
                <button
                    onClick={() => router.push("/")}
                    className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest"
                    style={{backgroundColor: "#EFCB47", color: "#11100C", padding: "0.6vw 1.5vw"}}
                >
                    Okay but in yellow
                </button>
            </div>
        </main>
    )
}