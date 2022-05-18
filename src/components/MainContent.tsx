import React from 'react';
import { GatsbyImage, StaticImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

interface ImageDataTypes {
	title: string;
	id: string;
	gatsbyImageData: IGatsbyImageData;
}

export default function Example() {
	const data = useStaticQuery(query);

	const imageData = data.allContentfulHero.nodes[0].images;
	console.log(imageData);

	return (
		<div className=" relative bg-orange-200 pb-10">
			{/* Background image and overlap */}
			<div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
				<div className="relative w-full flex-1 bg-gray-800">
					<div className="absolute inset-0 overflow-hidden">
						<img
							src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
							alt=""
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="absolute inset-0 bg-gray-900 opacity-50" />
				</div>
				<div className="h-32 w-full bg-orange-200 md:h-40 lg:h-48" />
			</div>

			<div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
				{/* Background image and overlap */}
				<div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
					<div className="relative w-full flex-1 bg-gray-800">
						<div className="absolute inset-0 overflow-hidden">
							<StaticImage
								src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
								alt=""
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="absolute inset-0 bg-gray-900 opacity-50" />
					</div>
					<div className="h-48 w-full bg-orange-200" />
				</div>
				<div className="relative py-32">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Mid-Season Sale</h1>
				</div>
			</div>

			<section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
				<h2 id="collection-heading" className="sr-only">
					Collections
				</h2>
				<div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
					{imageData.map((item: ImageDataTypes) => (
						<div
							key={item.title}
							className="group relative h-96 rounded-lg bg-orange-200 shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto"
						>
							<div>
								<div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
									<div className="absolute inset-0 overflow-hidden ">
										<GatsbyImage
											image={item.gatsbyImageData}
											alt={item.title}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
								</div>
								<div className="absolute inset-0 flex items-end rounded-lg p-6">
									<div>
										<p aria-hidden="true" className="text-center text-lg text-white">
											Shop the collection
										</p>
										<h3 className="mt-1 font-semibold text-white"></h3>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

const query = graphql`
	{
		allContentfulHero {
			nodes {
				images {
					title
					id
					gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
				}
			}
		}
	}
`;
