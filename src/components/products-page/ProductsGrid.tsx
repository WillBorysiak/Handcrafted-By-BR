import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Heading from '../typography/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerHorizontal } from '@fortawesome/pro-thin-svg-icons';
import { faPenRuler } from '@fortawesome/pro-thin-svg-icons';
import { faRulerTriangle } from '@fortawesome/pro-thin-svg-icons';
import SubTitle from '../typography/SubTitle';

interface ProductTypes {
	title: string;
	image: { gatsbyImageData: IGatsbyImageData };
	contentful_id: string;
}

const ProductGrid = (props: any) => {
	return (
		<div className="bg-primary pb-5">
			<div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="-mx-px grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
					{props.products.length > 0 ? (
						props.products.map((product: ProductTypes) => (
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
						))
					) : (
						<div className="flex w-80  flex-col sm:w-max">
							<SubTitle title="No products found!" />
							<Heading heading="I'm currently making some..." />
							<div className="flex flex-row justify-center">
								<FontAwesomeIcon className=" px-5 pt-5" icon={faRulerHorizontal} size="2x" />
								<FontAwesomeIcon className="px-5 pt-5" icon={faPenRuler} size="2x" />
								<FontAwesomeIcon className="px-5 pt-5" icon={faRulerTriangle} size="2x" />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
