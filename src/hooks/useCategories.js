import { useState, useEffect } from 'react';

export const useCategories = () => {
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const response = await fetch('https://fakestoreapi.com/products/categories');
			const data = await response.json();
			setCategories(['all', ...data]);
			setLoading(false);
		};
		fetchCategories();
	}, []);

	return { loading, categories };
};
