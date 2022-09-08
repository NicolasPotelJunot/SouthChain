import { ButtonMenu } from '../ButtonMenu'
import { ButtonWhatsApp } from '../ButtonWhatsApp'
import { Footer } from '../Footer'
import { ModalMenu } from '../ModalMenu'
import { TitleGradient } from '../ui/TitleGradient'
import { Waves } from '../Waves'
import { Service } from './Service'

export const MantenimientoHogar = () => {
  return (
    <section className=''>

        <ButtonWhatsApp />
        <ButtonMenu />
        <ModalMenu />
        
        <Waves position={"down"} />

        <div className='flex justify-center my-10'>
            <TitleGradient 
            title={"Mantenimiento Hogar"} 
            className={" mx-10 pb-10"}
            />
        </div>       

        <Service 
            title={"Aspiradora Robot"}
            description={"Excelente y cómoda herramienta para ser accionada a través de automatizaciones cuando no hay nadie en casa. Nada como llegar y que esté todo limpio."}
        />

        <Service 
            title={"Regador Automático"}
            description={"Nunca más olvidarte la manguera prendida, pudiendo prenderla en rutina por tiempo y a la hora deseada o bien pudiendo automatizarla en referencia al clima."}
        />

        <Service 
            title={"Alimentador de Mascotas"}
            description={"Con una capacidad de hasta 5hg de comida, puedes automatizar las comidas a la hora exacta o alimentar estes donde estes a tu mascota a gusto desde tu celular."}
        />

        <Waves position={"up"} />
        <Footer />

    </section>
  )
}
