import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface StoreProductPropTypes {
	productData: {
		title: string;
		description: { description: string };
		type: string;
		usage: string;
		notes: string;
		notes2: string;
		etsyUrl: string;
		mainImage: {
			gatsbyImageData: IGatsbyImageData;
		};
		secondaryImageOne: {
			gatsbyImageData: IGatsbyImageData;
		};
		secondaryImageTwo: {
			gatsbyImageData: IGatsbyImageData;
		};
	};
	currentPage: string;
}
