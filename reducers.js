import { combineReducers } from "redux";
import * as types from "./types";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "./actions";
// import { useCallback } from "react";

// CART REDUCER
const addNewProductToCart = (cartItems, cartToAdd) => {
    const isInCart = !!cartItems.find(
        (cartItem) => cartItem.id === cartToAdd.id
    );
    if (isInCart) {
        return cartItems.map((cartItem) => {
            return cartItem.id === cartToAdd.id
                ? { ...cartToAdd, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
    }
    return [...cartItems, { ...cartToAdd, quantity: 1 }];
};

const initialCartState = {
    cartItems: [],
};

const cartReducer = (state = initialCartState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                cartItems: addNewProductToCart(state.cartItems, payload),
            };
        case types.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== payload.id
                ),
            };
        case types.REDUCE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === payload.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                ),
            };
        default:
            return state;
    }
};

// export const useCart = (product) => {
//     const cart = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     const add = () => {
//         dispatch(addToCart(product));
//     };
//     const remove = () => {
//         dispatch(removeFromCart(product));
//     };
//     // const add = useCallback(() => {
//     //     dispatch(addToCart(product));
//     // }, [product]);
//     // const remove = useCallback(() => {
//     //     dispatch(removeFromCart(product));
//     // }, [product]);

//     return { add, remove, cart };
// };

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
    switch (type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        case types.RESET:
            return 0;
        default:
            return state;
    }
};

// INITIAL TIMER STATE
const initialTimerState = {
    lastUpdate: 0,
    light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
    switch (type) {
        case types.TICK:
            return {
                lastUpdate: payload.ts,
                light: !!payload.light,
            };
        default:
            return state;
    }
};

// COMBINED REDUCERS
const reducers = {
    counter: counterReducer,
    timer: timerReducer,
    cart: cartReducer,
};

export default combineReducers(reducers);
