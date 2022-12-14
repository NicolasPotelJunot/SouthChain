import { Footer } from "../Footer";
import { Presupuesto } from "../Presupuesto";
import { TitleGradient } from "../ui/TitleGradient";
import { Waves } from "../Waves";
import { Service } from "./Service";

export const AsistenteVoz = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <Waves position={"down"} />

      <div className="flex justify-center my-10">
        <TitleGradient title={"Asistente de Voz"} className={" mx-10 pb-10"} />
      </div>

      <Service
        title={"Amazon sin pantalla"}
        description={
          "Asistente virtual basado en amazon Alexa, con la que podrás interactuar mediante voz, accediendo a información en tiempo real y ejecución de tareas de todo tipo"
        }
      />

      <Service
        title={"Amazon con pantalla"}
        description={
          "Mismas capacidades que el model sin pantalla, sumando la posibilidad de mostrart los resultados de las búsquedas, videos, instrucciones para cocinar y hasta videollamadas con quien quieras"
        }
      />

      <Service
        title={"Google"}
        description={
          "Asistente virtual basado en Google Assistant, con la que podrás interactuar mediante voz, accediendo a información en tiempo real y ejecución de tareas de todo tipo"
        }
      />

      <Service
        title={"Google Assistant con pantalla"}
        description={
          "Mismas capacidades que el modelo sin pantalla, sumando la posibilidad de mostrarte los resultados de las búsquedas, videos, instrucciones para cocinar y hasta videollamadas con quien quieras."
        }
      />

      <Presupuesto />

      <Waves position={"up"} />
      <Footer />
    </section>
  );
};
