import React from "react";
import Hero from "../components/Layout/Hero/Hero";
import About from "../components/Features/About/About";
import LatestProducts from "../components/Features/LatestProducts/LatestProducts";
import Projetos from "../components/Features/Projetos/Projetos";
import ContactMain from "../components/Features/ContactMain/ContactMain";

function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <LatestProducts />
      <Projetos />
      <ContactMain />
    </>
  );
}

export default Homepage;
