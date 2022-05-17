import React from 'react';
import Layout from '../components/Layout';

import SEO from '../components/SEO';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" />
				<main id="main-page-container" className="h-screen bg-orange-100">
					<div id="title-container" className="pt-3">
						<h2 className="text-center font-roman text-6xl">Handcrafted by BarbaraRuth</h2>
						<h3 className="text-center font-roman text-2xl">Made with fabric and thread in Derbyshire, England</h3>
					</div>
					<nav id="navbar">
						<ul className="flex justify-center pt-5">
							<li className="px-3">
								<FontAwesomeIcon icon={faHouseChimney} size="4x" className="text-gray-500 hover:text-gray-600" />
							</li>
							<li className="px-3">
								<FontAwesomeIcon icon={faAddressCard} size="4x" className="text-gray-500 hover:text-gray-600" />
							</li>
							<li className="px-3">
								<FontAwesomeIcon icon={faScissors} size="4x" className="text-gray-500 hover:text-gray-600" />
							</li>
							<li className="px-3">
								<FontAwesomeIcon icon={faMessage} size="4x" className="text-gray-500 hover:text-gray-600" />
							</li>
						</ul>
					</nav>
				</main>
			</Layout>
		</>
	);
};

export default IndexPage;
