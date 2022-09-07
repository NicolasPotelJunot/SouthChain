import { ButtonDetails } from "./ButtonDetails"

export const Services = ({text,title, img}) => {
  return (
    <article>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-24 lg:my-10 px-10">
          <div className="lg:px-9 mb-10 flex flex-col justify-center">

              <h2 className="text-left pb-5 ld:pb-10 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-gradient">
                {title}
              </h2>

              <div className="h-2 xl:h-3 w-3/4 mb-5 bg-gradient rounded-3xl"></div>

              <p className=" text-xl my-10">{text}</p>

              <ButtonDetails/>

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
