import React from 'react';

import SecondaryTitle from '../Typography/SecondaryTitle';
import { StaticImage } from 'gatsby-plugin-image';

/* This example requires Tailwind CSS v2.0+ */
const MainContent = () => {
	return (
		<div className="relative overflow-hidden bg-primary">
			<div className=" pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<div className="flex flex-col items-center ">
							<SecondaryTitle title="Made with fabric and thread in Derbyshire, England." />
							<div className=" mt-3 flex w-1/2 justify-center">
								<StaticImage src="../assets/images/uk-icon.png" alt="The UK flag" height={50} placeholder="blurred" />
							</div>
						</div>
						<div>
							<p className="mt-4 text-center text-xl text-gray-500 md:mt-8">Planned from your imagination.</p>
							<p className="mt-4 text-center text-xl text-gray-500">Sketched and drawn by hand.</p>
							<p className="mt-4 text-center text-xl text-gray-500">Sewn together beautifully.</p>
							<p className="mt-4 text-center text-xl text-gray-500">Delivered directly to your doorstep.</p>
						</div>
					</div>
					<div>
						<div className="mt-5">
							{/* Decorative image grid */}
							<div
								aria-hidden="true"
								className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
							>
								<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
