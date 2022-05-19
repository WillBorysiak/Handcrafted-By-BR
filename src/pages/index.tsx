import React from 'react';

import SEO from '../layout/SEO';
import MainHero from '../components/HomePage/HomePage';
import Layout from '../layout/Layout';

const IndexPage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" />
				<MainHero />
			</Layout>
		</>
	);
};

export default IndexPage;
