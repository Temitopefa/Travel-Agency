import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Region from "../components/Region";
import Locations from "../components/Locations";
import Resort from "../components/Resort";
import View from "../components/View";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative">
        <Hero />
      </div>
      <Brands />
      <Region />
      <Locations />
      <Resort />
      <View />
      <Footer />
    </div>
  );
};

export default Home;
