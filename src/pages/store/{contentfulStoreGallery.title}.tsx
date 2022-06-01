import React from 'react';

import Layout from '../../layout/Layout';
import SEO from '../../layout/SEO';
import StoreProduct from '../../components/store-page/StoreProduct';

const StoreProductPage = (props: any) => {
	console.log(props);
	return (
		<Layout>
			<SEO title={props.params.title} description="View my commercial product and purchase it from Etsy!" />
			<StoreProduct />
		</Layout>
	);
};

export default StoreProductPage;
