import React from "react";

import {
  faHouseChimneyBlank,
  faReel,
  faStore,
  faThoughtBubble,
} from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const houseIcon = <FontAwesomeIcon icon={faHouseChimneyBlank} size="3x" />;
const addressIcon = <FontAwesomeIcon icon={faThoughtBubble} size="3x" />;
const reelIcon = <FontAwesomeIcon icon={faReel} size="3x" />;
const contactIcon = <FontAwesomeIcon icon={faStore} size="3x" />;

export const navigation = [
  { name: "Home", pageLink: "/", current: true, icon: houseIcon },
  { name: "Process", pageLink: "/process", current: false, icon: addressIcon },
  { name: "Gallery", pageLink: "/gallery", current: false, icon: reelIcon },
  { name: "Store", pageLink: "/store", current: false, icon: contactIcon },
];
