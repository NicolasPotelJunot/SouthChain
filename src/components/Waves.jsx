import IMG1 from "../assets/wave.svg";
import IMG2 from "../assets/wave2.svg";

export const Waves = ({position}) => {

  return (
    <>
      {
      (position==="down")
      ?<div className="mb-10">
          <img src={IMG1}/>        
      </div>
      :
      (position==="up")
      ?<div className="mt-10">
          <img src={IMG2}/>        
      </div>
      : <></>
      }
    </>
  )
}
