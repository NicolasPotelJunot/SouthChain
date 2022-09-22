import { Footer } from "../Footer";
import { Presupuesto } from "../Presupuesto";
import { TitleGradient } from "../ui/TitleGradient";
import { Waves } from "../Waves";
import { Service } from "./Service";

export const Seguridad = () => {
  return (
    <section className="">
      <Waves position={"down"} />

      <div className="flex justify-center my-10">
        <TitleGradient title={"Seguridad"} className={" mx-10 pb-10"} />
      </div>

      <Service
        title={"Cerraduras Inteligentes"}
        description={
          "Ideales para cualquier parte de la casa, te permite usar tus datos biométricos, clave numérica, clave de un solo uso para cuando alquien tiene que acceder y no estás, control a distancia, un must have definitivamente."
        }
      />

      <Service
        title={"Cámaras"}
        description={
          "Para interior o exterior, controlas los movimientos de tu hogar desde cualquier lado."
        }
      />

      <Service
        title={"Video Portero"}
        description={
          "Permite visualizar y comunicarte con la persona que está del otro lado de la puerta."
        }
      />

      <Service
        title={"Detector de fugas de agua"}
        description={
          "Permite detectar fugas de agua en cualquier momento, avisando al celular o a tus asistentes virtuales de inmediato."
        }
      />

      <Service
        title={"Seguridad para niños"}
        description={
          "Posibilidad de deshabilitar enchufes, lámparas o cualquier dispositivo eléctrico que no se usen o que estén al alcance y se consideren peligrosos para evitar cualquier accidente indeseado con los niños."
        }
      />

      <Service
        title={"Cerradura biometrica para cajón"}
        description={
          "Cansado de perder la llave o de tener que acordarte de llevarla? Mientras tengas tu dedo con vos, vas a poder abrirla sin problemas!."
        }
      />

      <Service
        title={"Baby Call WiFi"}
        description={
          "Mantente en contacto con tu bebe en todo momento, estes donde estes."
        }
      />

      <Service
        title={"Detector de Humo"}
        description={
          "Sensor de gran utilidad usado para la detección de incendios o principios de incendios, permite avisarte al celular y/o tomar las acciones correspondientes, pudiendo combinarlo con otros sensores o accionadores para tomar medidas remotamente de ser deseado."
        }
      />

      <Presupuesto />

      <Waves position={"up"} />
      <Footer />
    </section>
  );
};
