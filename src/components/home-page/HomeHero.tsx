import React from "react";

import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import SubTitle from "../typography/SubTitle";
import { scrollAnimationVariants } from "../utils/scrollAnimationVariants";

const HomeHero = () => {
  const data = useStaticQuery(query);
  const images = data.allContentfulHomeHeroImages.nodes[0].heroImages;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={scrollAnimationVariants}
      className="relative overflow-hidden"
    >
      <div className="pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-4">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="flex flex-col items-center ">
              <SubTitle title="Made with fabric and thread in Derbyshire, England." />
              <div className=" mt-3 flex w-1/2 justify-center">
                <StaticImage
                  src="../../assets/images/uk-icon.png"
                  alt="The UK flag"
                  height={50}
                />
              </div>
            </div>

            <div className="font-roman font-bold">
              <p className="mt-4 text-center text-xl text-gray-500 md:mt-8">
                Planned from your imagination.
              </p>
              <p className="mt-4 text-center text-xl text-gray-500">
                Sketched and drawn by hand.
              </p>
              <p className="mt-4 text-center text-xl text-gray-500">
                Sewn together beautifully.
              </p>
              <p className="mt-4 text-center text-xl text-gray-500">
                Delivered directly to your doorstep.
              </p>
            </div>
          </div>

          <div className="mt-5">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-sm shadow-xl sm:opacity-0 lg:opacity-100">
                      <GatsbyImage
                        image={images[0].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-sm shadow-xl">
                      <GatsbyImage
                        image={images[1].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <GatsbyImage
                        image={images[2].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <GatsbyImage
                        image={images[3].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <GatsbyImage
                        image={images[4].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <GatsbyImage
                        image={images[5].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <GatsbyImage
                        image={images[6].gatsbyImageData}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;

const query = graphql`
  {
    allContentfulHomeHeroImages {
      nodes {
        heroImages {
          filename
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;
