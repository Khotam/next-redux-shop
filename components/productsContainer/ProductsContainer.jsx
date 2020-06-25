import React from "react";
import classes from "./ProductsContainer.module.css";
import Product from "../product/Product.component";

const ProductsContainer = ({ data }) => {
    return (
        <div className={classes.container}>
            {data.map(({ items, title }) => {
                return items.map((item) => {
                    return <Product key={item.id} item={item} />;
                });
            })}
        </div>
    );
};

export default ProductsContainer;
