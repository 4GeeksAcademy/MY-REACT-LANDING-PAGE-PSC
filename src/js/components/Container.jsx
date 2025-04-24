import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Container = () => {
    return (

        <div className="container-md">
            <div className="row">

                <div className="col-12">
                    <Jumbotron
                        primaryText="PROYECTO LANDING PAGE CON REACT"
                        secondaryText="Lo que realmente queremos lograr con este ejercicio es que aprendas a decidir qué componentes vas a crear, ¿Qué crees que deba ser un componente? ¿Qué se va a reutilizar? ¿Cómo puedes hacer que tu código quede realmente ordenado y prevenir futuros errores? Lo más seguro es que tienes que dividir tu código en componentes: <Jumbotron />, <Navbar />, <Card />."
                        buttonUrl="https://es.react.dev/"
                        buttonLabel="Conoce React"
                    />
                </div>
                <div className="col-3">
                    <Card
                        cardTitle="HTML Language"
                        cardText="El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos."
                        buttonUrl="https://reactjs.org/"
                        buttonLabel="Ir al sitio oficial"
                        imageSource="https://c4.wallpaperflare.com/wallpaper/453/129/282/html5-hyper-text-markup-language-html-wallpaper-preview.jpg"
                    />

                </div>
                <div className="col-3">
                    <Card cardTitle="JavaScript Language"
                        cardText="JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web."
                        buttonUrl="https://reactjs.org/"
                        buttonLabel="Ir al sitio oficial"
                        imageSource="https://i0.wp.com/niaxus.com/wp-content/uploads/2025/02/vrchyzq6javascript_1705438000.png"
                    />
                </div>
                <div className="col-3">
                    <Card cardTitle="CSS Language"
                        cardText="El CSS podría definirse como un tipo de lenguaje que permite definir y crear la presentación visual de un documento ya estructurado y escrito en un lenguaje de marcado como puede ser HTML. Es decir, permite generar el diseño visual de páginas web e interfaces de usuario."
                        buttonUrl="https://reactjs.org/"
                        buttonLabel="Ir al sitio oficial"
                        imageSource="https://miro.medium.com/v2/resize:fit:1400/1*nJYxUo-Qvk4MnYzymrQ8uA.png"
                    />
                </div>
                <div className="col-3">
                    <Card cardTitle="Gid Hub"
                        cardText="GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc."
                        buttonUrl="https://reactjs.org/"
                        buttonLabel="Ir al sitio oficial"
                        imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7n_SGA2GL8dLpP1icLARdpxRe-l6-PRzKHy6XHAqdDWSPh7ygGWRd4VdguPVcKA2uio&usqp=CAU"
                    />
                </div>
            </div>
        </div>

    )
};


export default Container