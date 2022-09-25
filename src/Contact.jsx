import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Form } from "./components/Form";
import { ButtonSocial } from "./components/ButtonSocial";

export const Contact = () => {
  return (
    <section className="animate__animated animate__fadeIn">

      <img className="top-0 right-0 absolute h-56 xl:h-96 -z-10" src="wave-corner.svg"/>      

      <div className="px-10 py-24 lg:py-10 flex flex-col justify-center items-center animate__animated animate__zoomInDown animate__fast">

        <h1 className="text-primary text-center font-bold text-xl xl:text-5xl mb-2 lg:mt-20 lg:mb-10">
          CONTÁCTANOS
        </h1>

        <Form />

        <aside className="flex mt-5 lg:mt-10">          

          <ButtonSocial href={"https://www.instagram.com/southchain.ar/"} tipeIcon={faInstagram} />

          <ButtonSocial href={"https://www.facebook.com/profile.php?id=100076368545164"} tipeIcon={faFacebookF} />

          <ButtonSocial href={"https://api.whatsapp.com/send?phone=3518046661"} tipeIcon={faWhatsapp} />
               
        </aside>

        <p className="mt-10 text-lg lg:text-xl text-gray-800 bg-white px-1 rounded-xl"> 
          <FontAwesomeIcon icon={faPhone} /> 
          Llamanos al: 5493518046661
        </p>

        <img className="bottom-0 left-0 absolute h-56 xl:h-96 -z-10" src="wave-corner2.svg"/>

      </div>

      
      
      
    </section>
  )
}
