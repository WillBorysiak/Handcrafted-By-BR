import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return (
		<div className="bg-primary dark:bg-secondary">
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
