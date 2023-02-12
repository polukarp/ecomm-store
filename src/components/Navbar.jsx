import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="flex justify-between py-4 items-center">
			<h1 className="font-bold text-2xl bg-black text-white p-4">SHOOOOOOOPE</h1>

			<nav>
				<ul className="flex gap-4">
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/catalog'}>Catalog</Link>
					</li>
					<li>
						<Link to={'/cart'}>Cart</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
