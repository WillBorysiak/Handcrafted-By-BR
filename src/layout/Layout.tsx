import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
};

export default Layout;
