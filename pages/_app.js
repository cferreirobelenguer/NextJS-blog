import '../styles/index.css';
import Head from 'next/head';
import '../styles/estilos.css'

//Head

const Myapp=({Component,pageProps})=>{
    return(
        <div>
            <Head>
            <meta name="viewport" content="initial-scale=1"/>
            <title>Blog de perros</title>
            <meta name='blog' content="blog" key="blog de perros" />
            </Head>
            <Component {...pageProps}/>
        </div>
    )
}
export default Myapp;