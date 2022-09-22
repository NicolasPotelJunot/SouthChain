import { HashRouter } from "react-router-dom";
import { DashRouters } from "./DashRouters";

export const AppRouters = () => {
  return (
    <HashRouter>
      <DashRouters />
    </HashRouter>
  );
};
