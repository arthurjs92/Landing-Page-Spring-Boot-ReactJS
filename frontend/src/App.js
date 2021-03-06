import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYouPage from "./ThankYouPage";
import Home from "./Home";
import HomePage from "./HomePage";
import PoliticaDePrivacidade from "./PoliticaDePrivacidade";
import TermosDeUso from "./TermosDeUso";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route
          path="/home"
          element={<Home logged={logged} setLogged={setLogged} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
