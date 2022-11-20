import React from 'react';

import ErrorHero from '../components/404-page/404Hero';
import Favicons from '../layout/Favicons';
import Layout from '../layout/Layout';

const ErrorPage = () => {
	return (
		<Layout>
			<ErrorHero />
		</Layout>
	);
};

export default ErrorPage;

// SEO Head

export const Head = () => {
	const title = '404';
	const metaTitle = 'Handcrafted by BR';
	const description = 'Just lovely handcrafted products made in Derbyshire, England';

	return (
		<>
			<title>{`${title} | ${metaTitle}`}</title>
			<meta name="description" content={description}></meta>
			<Favicons />
		</>
	);
};
