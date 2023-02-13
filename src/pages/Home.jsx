import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout>
			<div className={`flex flex-col lg:flex-row justify-center h-[calc(100vh-96px)]`}>
				<div className="flex-1 flex flex-col justify-center gap-3">
					<h1 className="text-4xl lg:text-6xl font-black uppercase">
						Welcome to SHOOOOOOOPE
					</h1>
					<div>
						<p className="text-lg">Where shopping is an adventure 🛍️</p>
					</div>
				</div>
				<div className="flex-1 flex justify-evenly flex-wrap lg:flex-col">
					<Link to={'/catalog'}>
						<button className="btn h-40 flex w-full btn-outline text-4xl">
							Shop Now
						</button>
					</Link>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
