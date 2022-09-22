import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouters } from "./routes/AppRouters";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouters />
    </Provider>
  </React.StrictMode>
);
