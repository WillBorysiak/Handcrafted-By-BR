import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import ProductsFilter from '../components/products-page/ProductsFilter';

const ProductsPage = () => {
	return (
		<Layout>
			<SEO title="Products" />
			<Title title="The Gallery" />
			<ProductsFilter />
		</Layout>
	);
};

export default ProductsPage;
