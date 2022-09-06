import { VideoView } from "./components"
import { Waves } from "./components/Waves"

export const Home = () => {
  return (
    <>

      <VideoView />

      <div>
        <Waves/>
        <img src="../public/isologo-vertical_positivo.png" className="w-44 m-auto"/>
        <p className="p-5 text-center font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique vero accusamus iste praesentium ab aperiam modi error minus, architecto sequi quis! Minus vitae corporis.</p>
      </div>

    </>
  )
}
