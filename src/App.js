import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service"
import Works from "./component/Works";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/Works" Component={Works} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
