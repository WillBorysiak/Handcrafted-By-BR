import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/Typography/Title';
import HomeHero from '../components/HomePage/HomeHero';
import HomeStory from '../components/HomePage/HomeStory';
import HomeFeatures from '../components/HomePage/HomeFeatures';

const HomePage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" />
				<Title title="Handcrafted by BarbaraRuth" />
				<HomeHero />
				<HomeStory />
				<HomeFeatures />
			</Layout>
		</>
	);
};

export default HomePage;
