import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModulePage from "./pages/ModulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module/:id" element={<ModulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
