import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import ErrorHero from '../components/404-page/404Hero';

const ErrorPage = () => {
	return (
		<Layout>
			<SEO title="404" description="This page is does not exist, sorry!" />
			<ErrorHero />
		</Layout>
	);
};

export default ErrorPage;
