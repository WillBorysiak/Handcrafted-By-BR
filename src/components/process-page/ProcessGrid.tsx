import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Paragraph from '../typography/Paragraph';
import SubTitle from '../typography/SubTitle';
import ProcessNav from './ProcessNav';
import processArray from '../../data/process-nav-data';
import useDidMountEffect from '../hooks/useDidMountEffect';
import { classNames } from '../utils/classes';

interface ProcessTypes {
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

const ProcessGrid = () => {
	const [selected, setSelected] = useState(processArray[0]);

	const scrollToProcess = () => {
		document.getElementById(selected.contentful_id)?.scrollIntoView({ behavior: 'smooth' });
	};
	useDidMountEffect(scrollToProcess, [selected]);

	const data = useStaticQuery(query);
	const processes = data.allContentfulProcessGrid.nodes;

	return (
		<section className="bg-orange-200">
			<div className="mx-auto max-w-2xl px-4 pb-5 font-roman sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<SubTitle title="How I go from idea to item, start to finish..." />
					<ProcessNav selected={selected} setSelected={setSelected} />
				</div>

				<div className="mt-5 space-y-5 ">
					{processes.map((process: ProcessTypes, processIdx: any) => (
						<div
							id={`${process.contentful_id}`}
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
								<div className="aspect-w-4 aspect-h-2 overflow-hidden rounded-sm bg-gray-100 ">
									<GatsbyImage
										image={process.image.gatsbyImageData}
										alt={process.imageAlt}
										className="object-cover object-center"
									/>
								</div>
							</div>
							<div className="mb-5 border-b border-dashed border-white sm:hidden" />
						</div>
					))}
				</div>
			</div>
		</section>
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
