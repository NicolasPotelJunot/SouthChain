import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Service = ({title,description}) => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])  

  return (
    <article  className="px-4 sm:px-10 mb-8 lg:mb-24 md:px-20 lg:grid lg:grid-cols-2">
        <img data-aos="zoom-in" src={`products/${title}.jpg`} className=""/>
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h3 className="text-center lg:text-left font-bold my-5 text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            {title}
          </h3>
          <p className="md:text-xl mt-10">{description}</p>
        </div>
    </article>
  )
}
