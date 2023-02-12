import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default MainLayout;
