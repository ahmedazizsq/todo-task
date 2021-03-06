import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
import App from "./containers/App";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
