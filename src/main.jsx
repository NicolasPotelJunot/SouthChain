import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter} from "react-router-dom";
import {AppRouters}  from "./routes/AppRouters";
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AppRouters />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
