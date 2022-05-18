import React from 'react';

interface SecondaryTitlePropTypes {
	title: string;
}

const SecondaryTitle = (props: SecondaryTitlePropTypes) => {
	return (
		<p className="mx-auto mt-3 max-w-md font-roman text-base font-bold text-gray-900 sm:text-lg md:mt-2 md:max-w-3xl md:text-3xl">
			{props.title}
		</p>
	);
};

export default SecondaryTitle;
