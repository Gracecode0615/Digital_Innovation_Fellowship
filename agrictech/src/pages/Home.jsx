import React from "react";

import AboutComp from "../components/AboutComp";
import Blog from "../components/Blog";
import Producttab from "../components/Producttab";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services"
import Slider from "../components/Slider";
import Support from "../components/Support";
import Testimonial from "../components/Testimonial";

import "../App.css";

const Home = () => {
    return (
        <div>
          <Hero/>
          <Support/>  
          <Products/>
          <Services/>
          <AboutComp/>
           <Producttab/>
          {/* <Slider/> */}
          <Testimonial/>
          <Blog/>
          <Slider/>
          <Footer/>
        </div>
    );
};

export default Home;