import React from 'react';

interface ParagraphTypes {
	text: string;
}

const Paragraph = (props: ParagraphTypes) => {
	return (
		<p id="paragraph" className="mt-3 text-base text-gray-500 md:text-lg">
			{props.text}
		</p>
	);
};

export default Paragraph;
