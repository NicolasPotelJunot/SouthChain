import { useRef } from "react";
import { Link } from "react-router-dom";

export const DesktopMenu = () => {

    const container = useRef()
    
    const handleHover =()=>{
        return container.className("bg-blue-200")
    }


  return (
    <nav className="hidden xl:flex fixed px-6 justify-between z-10 w-full bg-white shadow-lg">
      <img src="isologo-horizontal_positivo.png" className="h-14" />
      <ul className="flex">

        <Link
          to="/"
          className="hover-4 w-40 flex text-center font-bold items-center justify-center px-2"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="hover-4 w-44 flex text-center font-bold items-center justify-center px-2"
        >
          Quienes Somos
        </Link>

        <div
          className="hover-4 cursor-pointer w-48 flex text-center font-bold items-center justify-center px-2 overflow-hidden relative hover:static"             
        >
          Soluciones
          <div ref={container} className={`absolute flex flex-col bg-gradient text-white top-14 w-48`}>
            <Link className="hover:bg-pink-200 px-3 py-4" to={`/service/luminaria-smart`}>Luminaria Smart</Link>
            <Link className="hover:bg-pink-200 px-3 py-4" to={`/service/asistente-de-voz`}>Asistente de voz</Link>
            <Link className="hover:bg-pink-200 px-3 py-4" to={`/service/automatizacion`}>Automatización</Link>
            <Link className="hover:bg-pink-200 px-3 py-4" to={`/service/seguridad`}>Seguridad</Link>
            <Link className="hover:bg-pink-200 px-3 py-4" to={`/service/mantenimiento-hogar`}>Mantenimiento hogar</Link>
          </div>
          
        </div>

        <Link
          to="/contact"
          className="bg-gradient text-white rounded-xl h-12 m-auto w-44 flex text-center font-bold items-center justify-center px-2 ml-5"
        >
          CONTACTO
        </Link>

      </ul>
    </nav>
  );
};
