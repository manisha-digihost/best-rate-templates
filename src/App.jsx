import React from "react";
import BaseTemplate from "./pages/BaseTemplate";
import BaseTemplate2 from "./pages/BaseTemplate2";
// import Header from "./layout/Hea";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<BaseTemplate />} />
          <Route path="/base-template-2" element={<BaseTemplate2 />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
