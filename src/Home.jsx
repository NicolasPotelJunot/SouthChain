import { useEffect } from "react"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { VideoView } from "./components"
import { ButtonWhatsApp } from "./components/ButtonWhatsApp"
import { Footer } from "./components/Footer"
import { Services } from "./components/Services"
import { Waves } from "./components/Waves"

export const Home = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])  

  return (
    <>    
      <VideoView />

      <div className="mb-10 lg:mb-28">
        
        <Waves position="down"/>

        <img data-aos="fade-up" src={"isologo-vertical_positivo.png"} className="w-44 sm:w-64 lg:w-96 m-auto"/>

        <div data-aos="fade-up" className="p-5 xl:px-80 lg:mb-20">
          <p className="sm:text-xl text-center font-semibold">Empresa de Domótica Córdoba Argentina de larga trayectoria. Tenemos capacidad para desarrollar proyectos de diferentes escalas y complejidades. Nuestro estándar de trabajo se basa en la realización de rigurosos análisis de todas las etapas del proyecto desde su diseño hasta su ejecución en obra.</p>
        </div>

        <Waves position="up"/>

      </div>

      <section>

        <Services 
        img={"services/services-luminaria.jpg"}
        title={"Luminaria Smart"}
        text={"Nos permiten controlar luces LED desde una app del celular o un control remoto bluetooth."}
        path={"luminaria-smart"}        
        />

        <Services 
          img={"services/services-asisst.jpg"}
          title={"Asistentes de voz"}
          text={"Podrás interactuar mediante voz, accediendo a información en tiempo real y ejecución, todo tipo de tareas que desees."}
          path={"asistente-de-voz"}
        />

        <Services 
          img={"services/services-automatizacion.jpg"}
          title={"Automatización"}
          text={"Con nuestra tecnologías podrás automatizar el portón de su garage, puertas, ventanas, termostato, cortinas y persianas."}
          path={"automatizacion"}
        />

        <Services 
          img={"services/services-seguridad.jpg"}
          title={"Seguridad"}
          text={"Mejora tu seguridad con tecnología smart,cámaras, sensores y cerraduras inteligentes."}
          path={"seguridad"}
        />

        <Services 
          img={"services/services-mantenimiento.jpg"}
          title={"Mantenimiento del Hogar"}
          text={"Automatiza tus tareas del hogar con tecnologías smart."}
          path={"mantenimiento-hogar"}
        />
        
      </section>

      <Waves position="up" />

      <Footer />
      
      <ButtonWhatsApp />

    </>
  )
}
