import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import { AuthProvider } from "./hooks/useAuth";
import { DatabaseProvider } from "./hooks/useDatabase";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DatabaseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DatabaseProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
