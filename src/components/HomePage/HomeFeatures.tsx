import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SubTitle from '../Typography/SubTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler } from '@fortawesome/pro-thin-svg-icons';
import { faPlanetRinged } from '@fortawesome/pro-thin-svg-icons';
import { faScissors } from '@fortawesome/pro-thin-svg-icons';
import { faRecycle } from '@fortawesome/pro-thin-svg-icons';

const penIcon = <FontAwesomeIcon icon={faPenRuler} size="2x" />;
const scissorsIcon = <FontAwesomeIcon icon={faScissors} size="2x" />;
const spaceIcon = <FontAwesomeIcon icon={faPlanetRinged} size="2x" />;
const recycleIcon = <FontAwesomeIcon icon={faRecycle} size="2x" />;

interface FeatureTypes {
	title: string;
	body: string;
	icon: string;
	contentful_id: string;
	penIcon: boolean;
	spaceIcon: boolean;
	scissorsIcon: boolean;
	recycleIcon: boolean;
}

const HomeFeatures = () => {
	const data = useStaticQuery(query);
	const features = data.allContentfulHomeFeatures.nodes;

	return (
		<div className="overflow-hidden bg-orange-200">
			<div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
				<svg
					className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
					width={404}
					height={784}
					fill="none"
					viewBox="0 0 404 784"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
				</svg>

				<div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
					<div className="lg:col-span-1">
						<SubTitle title="What makes my products great!" />
					</div>
					<dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
						{features.map((feature: FeatureTypes) => (
							<div key={feature.contentful_id}>
								<dt>
									<div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-white">
										{feature.penIcon && penIcon}
										{feature.scissorsIcon && scissorsIcon}
										{feature.spaceIcon && spaceIcon}
										{feature.recycleIcon && recycleIcon}
									</div>
									<p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.title}</p>
								</dt>
								<dd className="mt-2 text-base text-gray-500">{feature.body}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default HomeFeatures;

const query = graphql`
	{
		allContentfulHomeFeatures(sort: { fields: createdAt }) {
			nodes {
				title
				body
				contentful_id
				penIcon
				recycleIcon
				scissorsIcon
				spaceIcon
			}
		}
	}
`;
