import React from 'react';

interface StoreProductPropTypes {
	productData: {};
}

const features = [
	{
		name: 'Sleek design',
		description:
			'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
	},
	{ name: 'Comfort handle', description: 'Shaped for steady pours and insulated to prevent burns.' },
	{
		name: 'One-button control',
		description:
			'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
	},
	{ name: 'Long spout', description: "Designed specifically for controlled pour-overs that don't slash or sputter." },
];

const StoreProduct = (props: StoreProductPropTypes) => {
	const productInfo = props.productData;
	console.log(productInfo);
	return (
		<div className="bg-primary">
			<div className="mx-auto max-w-2xl py-10 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 items-center gap-y-5 gap-x-8 lg:grid-cols-2">
					<div>
						<div className="border-b border-gray-200 pb-10">
							<h3
								id="heading"
								className="mx-auto mt-3 max-w-md font-roman text-xl capitalize  text-gray-900 sm:text-2xl md:mt-2 md:max-w-3xl md:text-2xl"
							>
								{productInfo.type}
							</h3>
							<h2
								id="sub-title"
								className=" mt-3 font-roman text-2xl font-extrabold tracking-wider text-gray-900 sm:text-3xl "
							>
								{productInfo.title}
							</h2>
						</div>

						<dl className="mt-10 space-y-10">
							{features.map(feature => (
								<div key={feature.name}>
									<dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
									<dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
								</div>
							))}
						</dl>
						<button
							type="button"
							className="mt-5 inline-flex items-center rounded-md border border-gray-300 bg-secondary px-4 py-2 text-base font-medium text-primary shadow-sm hover:bg-gray-600"
						>
							Buy from Etsy
						</button>
					</div>

					<div>
						<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
							<img
								src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
								alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
							<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
								<img
									src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
									alt="Detail of temperature setting button on kettle bass with digital degree readout."
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
								<img
									src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
									alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
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
