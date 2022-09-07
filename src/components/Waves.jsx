
export const Waves = ({position}) => {

  return (
    <>
      {
      (position==="down")
      ?<div className="mb-10">
          <img src="../../public/wave.svg"/>        
      </div>
      :
      (position==="up")
      ?<div className="mt-10">
          <img src="../../public/wave2.svg"/>        
      </div>
      : <></>
      }
    </>
  )
}
