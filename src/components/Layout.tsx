import React from 'react';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return <div className="m-auto max-w-full">{props.children}</div>;
};

export default Layout;
