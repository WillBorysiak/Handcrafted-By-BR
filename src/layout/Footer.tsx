import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/pro-thin-svg-icons';
import { faCashRegister } from '@fortawesome/pro-thin-svg-icons';

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					<div className="flex w-1/2 flex-row justify-between">
						<a href="https://www.instagram.com/handcrafted_by_barbararuth/?igshid=YmMyMTA2M2Y" target="_blank">
							<FontAwesomeIcon className="pr-5 text-orange-200 hover:text-white" icon={faCameraRetro} size="2x" />
						</a>
						<a href="https://www.etsy.com/uk/shop/HandcraftedbyBRuth" target="_blank">
							<FontAwesomeIcon className=" text-orange-200 hover:text-white" icon={faCashRegister} size="2x" />
						</a>
					</div>
				</div>
				<div className="mt-5 md:order-1 md:mt-0">
					<h2 className=" text-md text-center font-roman font-extrabold tracking-wider text-orange-200 sm:text-lg ">
						&copy; 2022 Handcrafted by BarbaraRuth.
					</h2>
					<h2 className=" text-md text-center font-roman font-extrabold tracking-wider text-orange-200 sm:text-lg ">
						All rights reserved.
					</h2>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
