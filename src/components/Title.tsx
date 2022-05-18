import React from 'react';

interface TitlePropTypes {
	title: string;
}

const Title = (props: TitlePropTypes) => {
	return (
		<h1 className="font-roman text-4xl font-extrabold tracking-wider text-gray-900 sm:text-6xl md:text-6xl">
			{props.title}
		</h1>
	);
};

export default Title;
