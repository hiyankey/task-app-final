
import "./globals.css"
import {Inter } from "next/font/google"

const inter = Inter({subsets: ["latin"]})
export const metadata = {
    title: "Task App"
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body  className={`${inter.className} overflow-x-hidden`}>
                {children}
            </body>
        </html>
    )
}