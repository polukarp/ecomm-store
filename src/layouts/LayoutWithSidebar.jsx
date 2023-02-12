import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LayoutWithSidebar = ({ children }) => {
	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar />
			<div>
				<Sidebar />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default LayoutWithSidebar;
