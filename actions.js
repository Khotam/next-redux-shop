import * as types from "./types";

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
    dispatch({
        type: types.TICK,
        payload: { light: false, ts: Date.now() },
    });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
    setInterval(() => {
        dispatch({
            type: types.TICK,
            payload: { light: true, ts: Date.now() },
        });
    }, 1000);

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });

export const addToCart = (product) => ({
    type: types.ADD_TO_CART,
    payload: product,
});
export const removeFromCart = (product) => ({
    type: types.REMOVE_FROM_CART,
    payload: product,
});
export const reduceCartItemQuantity = (product) => ({
    type: types.REDUCE_CART_ITEM_QUANTITY,
    payload: product,
});
