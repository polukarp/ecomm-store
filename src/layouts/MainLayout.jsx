import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
	return (
		<div className="max-w-screen-xl mx-auto px-1 sm:px-4">
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default MainLayout;
