import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
