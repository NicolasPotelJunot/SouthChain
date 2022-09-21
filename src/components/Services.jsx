import { Link } from "react-router-dom"
import { ButtonDetails } from "./ButtonDetails"
import { TitleGradient } from "./ui/TitleGradient"

export const Services = ({text,title, img, path}) => {
  return (
    <article>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-14 lg:py-20 lg:my-10 px-10">
          <div className="lg:px-9 mb-10 flex flex-col justify-center">

              <TitleGradient title={title}/>

              <div className="h-2 xl:h-3 w-3/4 mb-5 bg-gradient rounded-3xl"></div>

              <p className=" text-xl xl:text-3xl my-10">{text}</p>

              <Link to={`/service/${path}`}>
                <ButtonDetails description={"Mas detalles"}/>
              </Link>

          </div>
          <div className="">
              <div className="bg-gradient lg:w-3/4 p-1 lg:p-2 m-auto">
                  <img src={img} className="w-full" />
              </div>
          </div>
        </div>        

    </article>
  )
}
