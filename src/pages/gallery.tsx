import React from 'react';

import GalleryFilter from '../components/gallery-page/GalleryFilter';
import Title from '../components/typography/Title';
import Favicons from '../layout/Favicons';
import Layout from '../layout/Layout';

const GalleryPage = () => {
	return (
		<Layout>
			<Title title="Gallery" />
			<GalleryFilter />
		</Layout>
	);
};

export default GalleryPage;

// SEO Head

export const Head = () => {
	const title = 'Gallery';
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
