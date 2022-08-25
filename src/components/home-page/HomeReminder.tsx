import React from 'react';
import SubTitle from '../typography/SubTitle';
import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../utils/scrollAnimationVariants';

const HomeIncentives = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="bg-primary pt-12 font-roman sm:pt-16"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center font-bold">
					<SubTitle title="In Case You Didn't Realise Already!" />
				</div>
			</div>
			<div className="mt-10 bg-primary pb-12 font-roman sm:pb-16">
				<div className="relative">
					<div className="relative mx-auto max-w-7xl px-2  lg:px-8">
						<div className="mx-auto max-w-4xl">
							<dl className="rounded-lg shadow-lg md:grid md:grid-cols-3">
								<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 md:border-r">
									<dt className="order-2 mt-2 text-2xl font-bold leading-6 text-gray-500">Designs</dt>
									<dd className="order-1 text-5xl font-extrabold text-secondary">Custom</dd>
								</div>
								<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-l md:border-0 md:border-r">
									<dt className="order-2 mt-2 text-2xl font-bold leading-6 text-gray-500">Products</dt>
									<dd className="order-1 text-5xl font-extrabold text-secondary md:text-4xl lg:text-5xl">Handmade</dd>
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
		</motion.div>
	);
};

export default HomeIncentives;
