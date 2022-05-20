import React from 'react';

interface SecondaryTitlePropTypes {
	title: string;
}

const SecondaryTitle = (props: SecondaryTitlePropTypes) => {
	return (
		<h2 className="mx-auto mt-3 max-w-md text-center font-roman text-2xl font-bold text-gray-900 sm:text-2xl md:mt-2 md:max-w-3xl md:text-3xl">
			{props.title}
		</h2>
	);
};

export default SecondaryTitle;
