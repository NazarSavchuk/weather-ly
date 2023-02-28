import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./App";
import React from "react";
import store from "./redux/app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
