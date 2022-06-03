import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import SubTitle from '../typography/SubTitle';
import ParagraphTitle from '../typography/ParagraphTitle';
import Paragraph from '../typography/Paragraph';

interface StoryTypes {
	title: string;
	body: {
		body: string;
	};
	contentful_id: string;
	image: {
		gatsbyImageData: IGatsbyImageData;
	};
}

const HomeStory = () => {
	const data = useStaticQuery(query);
	const stories = data.allContentfulHomeStory.nodes;

	return (
		<section className="relative bg-stone-200 px-4 pt-5 pb-5 font-roman sm:px-6 lg:px-8 lg:pb-10 lg:pt-5">
			<div className="absolute inset-0">
				<div className="bg-stone-20 h-1/3 sm:h-2/3" />
			</div>
			<div className="relative mx-auto max-w-7xl">
				<div className="text-center">
					<SubTitle title="My Story" />
				</div>
				<div className="mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
					{stories.map((story: StoryTypes) => (
						<article key={story.contentful_id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
							<div className="flex-shrink-0">
								<GatsbyImage
									className="h-48 w-full object-cover"
									image={story.image.gatsbyImageData}
									alt="Placeholder image"
								/>
							</div>
							<div className="flex flex-1 flex-col justify-between bg-white p-3 ">
								<div className="flex-1">
									<div className="mt-2 block">
										<ParagraphTitle title={story.title} />
										<Paragraph text={story.body.body} />
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeStory;

const query = graphql`
	{
		allContentfulHomeStory(sort: { order: ASC, fields: createdAt }) {
			nodes {
				title
				body {
					body
				}
				contentful_id
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
