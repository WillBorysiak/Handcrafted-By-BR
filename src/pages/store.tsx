import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import StoreInfo from '../components/store-page/StoreInfo';

const StorePage = () => {
	return (
		<Layout>
			<SEO title="Store" description="View all my live listings on my Etsy store!" />
			<Title title="Etsy Store" />
			<StoreInfo />
		</Layout>
	);
};

export default StorePage;
