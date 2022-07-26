import React from 'react';

import SubTitle from '../typography/SubTitle';

const HomeIncentives = () => {
	return (
		<div className="bg-primary pt-12 font-roman sm:pt-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center font-bold">
					<SubTitle title="In Case You Didn't Realise Already!" />
				</div>
			</div>
			<div className="mt-10 bg-primary pb-12 font-roman sm:pb-16">
				<div className="relative">
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3">
								<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
									<dt className="order-2 mt-2 text-2xl font-bold leading-6 text-gray-500">Designs</dt>
									<dd className="order-1 text-5xl font-extrabold text-secondary">Custom</dd>
								</div>
								<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
									<dt className="order-2 mt-2 text-2xl font-bold leading-6 text-gray-500">Products</dt>
									<dd className="order-1 text-5xl font-extrabold text-secondary">Handmade</dd>
								</div>
								<div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
									<dt className="order-2 mt-2 text-2xl font-bold leading-6 text-gray-500">Delivery</dt>
									<dd className="order-1 text-5xl font-extrabold text-secondary">Free</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeIncentives;
