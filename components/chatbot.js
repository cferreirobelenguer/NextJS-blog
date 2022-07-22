import React from 'react';
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const estilos = {
    background: "#fff",
    headerBgColor: "#01A1C5",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#bffffc",
    botFontColor: "#464949",
    userBubbleColor: "#ffd0cc",
    userFontColor: "#464949",
    };

    const steps=[
        {
            id: "intro",
            message: "Bienvenido a tu asistente virtual Blog-Dog, queremos asesorarte sobre el cuidado de tu mascota. ¿En qué podemos ayudarte?",
            trigger: "respuesta-intro",
        },
        {
            id: "respuesta-intro",
            options: [
                { value: "cuidado", label: "Asesoramiento sobre el cuidado de mi mascota", trigger: "respuesta-cuidado" },
                { value: "alimentacion", label: "Asesoramiento sobre alimentación", trigger: "respuesta-alimentacion" },
                { value: "deporte", label: "Asesoramiento sobre rutinas de deporte de mi mascota", trigger: "respuesta-deporte" },
                { value: "educacion", label: "Asesoramiento sobre educación de mi perro", trigger: "respuesta-educacion" },
                { value: "cancelar", label: "Salir de la conversación", trigger: "salir" },
            ],
            
        },
        {
            id:"salir",
            message: "Muchas gracias por tu visita a nuestra página Blog Dog, estaremos encantados de volverte a ayudar",
            end:true
        },
        {
            id:"respuesta-cuidado",
            message:"Estás en el menú de cuidado de tu mascota, por favor elige una de las opciones",
            trigger: "cuidados"
        },
        {
            id: "cuidados",
            options: [
                {value: "cuidadoPiel", label:"Cuidado de piel", trigger: "piel"},
                {value: "cuidadoSalud", label: "Cuidado de su salud", trigger: "salud"},
                {value: "cuidadoPelo", label: "Cuidado del pelo", trigger: "pelo"}
            ]

        },
        {
            id:"piel",
            message: "Hidrata a tu perro todo el año. Una correcta hidratación evita que la piel de nuestro perro esté seca y por tanto, tenga un pelo débil y quebradizo. Recuerda tener siempre a su disposición agua limpia y fresca. Cuidar la piel y el pelo de nuestra mascota es esencial para que estén sanos y cuidados.",
            trigger: "respuesta-intro"
        },
        {
            id:"salud",
            message: "En general, es importante procurar una alimentación saludable para ellos, así como favorecer su actividad física y estimular su socialización. También es fundamental ofrecerle cuidados y revisiones veterinarias para controlar su estado de salud y mejorar su calidad de vida.",
            trigger: "respuesta-intro"
        },
        {
            id:"pelo",
            message: "5 CONSEJOS PARA CUIDAR EL PELO DE UN PERRO: cepillar de manera regular, con el cepillo idóneo y en el momento adecuado. ..., bañar acorde al pelo de cada perro. ..., cuidar su alimentación, vital para cuidar el pelo de un perro. ..., mantener la higiene de hocico, cola, ojos y patas. ..., observar el estado del pelo.",
            trigger: "respuesta-intro"
        },
        {
            id:"respuesta-alimentacion",
            message:"Estás en el menú de alimentación de tu mascota, por favor elige una de las opciones ",
            trigger:"alimentos"
        },
        {
            id: "alimentos",
            options: [
                {value: "cachorro", label:"Alimentación para cachorro", trigger: "cachorro"},
                {value: "adulto", label: "Alimentación para perros adultos de tamaño grande", trigger: "adultoGrande"},
                {value: "perrosPeques", label: "Alimentación para perros adultos de tamaño pequeño", trigger: "adultoPeque"},
                {value: "piensosLight", label: "Piensos light", trigger:"light"},
                {value: "piensosNaturales", label: "Piensos naturales", trigger: "natural"}
            ]

        },
        {
            id:"cachorro",
            message: "Puedes probar con Royal Canin Puppy, Advance cachorro; pero nuestro top ten son los piensos de cachorro de Gosbi, son 100 % naturales e hipoalergénicos.",
            trigger: "respuesta-intro"
        },
        {
            id:"adultoGrande",
            message: "Recomendamos la gama Royal Canin Giant",
            trigger: "respuesta-intro"
        },
        {
            id:"adultoPeque",
            message: "Recomendamos la gama Royal Canin mini",
            trigger: "respuesta-intro"
        },
        {
            id:"light",
            message: "Recomendamos la gama Light de Royal Canin, en caso de que quieras piensos naturales sin cereales tienes también la gama light de Lobo Azul 100% natural",
            trigger: "respuesta-intro"
        },
        {
            id:"natural",
            message: "Recomendamos los piensos Gosby o Natura Diet Daily Food, hay perretes que son intolerantes a los cereales con lo cual este tipo de piensos es ideal para ellos.",
            trigger: "respuesta-intro"
        },
        {
            id:"respuesta-deporte",
            message:"No hace falta recordar las numerosas ventajas que tiene practicar ejercicio de manera regular: aclara la mente, previene enfermedades, ayuda a combatir el sobrepeso... Además, el deporte no solo beneficia a los humanos, sino también a nuestras mascotas. Hoy te enseñamos los deportes con perros más destacados en la actualidad: agility, bikejoring, canicross, natación para perros, dog dancing, doga, dock jumping, disc dog, flyball, rally Obedience. Además, ahora que ya vamos acercándonos al verano, es momento de beneficiarse de salir a pasear al perro. Por supuesto, siempre hay que hacerlo con los elementos pertinentes, como una correa adecuada o una botella de agua para hidratarse",
            trigger: "respuesta-intro"
        },
        {
            id:"respuesta-educacion",
            message:"Estás en el menú de educación de tu mascota, por favor dinos si tu perro es cachorro o adulto.",
            trigger:"educa"
        },
        {
            id: "educa",
            options: [
                {value: "cachorro", label:"Educación para cachorro", trigger: "educaCachorro"},
                {value: "adulto", label: "Educación para perros adultos", trigger: "educaAdulto"},
                
            ]
        },
        {
            id:"educaCachorro",
            message: "Una de las mejores maneras de educar a un cachorro es usar de los 2 meses a los 6 meses un parque para cachorros, no solo ayudará a que haga sus necesidades en un sitio determinado, también se trabajará su autonomía, para que el tutor pueda irse de casa con la tranquilidad de que el cachorro ha hecho nada y tendrá su sitio en el que no podrá cometer errores, como morder cosas que no debe morder.",
            trigger: "respuesta-intro"
        },
        {
            id:"educaAdulto",
            message: "10 trucos para adiestrar perros adultos: elige un ambiente con pocas distracciones, organiza sesiones de entrenamiento breves, elige un método de entrenamiento basado en recompensas, utiliza chuches que le gusten, no le grites y mucho menos lo golpees, comienza por enseñarle trucos básicos.",
            trigger: "respuesta-intro"
        },
    ]

const ChatbotReact=()=>{
    return(
        <div>
            <ThemeProvider theme={estilos}>
                <ChatBot
                    headerTitle="Blog Dog"
                    placeholder={"Su mensaje"}
                    steps={steps}
                    floating={true}
                />
            </ThemeProvider>
        </div>
    )
}
export default ChatbotReact;