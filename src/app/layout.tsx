import Footer from '@/components/Footer.tsx'
// import WhatsappButton from '@/components/WhatsappButton.tsx'
import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import notfound from '@/app/not-found.jsx'

export const metadata: Metadata = {
    title: 'VENSUN',
    description: '¡dime a donde vamos!',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={'{inter.className} relative bg-[#fff] scroll-smooth'}>
                <span id="top"></span>
                {children}
                <Footer />
                {/* <WhatsappButton /> */}
            </body>
        </html>
    )
}
