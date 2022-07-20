import axios from 'axios'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import huella from '../assets/images/huella.svg'

const Blog=()=>{
    
    const [data, setData]=useState([]);
    
    const mostrarDatos=()=>{
        axios.get('https://blog-dog.herokuapp.com/all/')
        .then(res=>{
            setData(res.data.publicaciones)
            
        })
        
    }
    const stop=()=>{
        console.log("Se para la ejecución")
    }
    //it shows the data only when the state is zero before rendering
    useEffect(() => {
        if (data.length == 0) {
            mostrarDatos();
        }
        return () => {
        if (data.length > 0) {
            stop()
        }
        };
        }, [data, mostrarDatos,stop]);
    
    return(
        <div className="blog">
            <section className="text-gray-600 body-font">
                <div className="container px-10 py-24 ml-2 mx-auto ">
                    <div className="flex flex-wrap -m-4 " id="parrafo">
                        
                        {data.map((i) =>{
                            return(
                                <div className="p-4 " key={i.title}>
                                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-sky-100">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Publicado por {i.nick}</h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{i.title}</h1>
                                        <p className="leading-relaxed mb-3">{i.description}</p>
                                        
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <Image
                                        
                                        src={huella}
                                        alt="imagen logo"
                                        width={15}
                                        height={15}
                                    />&nbsp;&nbsp;<p className="text-black" id="letraLogo">Dog blog</p>
                                    </div>
                                </div>
                            </div>
                            );
                        } )}
                            
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Blog;