import React from 'react';

import Layout from '../../layout/Layout';
import SEO from '../../layout/SEO';
import Title from '../../components/typography/Title';
import StoreGallery from '../../components/store-page/StoreGallery';
import StoreHero from '../../components/store-page/StoreHero';

const StorePage = () => {
	return (
		<Layout>
			<SEO title="Store" description="View all my live listings on my Etsy store!" />
			<Title title="Store" />
			<StoreHero />
			<StoreGallery />
		</Layout>
	);
};

export default StorePage;
