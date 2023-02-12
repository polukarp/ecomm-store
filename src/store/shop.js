import { createStore, createEvent, createEffect } from 'effector';

const $shop = createStore([]);

const addProduct = createEvent();
const removeProduct = createEvent();

$shop.on(addProduct, (state, product) => [...state, product]);
$shop.on(removeProduct, (state, product) => state.filter((p) => p.id !== product.id));
