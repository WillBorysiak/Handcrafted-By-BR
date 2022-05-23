import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Paragraph from '../Typography/Paragraph';
import SubTitle from '../Typography/SubTitle';

interface ProcessTypes {
	title: string;
	body: {
		body: string;
	};
	contentful_id: string;
	image: {
		gatsbyImageData: IGatsbyImageData;
	};
}

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

const ProcessGrid = () => {
	const data = useStaticQuery(query);
	const processes = data.allContentfulProcessGrid.nodes;

	return (
		<div className="bg-orange-200">
			<div className="mx-auto max-w-2xl py-5 px-4 font-roman sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<SubTitle title="How I go from idea to item, start to finish..." />
					<Paragraph text="Given the fact that each product is made personally by me, it takes time to craft each item. No mechanical aid other than my trusty sewing machine. Needles, scissors, rulers, you name it, I use it." />
				</div>

				<div className="mt-16 space-y-16">
					{processes.map((process: ProcessTypes, processIdx: any) => (
						<div
							key={process.contentful_id}
							className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
						>
							<div
								className={classNames(
									processIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
									'mt-6  lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
								)}
							>
								<SubTitle title={process.title} />
								<Paragraph text={process.body.body} />
							</div>
							<div
								className={classNames(
									processIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
									'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
								)}
							>
								<div className="aspect-w-4 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
									<GatsbyImage
										image={process.image.gatsbyImageData}
										alt={process.title}
										className="object-cover object-center"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProcessGrid;

const query = graphql`
	{
		allContentfulProcessGrid(sort: { fields: createdAt, order: ASC }) {
			nodes {
				title
				body {
					body
				}
				contentful_id
				image {
					gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
				}
				imageAlt
			}
		}
	}
`;
