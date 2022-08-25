import Favicons from '../layout/Favicons';
import Layout from '../layout/Layout';
import ProcessGrid from '../components/process-page/ProcessGrid';
import React from 'react';
import Title from '../components/typography/Title';

const ProcessPage = () => {
	return (
		<Layout>
			<Title title="Design Process" />
			<ProcessGrid />
			66
		</Layout>
	);
};

export default ProcessPage;

// SEO Head

export const Head = () => {
	const title = 'Process';
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
