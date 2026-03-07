import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 w-full" style={{backgroundColor: "#1C1C15", height: "64px"}}>
            
            {/* left half */}
            <div className="flex items-center gap-3" style={{marginLeft: "24px"}}>
                <Image src="/user.svg" alt="user" width={36} height={36} />
                <div className="flex flex-col">
                    <span className="text-[#EFCB47] text-sm font-semibold tracking-widest">
                        [UNKNOWN SUSPECT]
                    </span>
                    <span className="text-[#DFD6B1] text-xs tracking-widest">
                        ONLINE
                    </span>
                </div>
            </div>

            {/* right hafl*/}
            <span className="text-[#EFCB47] text-2xl font-bold tracking-widest" style={{marginRight: "24px"}}>
                CC XPOSED
            </span>

        </nav>
    )
}