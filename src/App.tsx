// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// CSS Imports
import "../src/Styling/Header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Component Imports
import {
  Header,
  Footer,
  Home,
  AlumniDirectory,
  BrotherDirectory,
  EABoard,
  Housing,
  Philanthropy,
  Recruitment,
} from "./Components";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/ea-board-page" element={<EABoard />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/brother-directory" element={<BrotherDirectory />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
