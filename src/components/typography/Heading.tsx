import React from 'react';

interface SecondaryTitlePropTypes {
	heading: string;
}

const Heading = (props: SecondaryTitlePropTypes) => {
	return (
		<h3
			id="heading"
			className="mx-auto mt-3 max-w-md text-center font-roman text-xl capitalize  text-gray-900 sm:text-2xl md:mt-2 md:max-w-3xl md:text-2xl"
		>
			{props.heading}
		</h3>
	);
};

export default Heading;
