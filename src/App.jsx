import { useEffect, useState } from "react";
import Navbar from "./comonents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./comonents/Footer";
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  },[])
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
