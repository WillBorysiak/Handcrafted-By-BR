import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import ProductsFilter from '../components/gallery-page/GalleryFilter';

const GalleryPage = () => {
	return (
		<Layout>
			<SEO title="Gallery" description="A gallery of all my products, current and old!" />
			<Title title="Gallery" />
			<ProductsFilter />
		</Layout>
	);
};

export default GalleryPage;
