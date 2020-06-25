import { useSelector } from "react-redux";
import CartItem from "../components/cartItem/CartItem.component";
import { useRouter } from "next/router";

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const router = useRouter();

    return cartItems.length ? (
        cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
        ))
    ) : (
        <div>
            <p>No Items</p>
            <button onClick={() => router.push("/products")}>Go to shop</button>
        </div>
    );
}
