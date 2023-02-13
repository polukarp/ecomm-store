import { createStore, createEvent } from 'effector';

export const $cart = createStore([]);

export const addProduct = createEvent();
export const removeProduct = createEvent();
export const clearCart = createEvent();

$cart.on(addProduct, (state, product) => {
	return [...state, product];
});

$cart.on(removeProduct, (state, id) => {
	return state.filter((item) => item.id !== id);
});

$cart.on(clearCart, () => []);
