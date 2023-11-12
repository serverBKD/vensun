'use client'
import Navbar from '@/components/Navbar.tsx'
import Image from 'next/image'
// import {imgTwoBlocks} from '@/types/const.ts'

export default function Contacto() {
    return (
        <main className='w-full h-screen bg-slate-500 overflow-hidden'>
            <Navbar />
            <section className='w-[75%] min-[480px]:w-full h-full min-h-screen flex flex-wrap justify-center items-center mx-auto gap-3 px-5'>
                <section className='w-[480px] h-full flex flex-wrap justify-center items-center'>
                    <form className='w-full flex flex-col gap-y-3 p-4 rounded-lg shadow-2xl bg-slate-600'>
                        <h1 className='text-white font-bold pl-3'>Contacto</h1>
                        <input type="text" placeholder='Nombre' className='focus-visible:outline-0 rounded-sm pl-3 ' />
                        <input type="text" placeholder='Correo' className='focus-visible:outline-0 rounded-sm pl-3'/>
                        <textarea placeholder='Mensaje' className='focus-visible:outline-0 rounded-sm pl-3'/>
                        <button className='rounded-sm pl-3 py-1 mb-2 text-slate-900 font-bold bg-slate-100' onClick={()=> alert('Dominio?')}>Enviar</button>
                    </form>
                </section>
                <section className='w-[420px] h-full flex flex-wrap justify-center items-center  overflow-hidden'>
                    <Image
                        src={'/placeholders/1000088634.jpg'}
                        alt='X'
                        width={480}
                        height={480}
                        className='w-[480px] h-auto rounded-2xl shadow-2xl'
                    />
                </section>
            </section>
        </main>
    )
}
