import React, { useState } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import SubTitle from '../typography/SubTitle';
import GalleryModal from '../gallery-page/GalleryModal';

interface ProductTypes {
	title: string;
	image: { gatsbyImageData: IGatsbyImageData };
	contentful_id: string;
}

const GalleryGrid = (props: { products: [] }) => {
	const [open, setOpen] = useState(false);
	const [modalImage, setModalImage] = useState({});

	return (
		<div className="bg-primary">
			<GalleryModal open={open} setOpen={setOpen} image={modalImage} />
			<div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="-mx-px grid grid-cols-2 gap-2 pb-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
					{props.products.length > 0 ? (
						props.products.map((product: ProductTypes) => (
							<div key={product.contentful_id} className="group relative p-1 shadow-lg">
								<div
									className="overflow-hidden rounded-sm "
									onClick={() => {
										setOpen(true);
										setModalImage(product.image.gatsbyImageData);
									}}
								>
									<GatsbyImage
										image={product.image.gatsbyImageData}
										alt={product.title}
										className="h-full w-full object-cover object-center  transition duration-200 ease-in-out  hover:scale-110 sm:group-hover:scale-125"
									/>
								</div>
								<div className="text-left">
									<h4
										id="paragraph-title"
										className="text-md mt-1 pl-2 font-roman font-bold text-secondary md:pl-1 md:text-lg"
									>
										{product.title}
									</h4>
								</div>
							</div>
						))
					) : (
						<div>
							<SubTitle title="No Products Found" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default GalleryGrid;
