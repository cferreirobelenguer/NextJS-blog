
import { Html, Head, Main, NextScript } from 'next/document'
//representa la página, este archivo sólo se procesa en el servidor
const Document=()=>{
    return(
        <Html land='es'>
            <Head/>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
export default Document;