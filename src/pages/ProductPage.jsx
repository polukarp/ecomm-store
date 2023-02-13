import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useLocation } from 'react-router-dom';

//PROBLEM: page should receive product object, instead fetches product by itself
const PRODUCT_API_BASE_URL = 'https://fakestoreapi.com/products';
const ProductPage = () => {
	const productId = useLocation().pathname.split('/')[2];
	const url = `${PRODUCT_API_BASE_URL}/${productId}`;
	const [product, setProduct] = React.useState({});
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err);
				setIsLoading(false);
			});
	}, [url]);

	return (
		<MainLayout>
			<div className="min-h-screen grid place-content-center">
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<div className="flex">
						<div className="flex-1 flex flex-col gap-8">
							<h2 className="text-4xl">{product.title}</h2>
							<p className="text-md ">{product.description}</p>
							<button className="btn btn-outline w-full">Buy now</button>
						</div>
						<div className="flex-1 grid place-content-center">
							<img
								className="object-contain max-w-[500px] max-h-[400px] w-auto h-auto"
								src={product.image}
								alt=" "
							/>
						</div>
					</div>
				)}
				{error && <p>{error.message}</p>}
			</div>
		</MainLayout>
	);
};

export default ProductPage;
