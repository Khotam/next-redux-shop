import Link from "next/link";
import classes from "./Product.module.css";
import { useCart } from "../../reducers";
import { removeFromCart, addToCart } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ item: product }) => {
    const { price, imageUrl, name, id } = product;

    const dispatch = useDispatch();
    return (
        <div className={classes.item}>
            <p>{name}</p>
            <Link href="/products/[productId]" as={`/products/${id}`}>
                <a>
                    <img src={imageUrl} alt="image" />
                </a>
            </Link>
            <p>{price}</p>
            <button
                onClick={() => {
                    dispatch(addToCart(product));
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Product;
