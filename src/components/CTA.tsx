'use client'

export default function CTA () {
    return (
        <section className="w-full h-auto py-5 mt-1 bg-slate-600 grid place-content-center gap-y-3 text-center">
            <button onClick={() => window.open('https://api.whatsapp.com/send?phone=584124363200', '_blank')}
                className=" font-bold w-48 bg-[#25D366] text-white px-2 py-1 rounded-2xl text-lg transition-all duration-300 ease-in-out hover:underline hover:shadow-2xl"
            >
                {'WhatsApp'}
            </button>
        </section>
    )
}
// import Link from 'next/link'
//
// <Link href={'http:api.whatsapp.com/?tel=4124363200'}
//     className=" font-bold w-48 bg-[#25D366] text-white px-2 py-1 rounded-2xl text-lg transition-all duration-300 ease-in-out hover:underline hover:shadow-2xl"
// >
//     {'WhatsApp'}
// </Link>