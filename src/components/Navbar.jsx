import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { $cart } from '../store/cart';
import { useStore } from 'effector-react';
import { motion } from 'framer-motion';

const Navbar = () => {
	const cart = useStore($cart);
	return (
		<header className="flex flex-col sm:flex-row gap-4 justify-between py-4 items-center">
			<Link to={'/'}>
				<h1 className="font-bold text-2xl bg-black text-white p-4">SHOOOOOOOPE</h1>
			</Link>

			<nav className="flex flex-wrap gap-4 text-2xl font-bold uppercase items-center">
				<Link to={'/'}>Home</Link>
				<Link to={'/catalog'}>Catalog</Link>
				<Link to={'/cart'}>
					<div className="flex gap-2 items-center">
						<AiOutlineShoppingCart height={25} width={25} />
						<div>{cart.length}</div>
					</div>
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
