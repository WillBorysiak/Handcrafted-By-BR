import React from "react";

import { motion } from "framer-motion";

import incentives from "../../data/store-incentives";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import { scrollAnimationVariants } from "../utils/scrollAnimationVariants";

const StoreHero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scrollAnimationVariants}
      className="font-roman"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-6 sm:p-5">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="mx-auto grid max-w-sm grid-cols-1 gap-y-5 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div
                  key={incentive.name}
                  className="p-2 text-center shadow-xl sm:flex sm:text-left lg:block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">{incentive.icon}</div>
                  </div>
                  <div className="mt-3 font-bold sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <Heading heading={incentive.name} />
                    <Paragraph text={incentive.description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoreHero;
