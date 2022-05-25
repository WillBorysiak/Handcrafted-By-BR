import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import ProductGrid from '../components/products-page/ProductsGrid';

const ProductsPage = () => {
	return (
		<Layout>
			<SEO title="Products" />
			<Title title="The Gallery" />
			<ProductGrid />
		</Layout>
	);
};

export default ProductsPage;
