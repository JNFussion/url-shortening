import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
