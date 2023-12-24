
import "./globals.css"
import {Inter } from "next/font/google"

const ibm = Inter({subsets: ["latin"]})
export const metadata = {
    title: "Hello"
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body  className={ibm.className}>
                {children}
            </body>
        </html>
    )
}