import {
    Routes,
    Route,
  } from "react-router-dom";
import App from "../App";
import { AsistenteVoz } from "../components/services/AsistenteVoz";
import { Automatizacion } from "../components/services/Automatizacion";
import { LuminariaSmart } from "../components/services/LuminariaSmart";
import { MantenimientoHogar } from "../components/services/MantenimientoHogar";
import { Seguridad } from "../components/services/Seguridad";
import { Contact } from "../Contact";


export const AppRouters = () => {
  return (
    <Routes>

      {/* general routes */}
      <Route path="/" element={<App />} />
      <Route path="/*" element={<App />} />
      <Route path="/contact" element={<Contact />} />


      {/* services */}
      <Route path="/service/luminaria-smart" element={<LuminariaSmart />} />
      <Route path="/service/asistente-de-voz" element={<AsistenteVoz />} />
      <Route path="/service/automatizacion" element={<Automatizacion />} />
      <Route path="/service/seguridad" element={<Seguridad />} />
      <Route path="/service/mantenimiento-hogar" element={<MantenimientoHogar />} />

    </Routes>
  )
}
