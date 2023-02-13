import { useStore } from 'effector-react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { $cart, addProduct, removeProduct } from '../store/cart';
import { useNavigate } from 'react-router-dom';

const Product = (product) => {
	const navigate = useNavigate();
	const { category, image, price, rating, title, id } = product;
	const cart = useStore($cart);

	const handleClick = (id) => {
		if (cart.find((product) => product.id === id)) {
			removeProduct(id);
		} else {
			addProduct(product);
		}
	};

	return (
		<div className="card card-body card-compact md:card-normal justify-between">
			<h3 className="card-title flex justify-center text-lg">{title}</h3>
			<img
				onClick={() => navigate(`/product/${id}`)}
				className="card w-full h-auto image-full max-h-[150px] max-w-[300px] mx-auto object-contain cursor-pointer"
				src={image}
				alt=" "
			/>
			<div className="flex flex-col justify-between">
				<div className="flex justify-between items-center mb-2">
					<p className="font-bold text-lg">{price}$</p>
					<div className="flex items-center gap-2">
						<p className="text-end">{rating?.rate}</p>
						<AiFillStar />
					</div>
				</div>
				<div className="flex flex-wrap gap-2 ">
					<span className="badge badge-outline w-full">{category}</span>
				</div>
			</div>
			<div className="card-actions mt-2">
				<button
					onClick={() => {
						handleClick(id);
					}}
					className="btn btn-ghost w-full">
					<p>
						{cart.find((product) => product.id === id)
							? 'Remove from cart'
							: 'Add to cart'}
					</p>
				</button>
			</div>
		</div>
	);
};

export default Product;
