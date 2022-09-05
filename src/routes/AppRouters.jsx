import {
    Routes,
    Route,
  } from "react-router-dom";
import App from "../App";
import { Contact } from "../Contact";


export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<App />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
