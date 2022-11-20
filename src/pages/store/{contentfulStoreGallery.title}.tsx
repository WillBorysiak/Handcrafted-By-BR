import React from 'react';
import { graphql } from 'gatsby';

import Favicons from '../../layout/Favicons';
import Layout from '../../layout/Layout';
import StoreProduct from '../../components/store-page/StoreProduct';

const StoreProductPage = (props: any) => {
	const productData = props.data.contentfulStoreProducts;
	const currentPage = props.pageContext.title;

	return (
		<Layout>
			<StoreProduct productData={productData} currentPage={currentPage} />
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
			etsyUrl
			mainImage {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1, resizingBehavior: NO_CHANGE)
			}
			secondaryImageOne {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1, resizingBehavior: NO_CHANGE)
			}
			secondaryImageTwo {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1, resizingBehavior: NO_CHANGE)
			}
		}
	}
`;

// SEO Head

export const Head = () => {
	const title = 'Store';
	const metaTitle = 'Handcrafted by BR';
	const description = 'Just lovely handcrafted products made in Derbyshire, England';

	return (
		<>
			<title>{`${title} | ${metaTitle}`}</title>
			<meta name="description" content={description}></meta>
			<Favicons />
		</>
	);
};
