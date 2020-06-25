import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "../actions";
import Examples from "../components/examples";

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startClock());
    }, [dispatch]);

    return (
        <>
            {/* <Examples /> */}
            <Link href="/show-redux-state">
                <a>Click to see current Redux State</a>
            </Link>
            <Link href="/products">
                <a>
                    <button>See products</button>
                </a>
            </Link>

            <Link href="/cart">
                <a>
                    <button>See cart</button>
                </a>
            </Link>
        </>
    );
};

export default Index;
