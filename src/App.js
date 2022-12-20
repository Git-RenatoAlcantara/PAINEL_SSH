import "./styles.css";

import { Routes, Route } from "react-router-dom";
import Rotas from "./pages/adminPage";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

//npm install @mui/material @emotion/react @emotion/styled
