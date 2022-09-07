import { ButtonDetails } from "./ButtonDetails"

export const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-24">
        <article className="px-9 2xl:px-56 mb-10">
            <h2 className="text-left text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-semibold text-gradient">Luminaria<br/> Smart</h2>

            <div className="h-2 xl:h-3 w-3/4 my-5 bg-gradient rounded-3xl"></div>

            <p className=" text-xl my-10">Nos permiten controlar luces LED desde una app del celular o un control remoto bluetooth</p>

            <ButtonDetails/>

        </article>
        <div className="">
            <div className="bg-gradient w-3/4 p-1 lg:p-2 m-auto">
                <img src="../../public/services.jpg" className="w-full" />
            </div>
        </div>
    </section>
  )
}
