import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SubTitle from '../typography/SubTitle';

const HomeHero = () => {
	return (
		<section className="relative overflow-hidden bg-primary">
			<div className=" pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<div className="flex flex-col items-center ">
							<SubTitle title="Made with fabric and thread in Derbyshire, England." />
							<div className=" mt-3 flex w-1/2 justify-center">
								<StaticImage
									src="../../assets/images/uk-icon.png"
									alt="The UK flag"
									height={50}
									placeholder="tracedSVG"
								/>
							</div>
						</div>

						<div className="font-roman">
							<p className="mt-4 text-center text-xl text-gray-500 md:mt-8">Planned from your imagination.</p>
							<p className="mt-4 text-center text-xl text-gray-500">Sketched and drawn by hand.</p>
							<p className="mt-4 text-center text-xl text-gray-500">Sewn together beautifully.</p>
							<p className="mt-4 text-center text-xl text-gray-500">Delivered directly to your doorstep.</p>
						</div>
					</div>

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
											<StaticImage
												src="../../assets/images/HomeHero/home2.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<StaticImage
												src="../../assets/images/HomeHero/home3.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
									</div>
									<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<StaticImage
												src="../../assets/images/HomeHero/home1.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<StaticImage
												src="../../assets/images/HomeHero/home5.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<StaticImage
												src="../../assets/images/HomeHero/home4.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
									</div>
									<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<StaticImage
												src="../../assets/images/HomeHero/home7.jpg"
												alt=""
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="h-64 w-44 overflow-hidden rounded-lg">
											<StaticImage
												src="../../assets/images/HomeHero/home7.jpg"
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
		</section>
	);
};

export default HomeHero;
