import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProductTypes } from '../../../models/store-page/gallery.model';

import SubTitle from '../typography/SubTitle';

const StoreGallery = () => {
	const data = useStaticQuery(query);
	const products = data.allContentfulStoreGallery.nodes;

	return (
		<div className=" bg-primary">
			<div className="mx-auto max-w-2xl py-5 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 xl:gap-x-5">
					{products.map((product: ProductTypes) => (
						<article key={product.contentful_id} className="w-full pb-2 shadow-xl">
							<Link to={product.url} className=" group">
								<div className="w-full overflow-hidden rounded-sm">
									<GatsbyImage
										image={product.productImage.gatsbyImageData}
										alt={product.title}
										className="h-full w-full object-cover object-center transition duration-200 ease-in-out sm:hover:scale-110 "
									/>
								</div>
							</Link>
							<div className="mt-3">
								<SubTitle title={product.title} />
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
};

export default StoreGallery;

const query = graphql`
	{
		allContentfulStoreGallery {
			nodes {
				title
				contentful_id
				url
				productImage {
					gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, resizingBehavior: NO_CHANGE, aspectRatio: 1)
				}
			}
		}
	}
`;
