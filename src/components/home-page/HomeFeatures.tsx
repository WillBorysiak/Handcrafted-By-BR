import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FeatureTypes } from '../../../models/home-page/feature.model';

import SubTitle from '../typography/SubTitle';
import ParagraphTitle from '../typography/ParagraphTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler } from '@fortawesome/pro-thin-svg-icons';
import { faPlanetRinged } from '@fortawesome/pro-thin-svg-icons';
import { faScissors } from '@fortawesome/pro-thin-svg-icons';
import { faRecycle } from '@fortawesome/pro-thin-svg-icons';
import Paragraph from '../typography/Paragraph';

const penIcon = <FontAwesomeIcon icon={faPenRuler} size="2x" />;
const scissorsIcon = <FontAwesomeIcon icon={faScissors} size="2x" />;
const spaceIcon = <FontAwesomeIcon icon={faPlanetRinged} size="2x" />;
const recycleIcon = <FontAwesomeIcon icon={faRecycle} size="2x" />;

const HomeFeatures = () => {
	const data = useStaticQuery(query);
	const features = data.allContentfulHomeFeatures.nodes;

	return (
		<section className="overflow-hidden bg-orange-200">
			<div className=" mx-auto max-w-7xl py-5 px-4 font-roman first-letter:relative sm:px-6 lg:px-8">
				<div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
					<div className="lg:col-span-1">
						<SubTitle title="What makes my products so great!" />
					</div>
					<dl className="mt-5 space-y-5 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
						{features.map((feature: FeatureTypes) => (
							<article key={feature.contentful_id}>
								<dt>
									<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-white">
										{feature.penIcon && penIcon}
										{feature.scissorsIcon && scissorsIcon}
										{feature.spaceIcon && spaceIcon}
										{feature.recycleIcon && recycleIcon}
									</div>
									<ParagraphTitle title={feature.title} />
								</dt>
								<Paragraph text={feature.body} />
							</article>
						))}
					</dl>
				</div>
			</div>
		</section>
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
