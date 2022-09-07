import { ButtonMenu, ModalMenu } from "./components"
import { Input, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export const Contact = () => {
  return (
    <section className="">

      <ButtonMenu />
      <ModalMenu />     

      <div className="p-10 h-screen w-screen flex flex-col justify-center items-center animate__animated animate__zoomInDown animate__fast">

        <h1 className="text-primary text-center font-bold text-xl xl:text-5xl mb-10">
          CONTÁCTANOS
        </h1>

        <form className="grid gap-10 w-full">
          <div className="w-96 xl:w-1/3 m-auto">
            <Input label="NOMBRE" required/>
          </div>
          <div className="w-96 xl:w-1/3 m-auto">
            <Input label="APELLIDO" required/>
          </div>
          <div className="w-96 xl:w-1/3 m-auto">
            <Input label="EMAIL" required type="email"/>
          </div>
          <div className="w-96 xl:w-1/3 m-auto">
            <Input label="TELEFONO" required type="tel"/>
          </div>
          <Button type="submit" className="bg-gradient w-20 flex py-2 justify-center items-center m-auto text-base">ENVIAR</Button>
        </form>

        <aside className="flex mt-10">
          <a 
           className="rounded-full h-14 w-14 flex items-center justify-center bg-gradient text-white text-3xl mx-1 cursor-pointer" 
           target="_blank" 
           href="https://www.instagram.com/southchain.ar/"
          >
              <FontAwesomeIcon icon={faInstagram} />                
          </a>
          <a 
           className="rounded-full h-14 w-14 flex items-center justify-center bg-gradient text-white text-3xl mx-1 cursor-pointer" 
           target="_blank" 
           href="https://www.facebook.com/profile.php?id=100076368545164"
          >
              <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a 
           className="rounded-full h-14 w-14 flex items-center justify-center bg-gradient text-white text-3xl mx-1 cursor-pointer" 
           target="_blank" 
          >
              <FontAwesomeIcon icon={faWhatsapp} />
          </a>

        </aside>

      </div>

      <img className="top-0 right-0 absolute h-56  xl:h-96 -z-10" src="../../public/wave-corner.svg"/>
      <img className="bottom-0 left-0 absolute h-56 xl:h-96 -z-10" src="../../public/wave-corner2.svg"/>
      
    </section>
  )
}
