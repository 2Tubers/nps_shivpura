import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Admissions from "./Admissions";
import Learning from "./Learning";
import Campus from "./Campus";
import ContactUs from "./ContactUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<><Navbar /><Home/></>} />
          <Route path="/about" element={<> <Navbar /><AboutUs /></>} />
          <Route path="/admissions" element={<> <Navbar /><Admissions/></>} />
          <Route path="/learning" element={<> <Navbar /><Learning/></>} />
          <Route path="/campus" element={<> <Navbar /><Campus/></>} />
          <Route path="/contact" element={<> <Navbar /><ContactUs/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}






export default App;