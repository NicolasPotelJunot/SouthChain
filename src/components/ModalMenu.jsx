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

            ?<nav className={` bg-gradient animate__animated animate__zoomIn animate__faster z-10 fixed  h-screen w-screen text-white font-bold text-5xl lg:text-6xl flex flex-col justify-center items-center`}>
                
                <Link to="/" onClick={handleClosedMenu} className=' link-menu'>Home</Link>
                <Link to="/contact" onClick={handleClosedMenu} className='mt-14  link-menu'>Contacto</Link>
    
                <img 
                className='h-20 lg:h-36 absolute bottom-10' 
                src="../../public/isologo-horizontal_negativo-pluma.png" 
                alt="logo southchain" 
                />

            </nav>
            :<></>
      }
    </>    
  )
}
