import { VideoView } from "./components"
import { ButtonWhatsApp } from "./components/ButtonWhatsApp"
import { Footer } from "./components/Footer"
import { Services } from "./components/Services"
import { Waves } from "./components/Waves"

export const Home = () => {
  return (
    <>    
      <VideoView />

      <div className="mb-28">
        
        <Waves position="down"/>

        <img src={"isologo-vertical_positivo.png"} className="w-44 sm:w-64 lg:w-96 m-auto"/>

        <div className="p-5 xl:px-80">
          <p className=" sm:text-xl text-center font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique vero accusamus iste praesentium ab aperiam modi error minus, architecto sequi quis! Minus vitae corporis.</p>
        </div>

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
