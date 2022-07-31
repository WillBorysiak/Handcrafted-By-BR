import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'Handcrafted By Barbara Ruth',
		description: 'Just lovely handcrafted products made in Derbyshire, England',
		siteUrl: 'https://www.handcrafted-by-barbara-ruth.com/',
	},
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
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: '/sitemap',
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.handcrafted-by-barbara-ruth.com/',
				env: {
					development: {
						policy: [{ userAgent: '*', disallow: ['/'] }],
					},
					production: {
						policy: [{ userAgent: '*', allow: '/' }],
					},
				},
			},
		},
	],
};

export default config;
