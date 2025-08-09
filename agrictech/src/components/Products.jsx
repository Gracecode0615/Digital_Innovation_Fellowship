import React from 'react'
import search from '../assets/search.png'
import product1 from '../assets/shop-img-02.png'
import product2 from '../assets/shop-img-03.png'
import product3 from '../assets/shop-img-04.png'
import product4 from '../assets/avocado.png'
import star from '../assets/rate-star(2).png'
import cart from '../assets/cart.png'
import leftArrow from '../assets/lefticon.png';
import rightArrow from '../assets/rightIcon.png';


const productData=[
  { id:1, title: "Corn", price: "$45.00",image: "product1"},
  {id:2, title:"Tomatoes", price:"$20.00", image:"product2"},
  {id:3, title:"Cabbage", price:"$30.00", image:"product3"},
   {id:4, title:"kiwi", price:"$60.00", image:"product4"},
];


const Products = () => {
  return (
    <section className='products'>
      <span className='sub-title'>Customer Choice</span>
      <div className="title">
        <h2>Check Our Products</h2>
        <div className='arrow'>
         <span className='arrow-box'>
           <img src={leftArrow} alt="" />
         </span>
          
          <span className='arrow-box'>
           <img src={rightArrow} alt="" />
         </span>        
         </div>
      </div>
<div className="flex-wrapper">
  <div className="col">
    <img src={product1} alt="corn" />
    <div className="write-up">
      <div className="star-icon">
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
    
      </div>
     <h3>Corn</h3>
     <p>$ 20.00</p>
    </div>

    <div className="cart">
    <div className="sub-cart">
      <img src={cart} alt="" />
    </div>
    </div>
  </div>

   <div className="col">
    <img src={product2} alt="corn" />
    <div className="write-up">
      <div className="star-icon">
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
    
      </div>
     <h3>Tomatoes</h3>
     <p>$ 20.00</p>
    </div>

    <div className="cart">
    <div className="sub-cart">
      <img src={cart} alt="" />
    </div>
    </div>
  </div>

   <div className="col">
    <img src={product3} alt="corn" />
    <div className="write-up">
      <div className="star-icon">
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
    
      </div>
     <h3>Cabbage</h3>
     <p>$ 20.00</p>
    </div>

    <div className="cart">
    <div className="sub-cart">
      <img src={cart} alt="" />
    </div>
    </div>
  </div>

   <div className="col">
    <img src={product4} alt="corn" />
    <div className="write-up">
      <div className="star-icon">
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
          <img src={star} alt="rate" />
    
      </div>
     <h3>Kiwi</h3>
     <p>$ 20.00</p>
    </div>

    <div className="cart">
    <div className="sub-cart">
      <img src={cart} alt="" />
    </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default Products