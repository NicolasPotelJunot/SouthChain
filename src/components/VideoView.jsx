import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react";
// import VIDEO from "../assets/banner.mp4";

export const VideoView = () => {
  return (
    <div className="w-full h-screen animate__animated animate__fadeIn">
      <video className=" bg-black h-full w-full" autoPlay muted loop>
          {/* <source src={VIDEO} type="video/mp4" className="m-0"/> */}
          <source src={"banner.mp4"} type="video/mp4" className="m-0"/>
        Your browser does not support HTML5 video.
      </video>
      <div className="w-full flex justify-center">
        <Button className="text-white text-lg lg:text-2xl py-1 px-4 lg:py-2 rounded-xl bg-gradient relative bottom-36 lg:bottom-48">
          <Link to="/contact">
            CONTACTANOS
          </Link>          
        </Button>        
      </div>
    </div>
  )
}
