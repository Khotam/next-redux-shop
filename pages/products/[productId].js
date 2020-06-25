// import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

export default function Product({ data }) {
    const router = useRouter();
    const { productId } = router.query;

    const [product] = data.map((category) => {
        return category.items.find((item) => {
            return item.id === +productId;
        });
    });

    const { name, imageUrl, price } = product;

    console.log("product :>> ", product);

    return (
        <div>
            <div>Product: {productId}</div>
            <div>
                <p>{name}</p>
                <a>
                    <img src={imageUrl} alt="image" />
                </a>
                <p>{price}</p>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const url = "https://api.jsonbin.io/b/5eae8cf5a47fdd6af15ca5d6";
    const secretKey =
        "$2b$10$RsOR2w8Tvb/xA/zP.x4OoedUk1Vp1qkUhKPLf5Z4dNJlWx2SqmoWm";

    const res = await fetch(url, {
        headers: {
            "secret-key": secretKey,
        },
    });
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}
