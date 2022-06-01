import React from 'react';

import Layout from '../../layout/Layout';
import SEO from '../../layout/SEO';
import Title from '../../components/typography/Title';
import StoreContent from '../../components/store-page/StoreContent';

const StorePage = () => {
	return (
		<Layout>
			<SEO title="Store" description="View all my live listings on my Etsy store!" />
			<Title title="Store" />
			<StoreContent />
		</Layout>
	);
};

export default StorePage;
