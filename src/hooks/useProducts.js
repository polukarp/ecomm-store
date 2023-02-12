import { useState, useEffect } from 'react';

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setProducts(data);
			setLoading(false);
		};

		fetchProducts();
	}, []);

	return { products, loading };
};
