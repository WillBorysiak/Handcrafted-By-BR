import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/Typography/Title';
import ContactInfo from '../components/ContactPage/ContactInfo';

const ContactPage = () => {
	return (
		<Layout>
			<div className="flex flex-col items-start justify-start bg-orange-200 pb-5">
				<main className="sm:mt-15 mx-auto mt-5 max-w-7xl">
					<div className="text-center">
						<Title title="Contact Me" />
					</div>
				</main>
			</div>
			<ContactInfo />
		</Layout>
	);
};

export default ContactPage;
