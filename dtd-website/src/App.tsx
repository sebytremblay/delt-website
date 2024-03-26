import React from "react";
import "../src/Styling/Header.css";
import Header from "./Components/Header";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AlumniDirectory from "../src/Components/Pages/AlumniDirectory";
import BrotherDirectory from "../src/Components/Pages/BrotherDirectory";
import EABoard from "../src/Components/Pages/EABoard";
import Housing from "../src/Components/Pages/Housing";
import Philanthropy from "../src/Components/Pages/Philanthropy";
import Recruitment from "../src/Components/Pages/Recruitment";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Components/Footer";
import { Navigate } from "react-router-dom";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  rel="stylesheet"
></link>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
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
