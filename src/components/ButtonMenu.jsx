import { Squash as Hamburger } from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'
import { open } from "../store/menuSlicer";
import { useEffect, useState } from 'react';



export const ButtonMenu = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state=>state.menuSlice.value)

    const [first, setfirst] = useState()

    useEffect(() => {
      if (selector===false || selector=== null) {
        setfirst("bg-gradient")
      }else{
        setfirst("bg-none")
      }
    }, [selector])
    

    const handleButton=()=>{
      if (selector) {
        dispatch(open(false))        
      }else{
        dispatch(open(true)) 
      }
    }   


  return (
    <button onClick={handleButton} className={`${first} z-20 p-1  rounded-full text-white flex justify-center items-center fixed top-5 left-5`}>
        <Hamburger toggled={selector} size={32} rounded  distance="sm"/>
    </button>
  )
}
