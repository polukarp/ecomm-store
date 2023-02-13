import { useState, useEffect } from 'react';

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState('all');

	if (category === 'all') {
		setCategory('');
	}

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(`https://fakestoreapi.com/products${category}`);
			const data = await response.json();
			setProducts(data);
			setLoading(false);
		};
		fetchProducts();
	}, [category]);

	return { products, loading, setCategory };
};
