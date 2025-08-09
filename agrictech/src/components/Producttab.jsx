import React from 'react'
import tomatoes from '../assets/shop-img-03.png'
import Cabbage from '../assets/shop-img-04.png'
import Carrot from '../assets/carrot.png'
import banana from '../assets/banana.png'
import avocado from '../assets/avocado.png'
import orange from '../assets/orange.png'
import watermelon from '../assets/watermelon.png'
import purplecabbage from '../assets/purple_cabbage.png'
import pear from '../assets/pear.png'



const products = [
  {name:"Cabbage",oldPrice:"$20.00", newPrice:"$10.00", image:Cabbage},
   {name:"tomato",oldPrice:"$20.00", newPrice:"$10.00", image:tomatoes},
    {name:"Carrot",oldPrice:"$20.00", newPrice:"$10.00", image:Carrot},
     {name:"avacado",oldPrice:"$20.00", newPrice:"$10.00", image:avocado},
      {name:"purple cabbage",oldPrice:"$20.00", newPrice:"$10.00", image:purplecabbage},
       {name:"pear",oldPrice:"$20.00", newPrice:"$10.00", image:pear},
        {name:"orange",oldPrice:"$20.00", newPrice:"$10.00", image:orange},
         {name:"banana",oldPrice:"$20.00", newPrice:"$10.00", image:banana},
          {name:"water melon",oldPrice:"$20.00", newPrice:"$10.00", image:watermelon},
]

const Producttab = () => {
  return (
    <section className='product-section'>
          <div className="top-header">
              <span className='sub-title'>Our Product</span>
             <h2 className='title' >Products Delivered to Home</h2>

            <div className="tab">
                    <span className="active">On Sale Product</span>
                    <span>Fresh organic Fruits</span>
                    <span>Featured Product</span>
             </div>
          </div>

           <div className="grid">
            {products.map((product, index)=>
              <div className="card" key={index}>
                <img src={product.image} alt={product.name} />

              <div className="flex-col">
                <h4>{product.name}</h4>
                <div className="price">
                  <span>{product.oldPrice}</span>
                  <span>{product.newPrice}</span>
                </div>
              </div>

              </div>   
            )}
      </div>

    </section>
  )
}

export default Producttab