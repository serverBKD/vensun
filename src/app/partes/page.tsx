// 'use client'
import React from 'react'
import Title from '@/components/Title.tsx'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { CardPages } from '@/types/types.ts'

async function getPartes() {
	const res = await fetch('https://fakestoreapi.com/products')
	const data = await res.json()
	return data
}

export default async function Page() {
	const Partes = await getPartes()
	return (
		<main className="w-full min-h-screen h-auto bg-gray-400">
			<Navbar />
			<Title linkName='Partes y Repuestos' linkUrl='/'/>
			<section className='w-[90%] mx-5 flex justify-center flex-wrap overflow-hidden'>
				{Partes.map((item: CardPages) => (
					<article
						key={item.id}
						className='max-w-[420px] md:max-w-[320px] max-h-[480px] h-auto min-h-[420px] mx-1 my-3 rounded-md overflow-hidden hover:shadow-2xl'
					>
						<Image
							src={item.image}
							alt={item.description}
							width={320}
							height={80}
							style={{
								minHeight: '320px',
								maxHeight: '320px',
								minWidth: '420px',
								maxWidth: '100%',
								objectFit: 'contain',
								padding: '1rem 2rem',
								textAlign:'center',
								backgroundColor: '#fff',
								borderBottom: '5px solid bg-gray-400',
							}}
						/>
						<div className='p-4 min-h-fit bg-cyan-500 text-white '>
							<p className='font-bold'>{item.title.substring(0,16)}</p>
							<p className='text-xs py-1 px-3 font-semibold text-justify'>
								{item.description.substring(0,64)}
							</p>
						</div>
					</article>
				))}
			</section>
		</main>
	)
}
