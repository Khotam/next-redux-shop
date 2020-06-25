import fetch from "isomorphic-unfetch";
import Product from "../components/product.component";

export default function Products({ data }) {
    console.log("data :>> ", data);

    return data.map(({ items, title }) => {
        return items.map((item) => {
            return <Product key={item.id} item={item} />;
        });
    });
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
