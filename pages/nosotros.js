//url http/localhost:3000/nosotros
import React from "react";
import Header from '../components/portada'
import Footer from '../components/footer'
import FotoNosotros from '../assets/images/nosotros.png'
import Image from 'next/image'
import huella from '../assets/images/huella.svg'


const Nosotros=()=>{
    return(
        <div>
            <Header/>
            <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black" id="letraLogo"><Image
                                        
                                        src={huella}
                                        alt="imagen logo"
                                        width={25}
                                        height={25}
                                    />&nbsp;Sobre nosotros</h3>
                        <p className="mb-8 leading-relaxed">Este blog nace con la idea de ayudar a propietarios de perros y gatos a entender mejor a sus peludos mejorando así su convivencia.

Incluimos consejos sobre nutrición, etología, salud y otros temas que pueden interesar a todo aquel que vive con un animal o pretende hacerlo.</p>
                    </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image          
                        src={FotoNosotros}
                        alt="imagen nosotros"
                        width={450}
                        height={350}
                    />
                </div>
                </div>
            </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Nosotros;