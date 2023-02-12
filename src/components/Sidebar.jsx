import React from 'react';
import { useCategories } from '../hooks/useCategories';

const Sidebar = () => {
	const { categories } = useCategories();

	const handleCategoryClick = (category) => {
		console.log(category);
	};

	return (
		<div>
			<div className="flex gap-4 flew-wrap uppercase">
				{categories.map((category) => (
					<p
						className="cursor-pointer"
						onClick={() => {
							handleCategoryClick(category);
						}}>
						{category}
					</p>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
