import Link from 'next/link'
import Title from '@/components/Title.tsx'
// import RedesSociales from '@/components/RedesSociales.tsx'

export default function Footer() {
    return (
        <section className="w-full min-h-16 h-auto mt-3 mb-0 bg-slate-600 overflow-hidden">
            <section className="w-[75%] min-h-16 h-auto flex justify-between items-center flex-wrap gap-3 mx-auto">
                <article className="py-6">
                    <ol>
                        <li>- ¿Dónde estamos?</li>
                        <li>- Politicas y Condiciones</li>
                        <li>- email: info@vensun.com.ve</li>
                        <li><Link href={'/tiendas'}>- contacto</Link></li>
                    </ol>
                </article>
                <article className="min-w-[540px] text-center bg-sky-600">
                    <Title linkName={'VENSUN | 2023'} linkUrl={'/'}/>
                </article>
                {/* <article>
					<RedesSociales/>    
				</article> */}
            </section>
            <section className="w-[75%] min-h-16 h-auto flex justify-between items-center flex-wrap md:flex-nowrap gap-x-6 mx-auto pb-6">
                <article>
                    <h1 className="font-bold text-2xl">compra seguro</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae voluptate, et quas hic perferendis pariatur dolores veritatis obcaecati nam? Quas, ut autem. Deleniti quo ipsam debitis hic saepe tempore iste vel.</p>
                </article>
                <article>
                    <h1 className="font-bold text-2xl">Entrega Garantizada</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam assumenda consequatur eum similique quam. Rerum, dolore, neque autem laudantium eos quibusdam, delectus reiciendis nemo eum excepturi ipsum est quaerat enim repudiandae.  </p>
                </article>
                <article>
                    <h1 className="font-bold text-2xl">Vuelve pronto</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quasi cumque exercitationem culpa ipsum laboriosam? Sapiente quaerat velit sunt cupiditate! Consectetur, ea consequatur eaque nesciunt labore vero hic quos asperiores nostrum cupiditate mollitia sint iste?</p>
                </article>
            </section>
        </section>
    )
}
