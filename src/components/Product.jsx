import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Product = ({ category, description, id, image, price, rating, title }) => {
	return (
		<div className="card card-body card-compact md:card-normal justify-between">
			<h3 className="card-title text-lg">{title}</h3>
			<img
				className="card w-auto h-auto image-full max-h-[150px] max-w-[300px]  object-contain"
				src={image}
				alt=" "
			/>
			<div className="flex flex-col justify-between">
				<div className="flex justify-between items-center mb-2">
					<p className="font-bold text-lg">{price}$</p>
					<div className="flex items-center gap-2">
						<p className="text-end">{rating.rate}</p>
						<AiFillStar />
					</div>
				</div>
				<div className="flex flex-wrap gap-2">
					<span className="badge badge-outline">{category}</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
