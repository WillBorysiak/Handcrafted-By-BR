import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReel } from '@fortawesome/pro-thin-svg-icons';
import { faStore } from '@fortawesome/pro-thin-svg-icons';
import { faHouseChimneyBlank } from '@fortawesome/pro-thin-svg-icons';
import { faThoughtBubble } from '@fortawesome/pro-thin-svg-icons';

const houseIcon = <FontAwesomeIcon icon={faHouseChimneyBlank} size="3x" />;
const addressIcon = <FontAwesomeIcon icon={faThoughtBubble} size="3x" />;
const scissorsIcon = <FontAwesomeIcon icon={faReel} size="3x" />;
const contactIcon = <FontAwesomeIcon icon={faStore} size="3x" />;

export const navigation = [
	{ name: 'Home', pageLink: '/', current: true, icon: houseIcon },
	{ name: 'Design Process', pageLink: '/process', current: false, icon: addressIcon },
	{ name: 'Product Gallery', pageLink: '/products', current: false, icon: scissorsIcon },
	{ name: 'Store', pageLink: '/store', current: false, icon: contactIcon },
];
