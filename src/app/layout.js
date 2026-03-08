import "./globals.css"
//import Navbar from "@/components/Navbar"
//import Ribbon from "@/components/Ribbon"

export const metadata = { title: "CC Xposed" }

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body className="flex flex-col h-full">
               {/*} <Navbar />
                <Ribbon />*/}
                {children}
            </body>
        </html>
    )
}