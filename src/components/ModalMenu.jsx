import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { open } from "../store/menuSlicer";

export const ModalMenu = () => {

    const selector = useSelector(state=>state.menuSlice.value)
    const dispatch = useDispatch()

    const handleClosedMenu =()=>{
      dispatch(open(false))
    }

  return (
    <>
      {
        (selector===true)

            ?<nav className={`bg-gradient animate__animated animate__zoomIn animate__faster py-16 z-20 fixed h-screen w-screen text-white flex flex-col justify-between items-center`}>
                
                <div className="flex flex-col">
                  <Link to="/" onClick={handleClosedMenu} className='text-center font-bold text-4xl'>Home</Link>
                  <Link to="/about" onClick={handleClosedMenu} className=' text-center font-bold text-4xl mt-6'>Quienes Somos</Link>
                  <Link to="/contact" onClick={handleClosedMenu} className=' text-center font-bold text-4xl mt-6'>Contacto</Link>
                  <div className=' text-center font-bold text-4xl mt-6'>
                    Soluciones
                    <ul className="grid grid-cols-1 gap-3 pt-3">
                      <Link to="/service/luminaria-smart" onClick={handleClosedMenu} className='text-center font-thin text-lg'>Luminaria Smart</Link>
                      <Link to="/service/seguridad" onClick={handleClosedMenu} className='text-center font-thin text-lg'>Seguridad</Link>
                      <Link to="/service/asistente-de-voz" onClick={handleClosedMenu} className='text-center font-thin text-lg'>Asistente de Voz</Link>
                      <Link to="/service/automatizacion" onClick={handleClosedMenu} className='text-center font-thin text-lg'>Automatizacion</Link>
                      <Link to="/service/mantenimiento-hogar" onClick={handleClosedMenu} className='text-center font-thin text-lg'>Mantenimiento del Hogar</Link>
                    </ul>
                  </div>
                </div>
    
                <img 
                className='h-28' 
                src="isologo-horizontal_negativo-pluma.png" 
                alt="logo southchain" 
                />

            </nav>
            :<></>
      }
    </>    
  )
}
