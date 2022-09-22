import { NavLink } from "react-router-dom";

export const DesktopMenu = () => {


  return (
    <nav className="hidden xl:flex fixed px-6 justify-between z-10 w-full bg-white shadow-lg">

        <NavLink
          to="/"
          className=""
        >
          <img src="isologo-horizontal_positivo.png" className="h-14" />
        </NavLink>

      <ul className="flex">

        <NavLink
          to="/"
          className="hover-4 w-40 flex text-center font-bold items-center justify-center px-2"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="hover-4 w-44 flex text-center font-bold items-center justify-center px-2"
        >
          Quienes Somos
        </NavLink>

        <div
          className="hover-4 cursor-pointer w-48 flex text-center font-bold items-center justify-center px-2 overflow-hidden relative hover:static"             
        >
          Soluciones
          <div className={`absolute flex flex-col bg-gradient text-white top-14 w-48`}>
            <NavLink className="hover-solucion px-3 py-4" to={`/luminaria-smart`}>Luminaria Smart</NavLink>
            <NavLink className="hover-solucion px-3 py-4" to={`/asistente-de-voz`}>Asistente de voz</NavLink>
            <NavLink className="hover-solucion px-3 py-4" to={`/automatizacion`}>Automatización</NavLink>
            <NavLink className="hover-solucion px-3 py-4" to={`/seguridad`}>Seguridad</NavLink>
            <NavLink className="hover-solucion px-3 py-4" to={`/mantenimiento-hogar`}>Mantenimiento hogar</NavLink>
          </div>
          
        </div>

        <NavLink
          to="/contact"
          className="bg-gradient text-white rounded-xl h-12 m-auto w-44 flex text-center font-bold items-center justify-center px-2 ml-5 hover:shadow-md hover:shadow-gray-500"
        >
          CONTACTO
        </NavLink>

      </ul>
    </nav>
  );
};
