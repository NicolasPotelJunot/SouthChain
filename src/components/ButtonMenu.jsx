import { Squash as Hamburger } from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'
import { open } from "../store/menuSlicer";
import { useEffect, useState } from 'react';



export const ButtonMenu = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state=>state.menuSlice.value)

    const [isOpen, setOpen] = useState(false)
    const [first, setfirst] = useState()

    useEffect(() => {
      
      if (selector || selector=== null) {
        setfirst("bg-gradient")
      }else{
        setfirst("bg-none")
      }
    }, [])

    const handleButton=()=>{
      if (isOpen) {
        setOpen(false)
      }else{
        setOpen(true)
      }

      dispatch(open(isOpen))
    }
    


  return (
    <button onClick={handleButton} className={`${first} z-20 p-1 rounded-full text-white flex justify-center items-center absolute top-5 left-5`}>
        <Hamburger toggled={isOpen} size={32} rounded  distance="sm"/>
    </button>
  )
}
