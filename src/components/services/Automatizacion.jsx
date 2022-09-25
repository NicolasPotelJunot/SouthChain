import { Footer } from "../Footer";
import { Presupuesto } from "../Presupuesto";
import { TitleGradient } from "../ui/TitleGradient";
import { Waves } from "../Waves";
import { Service } from "./Service";

export const Automatizacion = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <Waves position={"down"} />

      <div className="flex justify-center my-10">
        <TitleGradient title={"Automatización"} className={" mx-10 pb-10"} />
      </div>

      <Service
        title={"Termostato WiFi"}
        description={
          "Te permite controlar la calefacción de tu hogar, estés donde estés,combinandolo con rutinas y control a partir de datos meteorológicos de la red y asis maximizar eficiencia y comodidad."
        }
      />

      <Service
        title={"Dedo WiFi"}
        description={
          "FingerBot simula un dedo presionado, para todos aquellos electrodomésticos un poco mas antiguos."
        }
      />

      <Service
        title={"Sensor apertura de puertas o ventanas"}
        description={
          "Sensor inálambrico que detecta la apertura o cierre de puertas o ventanas en tiempo real, pudiendo combinarlo con otros sensores para armar un sistema de seguridad o automatizaciones varias."
        }
      />

      <Service
        title={"Sensor de movimiento o presencia"}
        description={
          "Sensor inálambrico que detecta movimiento y/o presencia en ambientes, pudiendo desencadenar acciones combinadas con otros sensores."
        }
      />

      <Service
        title={"Relay WiFi"}
        description={
          "Relay de accionamiento inalámbrico, permitiendo poner en funcionamiento cualquier artefacto conectado a él, con la posibilidad de esconderlo a la vista e incluirlo en las rutinas y automatizaciones."
        }
      />

      <Service
        title={"Bridge IR-RF"}
        description={
          "El Bridge IR/RF te permite controlar dispositivos que se comuniquen por conexion infrarroja como los aires acondicionados y todos los TV y por conexion de radiofrecuencia como ser los portones automaticos de cocheras y manejarlos al 100% de las funciones, tal como si fuera desde su control remoto pero inalambricamente y en cualquier lado del mundo."
        }
      />

      <Service
        title={"Automatización de cortinas y persianas"}
        description={
          "Estos dos dispositivos te permiten automatizar persianas y cortinas tipo roller para controlarlas inalámbricamente y pudiendo agregarlas a las rutinas y automatizaciones diarias y así nunca olvidar nada abierto o perder tiempo accionandolas manualmente."
        }
      />
      <Service
        title={"Automatización de porton de garage"}
        description={
          "Con este dispositivo vas a poder manejar la apertura y cierre de tu portón donde sea que estés desde tu celular o por voz, manteniendo la posibilidad de hacerlo desde el control remoto original."
        }
      />

      <Presupuesto />

      <Waves position={"up"} />
      <Footer />
    </section>
  );
};
