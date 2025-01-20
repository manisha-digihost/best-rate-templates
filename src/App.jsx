import React from "react";
import Template from "./pages/Template";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Template />
      <Footer />
    </div>
  );
};

export default App;
