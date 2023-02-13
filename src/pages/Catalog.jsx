import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useProducts } from '../hooks/useProducts';
import LayoutWithSidebar from '../layouts/LayoutWithSidebar';
import ProductsLayout from '../layouts/ProductsLayout';
import { $currentCategory } from '../store/shop';
import { useStore } from 'effector-react';

const Catalog = () => {
	const category = useStore($currentCategory);
	const { products, loading, setCategory } = useProducts();

	useEffect(() => {
		setCategory(category);
	}, [setCategory, category]);

	return (
		<LayoutWithSidebar>
			<ProductsLayout>
				{loading && <p>Loading...</p>}
				{products
					.filter((product) => category === 'all' || product.category === category)
					.map((product) => (
						<Product key={product.id} {...product} />
					))}
			</ProductsLayout>
		</LayoutWithSidebar>
	);
};

export default Catalog;
