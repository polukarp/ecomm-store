import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/catalog',
		element: <Catalog />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/product/:id',
		element: <ProductPage />,
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
