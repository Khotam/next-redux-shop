import fetch from "isomorphic-unfetch";
import ProductsContainer from "../components/productsContainer/ProductsContainer";
import Link from "next/link";

export default function Products({ data }) {
    return (
        <>
            <button>
                <Link href="/show-redux-state">
                    <a>Click to see current Redux State</a>
                </Link>
            </button>
            <button>
                <Link href="/cart">
                    <a>GO TO CART</a>
                </Link>
            </button>

            <ProductsContainer data={data} />
        </>
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
