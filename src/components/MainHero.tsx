import React from 'react';
import SecondaryTitle from './SecondaryTitle';
import Title from './Title';

const MainHero = () => {
	return (
		<div className="flex flex-col items-start justify-start bg-orange-200 pb-5">
			<main className="sm:mt-15 mx-auto mt-5 max-w-7xl">
				<div className="text-center">
					<Title title="Handcrafted by Barbara Ruth" />
					<SecondaryTitle title="Made with fabric and thread in Derbyshire, England." />
				</div>
			</main>
		</div>
	);
};

export default MainHero;
