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
            <div className="mt-10 ml-10 mr-10">
            <form className="flex items-center">   
                <label htmlFor="simple-search" class="sr-only">Busca tu post favorito</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por título tu post favorito" required/>
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-300 rounded-lg border border-sky-300 hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Busca por título</span>
                    </button>
            </form>
            </div>
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mt-20 ml-10 mr-10 text-center"><p className="text-black" id="letraLogo"><Image
                                        
                                        src={huella}
                                        alt="imagen logo"
                                        width={25}
                                        height={25}
                                    />&nbsp;Nuestro blog</p></h1>
            <section className="text-gray-600 body-font">
                <div className="container px-10 py-20 ml-2 mx-auto ">
                    <div className="flex flex-wrap -m-4 " id="parrafo">
                        
                        {data.map((i) =>{
                            return(
                                <div className="p-4 " key={i.title}>
                                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-sky-100">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Publicado por {i.nick}</h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{i.title}</h1>
                                        <p className="leading-relaxed mb-3">{i.description}</p>
                                        
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    &nbsp;&nbsp;<p className=" text-xs text-gray-400 mb-10" >Publicado el {i.date}</p>
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