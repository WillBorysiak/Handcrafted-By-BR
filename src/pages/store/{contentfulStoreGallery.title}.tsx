import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../layout/Layout';
import SEO from '../../layout/SEO';
import StoreProduct from '../../components/store-page/StoreProduct';

const StoreProductPage = (props: any) => {
	const productData = props.data.contentfulStoreProducts;
	console.log(props);
	return (
		<Layout>
			<SEO title="Forest Drawstring" description="View my commercial product and purchase it from Etsy!" />
			<StoreProduct productData={productData} />
		</Layout>
	);
};

export default StoreProductPage;

export const query = graphql`
	query getSingleProduct($title: String) {
		contentfulStoreProducts(title: { eq: $title }) {
			type
			title
			description {
				description
			}
			usage
			notes
			notes2
			mainImage {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
			}
			secondaryImageOne {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
			}
			secondaryImageTwo {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
			}
		}
	}
`;
