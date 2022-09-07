import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const ButtonWhatsApp = () => {
  return (
    <a 
    className="z-20 text-white bg-green-500 fixed bottom-10 right-20 rounded-full h-16 w-16 flex justify-center items-center text-4xl" 
    target="_blank" 
    href="https://api.whatsapp.com/send?phone=3512185215"
    >              
        <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  )
}
