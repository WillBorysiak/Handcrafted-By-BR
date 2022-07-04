import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ProductTypes {
	title: string;
	contentful_id: string;
	url: string;
	productImage: {
		gatsbyImageData: IGatsbyImageData;
	};
}
