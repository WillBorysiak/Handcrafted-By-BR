import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import ProcessGrid from '../components/process-page/ProcessGrid';

const ProcessPage = () => {
	return (
		<Layout>
			<SEO title="Process" />
			<Title title="The Process" />
			<ProcessGrid />
		</Layout>
	);
};

export default ProcessPage;
