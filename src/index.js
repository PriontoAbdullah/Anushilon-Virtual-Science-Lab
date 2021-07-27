import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import DataProvider from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
