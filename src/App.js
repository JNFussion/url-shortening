import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
