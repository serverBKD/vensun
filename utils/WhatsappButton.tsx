import Link from 'next/link'
import Image from 'next/image'
import { WhatsappButtonItems } from '@/types/const.ts'
// import { LinkItems } from '@/types/types.ts'

export default function WhatsappButton() {
	return (
		<div className="fixed w-20 h-20 text-red-900 rounded-full  bottom-6 right-2 ">
			<div className="w-150 h-150 rounded-full absolute bottom-6 right-2">
				<Link href={'WhatsappButtonItems.linkUrl'} rel="noopener noreferrer" target="_blank" >
					<Image
						src={WhatsappButtonItems.linkSrc}
						alt={WhatsappButtonItems.linkName}
						width={150}
						height={150}
						quality={100}
					/>
				</Link>
			</div>
		</div>
	)
}
