import React from 'react';

import Title from '../Typography/Title';
import HomeFeatures from './HomeFeatures';
import HomeHero from './HomeHero';
import HomeStory from './HomeStory';

const MainHero = () => {
	return (
		<>
			<div className="flex flex-col items-start justify-start bg-orange-200 pb-5">
				<main className="sm:mt-15 mx-auto mt-5 max-w-7xl">
					<div className="text-center">
						<Title title="Handcrafted by BarbaraRuth" />
					</div>
				</main>
			</div>
			<HomeHero />
			<HomeStory />
			<HomeFeatures />
		</>
	);
};

export default MainHero;
