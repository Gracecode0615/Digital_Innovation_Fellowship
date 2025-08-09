import React from 'react'
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Categories from '../components/Categories';
import Intro from '../components/Intro';
import Product from '../components/Product'; 
import Deals from '../components/Deals';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
        <Intro/>
        <Header />
        <HeroSlider />
        <Product />
         <div className="homepage-content">
            <h2>Featured Categories</h2>
            <Categories />
         </div>
         <Deals />
         <div className="homepage-content">
            <h2>Popular Products</h2>
            <Product />
         </div>
        <Categories />
         <Deals />
        <Footer />       
    </div>
  )
}

export default Homepage