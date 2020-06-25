import Link from "next/link";

const Product = ({ item: { price, imageUrl, name, id } }) => {
    return (
        <div>
            <p>{name}</p>
            <Link href="/products/[productId]" as={`/products/${id}`}>
                <a>
                    <img src={imageUrl} alt="image" />
                </a>
            </Link>
            <p>{price}</p>
        </div>
    );
};

export default Product;
