import React from 'react';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return <div className="text m-auto max-w-screen-xl">{props.children}</div>;
};

export default Layout;
