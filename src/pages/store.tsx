import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import ContactInfo from '../components/store-page/ContactInfo';

const StorePage = () => {
	return (
		<Layout>
			<SEO title="Store" />
			<Title title="Contact Me" />
			<ContactInfo />
		</Layout>
	);
};

export default StorePage;
