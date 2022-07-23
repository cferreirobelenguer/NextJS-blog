//url http/localhost:3000/contacto
import React, {useRef, useState} from "react";
import Header from '../components/portada'
import Footer from '../components/footer'
import FotoContacto from '../assets/images/contact.png'
import Image from 'next/image'
import huella from '../assets/images/huella.svg'

    var mensajeDeEnvio;

const Contacto=()=>{
    const [mensajeEnvio, setMensajeEnvio]=useState("");
    var name=useRef(null);
    var email=useRef(null);
    var message=useRef(null);
    
    //se cogen los datos del formularo
    const envioFormulario=(e)=>{
        //para que no se recargue la página cada vez que se de a submit
        e.preventDefault();
        var nombre=name.current.value;
        var correo=email.current.value;
        var mensaje=message.current.value;
        mensajeDeEnvio="Gracias por contactarnos "+nombre+" en breves nos pondremos en contacto contigo al email "+correo+", saludos de parte de Blog Dog "
        console.log(mensajeDeEnvio)
        setMensajeEnvio(mensajeDeEnvio)
    }
    return(
        <div>
            <Header/>
                <div>
                <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className=" bg-white flex flex-col  ">
                            <Image
                                    src={FotoContacto}
                                    alt="imagen contacto"
                                    width={500}
                                    height={400}
                            />
                    </div>
                        
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
                            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black" id="letraLogo"><Image
                                        
                                        src={huella}
                                        alt="imagen logo"
                                        width={25}
                                        height={25}
                                    />&nbsp;Contáctanos</h3>
                            <p className="leading-relaxed mb-5 text-gray-600">¿Tienes dudas, necesitas asesoramiento? Estamos para ayudarte</p>
                                <form onSubmit={envioFormulario}>
                                <div className="relative mb-4">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
                                    <input type="text" id="name" ref={name} name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" ref={email} name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
                                    <textarea id="message" name="message" ref={message} className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button className="text-white bg-sky-300 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg" onSubmit={envioFormulario}>Enviar</button>
                                </form>
                            <p className="text-xs text-gray-500 mt-3">Protegemos tu privacidad de datos</p>
                            <br>
                            </br>
                            <p className="text-xs text-gray-500 mt-3">{mensajeEnvio}</p>
                        </div>
                    </div>
                    </section>
                </div>
            <Footer/>
            
        </div>
    )
}
export default Contacto;