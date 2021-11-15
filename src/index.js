import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App.jsx";
import { Provider } from "react-redux";
import data from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={data.store}>
      <PersistGate loading={null} persistor={data.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
