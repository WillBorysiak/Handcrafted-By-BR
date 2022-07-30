import React from 'react';
import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../utils/scrollAnimationVariants';
import SubTitle from '../typography/SubTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/pro-thin-svg-icons';
import { faSack } from '@fortawesome/pro-thin-svg-icons';
import { faTeddyBear } from '@fortawesome/pro-thin-svg-icons';
import { faOrnament } from '@fortawesome/pro-thin-svg-icons';
import { faClothesHanger } from '@fortawesome/pro-thin-svg-icons';
import { faMattressPillow } from '@fortawesome/pro-thin-svg-icons';

const HomeItems = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="mx-auto max-w-7xl py-5 px-4 font-roman sm:px-6 lg:py-5 lg:px-8"
		>
			<SubTitle title="My products range from..." />
			<div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
				<div className="col-span-1 flex justify-center py-8 px-8 shadow-lg">
					<FontAwesomeIcon icon={faBagShopping} size="4x" className="text-secondary" />
				</div>
				<div className="col-span-1 flex justify-center  py-8 px-8 shadow-lg">
					<FontAwesomeIcon icon={faSack} size="4x" className="text-secondary" />
				</div>
				<div className="col-span-1 flex justify-center  py-8 px-8 shadow-lg">
					<FontAwesomeIcon icon={faTeddyBear} size="4x" className="text-secondary" />
				</div>
				<div className="col-span-1 flex justify-center  py-8 px-8 shadow-lg">
					<FontAwesomeIcon icon={faOrnament} size="4x" className="text-secondary" />
				</div>
				<div className="col-span-1 flex justify-center  py-8 px-8 shadow-lg">
					<FontAwesomeIcon icon={faClothesHanger} size="4x" className="text-secondary" />
				</div>
				<div className="col-span-1 flex justify-center  py-8 px-8 shadow-lg">
					<FontAwesomeIcon icon={faMattressPillow} size="4x" className="text-secondary" />
				</div>
			</div>
		</motion.div>
	);
};

export default HomeItems;
