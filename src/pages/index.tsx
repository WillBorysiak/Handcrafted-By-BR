import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../layout/SEO';
import Title from '../components/Typography/Title';
import HomeHero from '../components/HomePage/HomeHero';
import HomeStory from '../components/HomePage/HomeStory';
import HomeFeatures from '../components/HomePage/HomeFeatures';

const IndexPage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" />
				<main className="flex flex-col items-start justify-start bg-orange-200 pb-5">
					<section className="sm:mt-15 mx-auto mt-5 max-w-7xl">
						<div className="text-center">
							<Title title="Handcrafted by BarbaraRuth" />
						</div>
					</section>
				</main>
				<HomeHero />
				<HomeStory />
				<HomeFeatures />
			</Layout>
		</>
	);
};

export default IndexPage;
