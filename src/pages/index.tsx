import React from 'react';

import SEO from '../layout/SEO';
import MainHero from '../components/MainHero';
import Layout from '../layout/Layout';
import MainContent from '../components/MainContent';

const IndexPage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" />
				<MainHero />
				<MainContent />
			</Layout>
		</>
	);
};

export default IndexPage;
