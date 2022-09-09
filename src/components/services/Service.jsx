
export const Service = ({title,description}) => {
  return (
    <article className="px-4 sm:px-10 md:px-20 lg:grid lg:grid-cols-2 mb-24">
        <img src={`${title}.jpg`} className=""/>
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h3 className="text-center lg:text-left font-bold my-5 text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            {title}
          </h3>
          <p className="md:text-xl mt-10">{description}</p>
        </div>
    </article>
  )
}
