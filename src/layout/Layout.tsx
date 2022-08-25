import Footer from './Footer';
import Navbar from './Navbar';
import React from 'react';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return (
		<div className="bg-primary">
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
