import { createStore, createEvent } from 'effector';

export const setCategory = createEvent();

export const $currentCategory = createStore('all').on(
	setCategory,
	(_, category) => category,
);
