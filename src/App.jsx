// import React from 'react'

import Accordion from "./components/Accordion/Accordion";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar";
import Server from "./components/servers/Server.jsx";
import LandingTwo from "./components/landingTwo/LandingTwo.jsx";
import Feature from "./components/Features/Feature.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Landing />
      <Feature />
      <LandingTwo />
      <Server />

      <Accordion />
      <Footer />

    </>
  );
};

export default App;
