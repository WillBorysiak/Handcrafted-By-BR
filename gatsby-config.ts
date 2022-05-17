import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
	plugins: [
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		// Needed for dynamic images
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `aq86txamr2cz`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
	],
};

export default config;
