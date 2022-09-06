
export const VideoView = () => {
  return (
    <div className="w-full h-screen animate__animated animate__fadeIn">
      <video className=" bg-black h-full w-full" autoPlay muted loop>
          <source src="../../public/20220516_172713.mp4" type="video/mp4" className="m-0"/>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}
