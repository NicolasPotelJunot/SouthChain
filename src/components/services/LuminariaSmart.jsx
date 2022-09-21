import { ButtonMenu } from '../ButtonMenu'
import { ButtonWhatsApp } from '../ButtonWhatsApp'
import { DesktopMenu } from '../DesktopMenu'
import { Footer } from '../Footer'
import { ModalMenu } from '../ModalMenu'
import { Presupuesto } from '../Presupuesto'
import { TitleGradient } from '../ui/TitleGradient'
import { Waves } from '../Waves'
import { Service } from './Service'

export const LuminariaSmart = () => {

  return (
    <section className=''>

        <ButtonWhatsApp />
        <ButtonMenu />
        <ModalMenu />
        <DesktopMenu />
        
        <Waves position={"down"} />


        <div className='flex justify-center my-10'>
            <TitleGradient 
            title={"Luminaria Smart"} 
            className={" mx-10 pb-10"}
            />
        </div>

        <Service 
            title={"Tecla WiFi táctil o con pulsador"}
            description={"Control inalámbrico de luces, posibilidad de crear rutinas y accionarlas con control remoto ¿Te olvidaste de poner la tecla de luz en algun lado? ¡Esto lo soluciona! Sin cableado ni construcción alguna."}
        />

        <Service 
            title={"Tomas WiFi externas y embutidas"}
            description={"Control de encendido y apagado de cualquier dispositivo conectado a la toma, pudiendo generar rutinas y medir su consumo energético"}
        />

        <Service 
            title={"Focos"}
            description={"Bombillas que se conectan a la red Wifi permitiendo encenderlas, apagarlas, incluirlas en rutinas y cambiarles de color a gusto"}
        />

        <Presupuesto />
        
        <Waves position={"up"} />
        <Footer />

    </section>
  )
}
