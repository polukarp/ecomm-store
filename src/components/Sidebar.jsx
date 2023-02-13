import React from 'react';
import { useCategories } from '../hooks/useCategories';
import { setCategory } from '../store/shop';
import { motion } from 'framer-motion';

const Sidebar = () => {
	const { categories } = useCategories();
	const handleCategoryClick = (category) => {
		setCategory(category);
		console.log(category);
	};

	return (
		<div className="flex gap-4 flex-col text-center lg:flex-row lg:text-start flew-wrap uppercase">
			{categories.map((category) => (
				<motion.p
					whileHover={{ scale: 1.1 }}
					className="cursor-pointer"
					onClick={() => {
						handleCategoryClick(category);
					}}>
					{category}
				</motion.p>
			))}
		</div>
	);
};

export default Sidebar;
