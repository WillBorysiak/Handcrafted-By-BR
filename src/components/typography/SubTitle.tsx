import React from 'react';

interface TitlePropTypes {
	title: string;
}

const SubTitle = (props: TitlePropTypes) => {
	return (
		<h2
			id="sub-title"
			className=" text-center font-roman text-2xl font-extrabold tracking-wider text-gray-900 sm:text-3xl "
		>
			{props.title}
		</h2>
	);
};

export default SubTitle;
