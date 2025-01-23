import React from "react";
import BaseTemplate from "./pages/BaseTemplate";
import Template1 from "./pages/Template1";
import Template2 from "./pages/Template2";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { Routes, Route } from "react-router-dom";
import Template3 from "./pages/Template3";
import Template4 from "./pages/Template4";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<BaseTemplate />} />
        <Route path="/base-template-2" element={<Template1 />} />
        <Route path="/base-template-3" element={<Template2 />} />
        <Route path="/base-template-4" element={<Template3 />} />
        <Route path="/base-template-5" element={<Template4 />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
