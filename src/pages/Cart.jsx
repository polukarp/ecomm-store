import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import Product from '../components/Product';
import MainLayout from '../layouts/MainLayout';
import ProductsLayout from '../layouts/ProductsLayout';
import { $cart, clearCart } from '../store/cart';

const Cart = () => {
	const cart = useStore($cart);
	const [cost, setCost] = React.useState(
		cart.reduce((acc, product) => acc + product.price, 0),
	);

	useEffect(() => {
		setCost(cart.reduce((acc, product) => acc + product.price, 0));
	}, [cart]);

	const handleOrderSubmit = () => clearCart();

	return (
		<MainLayout>
			<div className="text-center sm:text-left">
				<div className="flex justify-between items-center">
					<div className="">
						<h2 className="text-2xl uppercase">
							{cart.length > 0 ? 'Your cart' : 'Cart is empty'}
						</h2>
						<p className="text-lg">Total: {cost}$</p>
					</div>
					{cart.length > 0 && (
						<button onClick={handleOrderSubmit} className="btn btn-outline">
							Submit order
						</button>
					)}
				</div>
				<ProductsLayout>
					{cart.map((product) => (
						<Product key={product.id} {...product} />
					))}
				</ProductsLayout>
			</div>
		</MainLayout>
	);
};

export default Cart;
