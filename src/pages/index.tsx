import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/typography/Title';
import HomeHero from '../components/home-page/HomeHero';
import HomeStory from '../components/home-page/HomeStory';
import HomeFeatures from '../components/home-page/HomeFeatures';

const HomePage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" description="Just lovely handcrafted products made in Derbyshire, England" />
				<Title title="Handcrafted by BarbaraRuth" />
				<HomeHero />
				<HomeStory />
				<HomeFeatures />
			</Layout>
		</>
	);
};

export default HomePage;
