import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ProductTypes {
	title: string;
	quote: string | null;
	contentful_id: string;
	type: string;
	image: {
		gatsbyImageData: IGatsbyImageData;
	};
}

const ProductGrid = () => {
	const data = useStaticQuery(query);
	const products = data.allContentfulProductGrid.nodes;

	return (
		<div className="bg-primary pb-5">
			<div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="-mx-px grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
					{products.map((product: ProductTypes) => (
						<div key={product.contentful_id} className="group relative  p-1  sm:p-1">
							<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm ">
								<GatsbyImage
									image={product.image.gatsbyImageData}
									alt={product.title}
									className="h-full w-full object-cover object-center  transition duration-200 ease-in-out hover:scale-110   sm:group-hover:scale-125"
								/>
							</div>
							<div className="text-left">
								<h4
									id="paragraph-title"
									className="text-md mt-1 font-semibold text-gray-900 transition duration-1000 ease-in-out sm:group-hover:text-xl md:text-lg"
								>
									{product.title}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;

const query = graphql`
	{
		allContentfulProductGrid(sort: { fields: createdAt, order: ASC }) {
			nodes {
				title
				type
				contentful_id
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
