import React from 'react';

interface TitlePropTypes {
	title: string;
}

const Title = (props: TitlePropTypes) => {
	return (
		<main className="flex flex-col items-start justify-start bg-orange-200 pb-5">
			<section className="sm:mt-15 mx-auto mt-5 max-w-7xl">
				<div className="text-center">
					<h1
						id="title"
						className=" font-roman text-5xl font-extrabold capitalize tracking-wider text-gray-900 sm:text-6xl md:text-6xl"
					>
						{props.title}
					</h1>
				</div>
			</section>
		</main>
	);
};

export default Title;
