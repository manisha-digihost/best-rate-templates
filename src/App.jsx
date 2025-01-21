import React from "react";
import BaseTemplate from "./pages/BaseTemplate";
import BaseTemplate2 from "./pages/BaseTemplate2";
// import Header from "./layout/Hea";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
      <Route Component={BaseTemplate} path="/" element={<BaseTemplate />} />
      <Route Component={BaseTemplate2} path="/base-template-2" element={<BaseTemplate2 />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
