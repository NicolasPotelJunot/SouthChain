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
import { QuienesSomos } from "../QuienesSomos";

export const DashRouters = () => {
  return (
    <main>
      <ButtonMenu />
      <ModalMenu />
      <DesktopMenu />
      <ButtonWhatsApp />

      <Routes>
        {/* general routes */}
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<QuienesSomos />} />

        {/* services */}
        <Route path="/luminaria-smart" element={<LuminariaSmart />} />
        <Route path="/asistente-de-voz" element={<AsistenteVoz />} />
        <Route path="/automatizacion" element={<Automatizacion />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/mantenimiento-hogar" element={<MantenimientoHogar />} />

        <Route path="/*" element={<App />} />
      </Routes>
    </main>
  );
};
