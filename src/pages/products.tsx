import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/Typography/Title';
import ProductGrid from '../components/ProductsPage/ProductsGrid';

const ProductsPage = () => {
	return (
		<Layout>
			<main className="flex flex-col items-start justify-start bg-orange-200 pb-5">
				<section className="sm:mt-15 mx-auto mt-5 max-w-7xl">
					<div className="text-center">
						<Title title="The Gallery" />
					</div>
				</section>
			</main>
			<ProductGrid />
		</Layout>
	);
};

export default ProductsPage;
