import React from "react";

import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";

import {
  faPenRuler,
  faPlanetRinged,
  faRecycle,
  faScissors,
} from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FeatureTypes } from "../../../models/home-page/feature.model";
import Paragraph from "../typography/Paragraph";
import ParagraphTitle from "../typography/ParagraphTitle";
import SubTitle from "../typography/SubTitle";
import { scrollAnimationVariants } from "../utils/scrollAnimationVariants";

const penIcon = <FontAwesomeIcon icon={faPenRuler} size="2x" />;
const scissorsIcon = <FontAwesomeIcon icon={faScissors} size="2x" />;
const spaceIcon = <FontAwesomeIcon icon={faPlanetRinged} size="2x" />;
const recycleIcon = <FontAwesomeIcon icon={faRecycle} size="2x" />;

const HomeFeatures = () => {
  const data = useStaticQuery(query);
  const features = data.allContentfulHomeFeatures.nodes;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="overflow-hidden"
    >
      <div className=" mx-auto max-w-7xl py-5 px-4 font-roman first-letter:relative sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimationVariants}
            className="lg:col-span-1"
          >
            <SubTitle title="What makes my products great!" />
          </motion.div>
          <dl className="mt-5 space-y-5 font-bold sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature: FeatureTypes) => (
              <motion.article
                key={feature.contentful_id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scrollAnimationVariants}
                className="p-2 shadow-lg"
              >
                <dt>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-white ">
                    {feature.penIcon && penIcon}
                    {feature.scissorsIcon && scissorsIcon}
                    {feature.spaceIcon && spaceIcon}
                    {feature.recycleIcon && recycleIcon}
                  </div>
                  <ParagraphTitle title={feature.title} />
                </dt>
                <Paragraph text={feature.body} />
              </motion.article>
            ))}
          </dl>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeFeatures;

const query = graphql`
  {
    allContentfulHomeFeatures(sort: { createdAt: ASC }) {
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
