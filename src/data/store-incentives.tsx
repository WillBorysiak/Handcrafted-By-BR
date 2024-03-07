import React from "react";

import {
  faBagsShopping,
  faBox,
  faCreditCard,
} from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const boxIcon = <FontAwesomeIcon icon={faBox} size="3x" />;
const cardIcon = <FontAwesomeIcon icon={faCreditCard} size="3x" />;
const bagIcon = <FontAwesomeIcon icon={faBagsShopping} size="3x" />;

const incentives = [
  {
    name: "Choose from my stock",
    icon: boxIcon,
    description:
      "I only have a limited number of products to hand, however my store is updated regularly.",
  },
  {
    name: "Purchase on Etsy",
    icon: cardIcon,
    description:
      "If you see something you like, you can buy directly from Etsy on the listings page.",
  },
  {
    name: "Want a different design?",
    icon: bagIcon,
    description:
      "Have an different design in mind? Message me via Instagram or Etsy and lets see whats possible!",
  },
];

export default incentives;
