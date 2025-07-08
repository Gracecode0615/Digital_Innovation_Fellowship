import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import BlogPreview from "../components/BlogPreview";
import Testimonies from "../components/Testimonies";
import ContactForm from "../components/ContactForm";
import "../App.css";

const Home = () => {
    return (
        <div>
          <HeroSection/>
          <AboutSection/>
          <Services/>
          <Testimonies/>
          <BlogPreview/>
          <ContactForm/>
        </div>
    );
};

export default Home;