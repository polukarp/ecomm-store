import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LayoutWithSidebar = ({ children }) => {
	return (
		<div className="max-w-screen-xl mx-auto px-1 sm:px-4">
			<Navbar />
			<div>
				<Sidebar />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default LayoutWithSidebar;
