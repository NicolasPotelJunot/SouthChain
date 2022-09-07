import { VideoView } from "./components"
import { Footer } from "./components/Footer"
import { Services } from "./components/Services"
import { Waves } from "./components/Waves"

export const Home = () => {
  return (
    <>

      <VideoView />

      <div className="mb-28">
        
        <Waves position="down"/>

        <img src="../public/isologo-vertical_positivo.png" className="w-44 sm:w-64 lg:w-96 m-auto"/>

        <div className="p-5 xl:px-80">
          <p className=" sm:text-xl text-center font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique vero accusamus iste praesentium ab aperiam modi error minus, architecto sequi quis! Minus vitae corporis.</p>
        </div>

      </div>

      <Services />

      <Waves position="up" />
      <Footer />

    </>
  )
}
