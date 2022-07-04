import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ProcessTypes {
	title: string;
	body: {
		body: string;
	};
	id: string;
	contentful_id: string;
	image: {
		gatsbyImageData: IGatsbyImageData;
	};
	imageAlt: string;
}
