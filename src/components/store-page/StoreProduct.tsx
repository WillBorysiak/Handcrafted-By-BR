import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StoreProductPropTypes } from '../../../models/store-page/product.model';

import StoreNav from './StoreNav';

const StoreProduct = (props: StoreProductPropTypes) => {
	const product = props.productData;

	return (
		<div className="bg-primary">
			<div className="mx-auto max-w-2xl py-10 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 items-center gap-y-5 gap-x-8 lg:grid-cols-2">
					<div>
						<StoreNav currentPage={props.currentPage} />
						<div className="mt-10 border-b border-gray-200 pb-10">
							<h3
								id="heading"
								className="mx-auto mt-3 max-w-md font-roman text-2xl capitalize text-gray-900 sm:text-2xl md:mt-2 md:max-w-3xl md:text-2xl"
							>
								{product.type}
							</h3>
							<h2
								id="sub-title"
								className=" mt-3 font-roman text-3xl font-extrabold tracking-wider text-gray-900 sm:text-3xl "
							>
								{product.title}
							</h2>
						</div>
						<dl className="mt-10 space-y-5 font-roman">
							<dt className="text-lg font-bold text-secondary">Description</dt>
							<dd className="text-md text-secondary">{product.description.description}</dd>
							<dt className="text-lg font-bold text-secondary">Usage</dt>
							<dd className="text-md text-secondary">{product.usage}</dd>
							<dt className="text-lg font-bold text-secondary">Notes</dt>
							<dd className="text-md text-secondary">{product.notes}</dd>
							<dd className="text-md text-secondary">{product.notes2}</dd>
						</dl>
						<a href={product.etsyUrl} target="_blank">
							<button
								type="button"
								className="mt-5 inline-flex items-center rounded-md border border-gray-300 bg-secondary px-4 py-2 text-base font-medium text-primary shadow-sm hover:bg-gray-600"
							>
								Buy from Etsy
							</button>
						</a>
					</div>

					<div>
						<div className="overflow-hidden rounded-lg ">
							<GatsbyImage
								image={product.mainImage.gatsbyImageData}
								alt={product.title}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
							<div className="overflow-hidden rounded-lg">
								<GatsbyImage
									image={product.secondaryImageOne.gatsbyImageData}
									alt={product.title}
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="overflow-hidden rounded-lg">
								<GatsbyImage
									image={product.secondaryImageTwo.gatsbyImageData}
									alt={product.title}
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoreProduct;
