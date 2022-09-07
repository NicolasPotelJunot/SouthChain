import { ButtonMenu, ModalMenu } from "./components"
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Form } from "./components/Form";

export const Contact = () => {
  return (
    <section className="">

      <ButtonMenu />
      <ModalMenu />     

      <div className="p-10 h-screen w-screen flex flex-col justify-center items-center animate__animated animate__zoomInDown animate__fast">

        <h1 className="text-primary text-center font-bold text-xl xl:text-5xl mb-10">
          CONTÁCTANOS
        </h1>

        <Form />

        <aside className="flex mt-10">

          <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-gradient text-white text-3xl mx-4 cursor-pointer"> 
            <a 
            className="text-center h-14 w-14 flex items-center justify-center" 
            target="_blank" 
            href="https://www.instagram.com/southchain.ar/"
            >
                <FontAwesomeIcon icon={faInstagram} />                
            </a>
          </Button>

          <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-gradient text-white text-3xl mx-4 cursor-pointer"> 
            <a 
            className="text-center h-14 w-14 flex items-center justify-center" 
            target="_blank" 
            href="https://www.facebook.com/profile.php?id=100076368545164"
            >              
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </Button>          
          
          <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-gradient text-white text-3xl mx-4 cursor-pointer"> 
            <a 
            className="text-center h-14 w-14 flex items-center justify-center" 
            target="_blank" 
            href="https://api.whatsapp.com/send?phone=3512185215"
            >              
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </Button>  
               
        </aside>

        <p className="mt-10 text-lg lg:text-xl text-gray-800"> <FontAwesomeIcon icon={faPhone} /> Llamanos al: 3512185215</p>

      </div>

      <img className="top-0 right-0 absolute h-56  xl:h-96 -z-10" src="../../public/wave-corner.svg"/>
      <img className="bottom-0 left-0 absolute h-56 xl:h-96 -z-10" src="../../public/wave-corner2.svg"/>
      
    </section>
  )
}
