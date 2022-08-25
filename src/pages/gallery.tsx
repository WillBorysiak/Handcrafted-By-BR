import Favicons from '../layout/Favicons';
import GalleryFilter from '../components/gallery-page/GalleryFilter';
import Layout from '../layout/Layout';
import React from 'react';
import Title from '../components/typography/Title';

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
