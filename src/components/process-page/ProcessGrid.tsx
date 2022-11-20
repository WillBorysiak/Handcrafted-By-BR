import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { motion } from 'framer-motion';

import { scrollAnimationVariants } from '../utils/scrollAnimationVariants';
import { ProcessTypes } from '../../../models/process-page/grid.model';
import processArray from '../../data/process-nav-data';
import useDidMountEffect from '../hooks/useDidMountEffect';
import { classNames } from '../utils/classes';

import SubTitle from '../typography/SubTitle';
import ProcessNav from './ProcessNav';

const ProcessGrid = () => {
	const [selected, setSelected] = useState(processArray[0]);

	const scrollToProcess = () => {
		document.getElementById(selected.contentful_id)?.scrollIntoView({ behavior: 'smooth' });
	};
	useDidMountEffect(scrollToProcess, [selected]);

	const data = useStaticQuery(query);
	const processes = data.allContentfulProcessGrid.nodes;

	return (
		<section className="mx-auto max-w-2xl px-4 pb-5 font-roman sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={scrollAnimationVariants}
				className="mx-auto max-w-3xl text-center"
			>
				<SubTitle title="How I go from idea to item, start to finish..." />
				<ProcessNav selected={selected} setSelected={setSelected} />
			</motion.div>
			<div className="mt-5 space-y-5 ">
				{processes.map((process: ProcessTypes) => (
					<motion.div
						id={`${process.contentful_id}`}
						key={process.contentful_id}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={scrollAnimationVariants}
						className="flex flex-col-reverse p-2 shadow-2xl lg:grid lg:grid-cols-4 lg:items-center lg:gap-x-8 "
					>
						<div className={classNames('mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4')}>
							<h2
								id="sub-title"
								className=" font-roman text-2xl font-extrabold tracking-wider text-gray-900 sm:text-3xl "
							>
								{process.title}
							</h2>
							<p id="paragraph" className="mt-3  pb-5 text-base font-bold text-gray-500  md:text-xl">
								{process.body.body}
							</p>
						</div>
						<div className={classNames('flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8')}>
							<div className="flex w-full items-center justify-center overflow-hidden rounded-sm ">
								<GatsbyImage
									image={process.image.gatsbyImageData}
									alt={process.imageAlt}
									className="object-cover object-center"
								/>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default ProcessGrid;

const query = graphql`
	{
		allContentfulProcessGrid(sort: { createdAt: ASC }) {
			nodes {
				title
				body {
					body
				}
				contentful_id
				image {
					gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED, height: 400, width: 400, quality: 100)
				}
				imageAlt
			}
		}
	}
`;
