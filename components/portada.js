
import Link from 'next/link'
import Image from 'next/image'
import huella from '../assets/images/huella.svg'

const Portada=()=>{
    return(
        <div className="portada">
            <div className="NavegacionResponsive">
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl" id="letraLogo">
                            <Image       
                                src={huella}
                                alt="imagen logo portada"
                                width={15}
                                    height={15}
                            />&nbsp;Blog Dog</span>
                        </a>
                        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                            <Link href="/" className="mr-5 hover:text-gray-900">Blog</Link>&nbsp;&nbsp;
                            <Link href="/nosotros" className="mr-5 hover:text-gray-900">Nosotros</Link>&nbsp;&nbsp;
                            <Link href="/contacto" className="mr-5 hover:text-gray-900">Contacto</Link>
                        </nav>
                        
                    </div>
            </header>
        </div>
            
    </div>
    )
}
export default Portada;