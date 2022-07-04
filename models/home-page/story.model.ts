import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface StoryTypes {
	title: string;
	body: {
		body: string;
	};
	contentful_id: string;
	image: {
		gatsbyImageData: IGatsbyImageData;
	};
}
