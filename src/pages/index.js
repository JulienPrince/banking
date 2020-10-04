import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Services from "../components/Services";
import {
  HomeObjOne,
  HomeObjThree,
  HomeObjTo,
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTo} />
      <Services />
      <InfoSection {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
