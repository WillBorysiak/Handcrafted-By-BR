import React from 'react';

interface SecondaryTitlePropTypes {
	title: string;
}

const SecondaryTitle = (props: SecondaryTitlePropTypes) => {
	return (
		<p className="sm:text-2lg mx-auto mt-3 max-w-md text-center font-roman text-xl font-bold text-gray-900 md:mt-2 md:max-w-3xl md:text-3xl">
			{props.title}
		</p>
	);
};

export default SecondaryTitle;
