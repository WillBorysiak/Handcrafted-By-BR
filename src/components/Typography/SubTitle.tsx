import React from 'react';

interface TitlePropTypes {
	title: string;
}

const SubTitle = (props: TitlePropTypes) => {
	return (
		<h1 className="font-roman text-3xl font-extrabold tracking-wider text-gray-900 sm:text-4xl md:text-4xl">
			{props.title}
		</h1>
	);
};

export default SubTitle;
