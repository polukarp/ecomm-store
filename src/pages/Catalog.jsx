import React from 'react';
import Product from '../components/Product';
import { useProducts } from '../hooks/useProducts';
import LayoutWithSidebar from '../layouts/LayoutWithSidebar';

const Catalog = () => {
	const { products } = useProducts();

	console.log(products);

	return (
		<LayoutWithSidebar>
			<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</LayoutWithSidebar>
	);
};

export default Catalog;
