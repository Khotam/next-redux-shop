import React from "react";
import {
    removeFromCart,
    reduceCartItemQuantity,
    addToCart,
} from "../../actions";
import { useDispatch } from "react-redux";

const CartItem = ({ item: product }) => {
    const { name, price, imageUrl, quantity } = product;
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(addToCart(product));
    };
    const decrementHandler = () => {
        if (quantity === 1) {
            dispatch(removeFromCart(product));
        } else {
            dispatch(reduceCartItemQuantity(product));
        }
    };
    const removeHandler = () => {
        dispatch(removeFromCart(product));
    };

    return (
        <div>
            <p>{name}</p>
            <img src={imageUrl} alt="image" />
            <button onClick={removeHandler}>DELETE</button>
            <p>{price}</p>
            <button onClick={incrementHandler}>+++</button>
            <p>{quantity ? quantity : 0}</p>
            <button onClick={decrementHandler}>---</button>
        </div>
    );
};

export default CartItem;
