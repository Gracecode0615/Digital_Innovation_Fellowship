import React from "react";
// import "../style/category.css";
import Product from "./Product";
import { data } from "../Library/stock";
import Heading from "./Heading";

function Categories(props) {
  return (
    <div className="home">
      <Heading heading={props.section} className="heading" />
      <div className="home_row">
        {data
          .filter((filteredData) => filteredData.category === props.section)
          .map((item) => (
            <Product
              id={item.id}
              key={item.id}
              title={item.desc}
              price={item.price}
              rating={item.star}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Categories;
