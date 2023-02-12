import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';

test('renders navbar', () => {
	render(<Navbar />, { wrapper: BrowserRouter });
	expect(screen.getByRole('navigation')).toBeInTheDocument();
});

test('renders navbar with correct links', () => {
	render(<Navbar />, { wrapper: BrowserRouter });
	expect(screen.getByText('Home')).toBeInTheDocument();
	expect(screen.getByText('Catalog')).toBeInTheDocument();
	expect(screen.getByText('Cart')).toBeInTheDocument();
});

test('app navigating', () => {
	render(<Navbar />, { wrapper: BrowserRouter });

	const homeLink = screen.getByText(/home/i);
	const catalogLink = screen.getByText(/catalog/i);
	const cartLink = screen.getByText(/cart/i);

	userEvent.click(homeLink);
	render(<Home />, { wrapper: BrowserRouter });
	expect(screen.getByText(/you are on the main page/i)).toBeInTheDocument();

	userEvent.click(catalogLink);
	render(<Catalog />, { wrapper: BrowserRouter });
	expect(screen.getByText(/you are on the catalog page/i)).toBeInTheDocument();

	userEvent.click(cartLink);
	render(<Cart />, { wrapper: BrowserRouter });
	expect(screen.getByText(/you are on the cart page/i)).toBeInTheDocument();
});
