import { Routes, Route } from "react-router-dom";
import App from "../App";
import { ButtonMenu, ModalMenu } from "../components";
import { ButtonWhatsApp } from "../components/ButtonWhatsApp";
import { DesktopMenu } from "../components/DesktopMenu";
import { AsistenteVoz } from "../components/services/AsistenteVoz";
import { Automatizacion } from "../components/services/Automatizacion";
import { LuminariaSmart } from "../components/services/LuminariaSmart";
import { MantenimientoHogar } from "../components/services/MantenimientoHogar";
import { Seguridad } from "../components/services/Seguridad";
import { Contact } from "../Contact";

export const DashRouters = () => {
  return (
    <main>
      <ButtonMenu />
      <ModalMenu />
      <DesktopMenu />
      <ButtonWhatsApp />

      <Routes>

        {/* general routes */}
        <Route path="/" index element={<App />} />
        <Route path="/contact" element={<Contact />} />

        {/* services */}
        <Route path="/luminaria-smart" index element={<LuminariaSmart />} />
        <Route path="/asistente-de-voz" index element={<AsistenteVoz />} />
        <Route path="/automatizacion" index element={<Automatizacion />} />
        <Route path="/seguridad" index element={<Seguridad />} />
        <Route path="/mantenimiento-hogar" index element={<MantenimientoHogar />} />

        <Route path="/*" element={<App />} />
        
      </Routes>
    </main>
  );
};
