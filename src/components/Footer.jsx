import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="py-8 lg:px-10 flex">      

        <img src="../../public/isologo-horizontal_positivo.png" className="h-20 sm:h-44" />

        <div className="flex flex-col justify-center items-center">

            <p className="text-center mb-2 font-medium">SEGUINOS EN :</p>

            <div className="flex items-center">
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
            </div>
        </div>
        

    </footer>
  )
}
