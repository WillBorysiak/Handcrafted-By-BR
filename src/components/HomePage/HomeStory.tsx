import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import SubTitle from '../Typography/SubTitle';
import Heading from '../Typography/Heading';
import ParagraphTitle from '../Typography/ParagraphTitle';

import Paragraph from '../Typography/Paragraph';

interface StoryTypes {
	title: string;
	body: {
		body: string;
	};
	contentful_id: string;
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
					<Heading heading="Do what you love and you'll never work a day in your life..." />
				</div>
				<div className="mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
					{stories.map((story: StoryTypes) => (
						<article key={story.contentful_id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
							<div className="flex-shrink-0">
								<StaticImage
									className="h-48 w-full object-cover"
									src="../../assets/images/HomeHero/home1.jpg"
									alt="Placeholder image"
									placeholder="tracedSVG"
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
		allContentfulHomeStory(sort: { fields: createdAt }) {
			nodes {
				title
				contentful_id
				body {
					body
				}
			}
		}
	}
`;
