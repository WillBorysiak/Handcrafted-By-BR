import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReel } from '@fortawesome/pro-thin-svg-icons';
import { faMessage } from '@fortawesome/pro-thin-svg-icons';
import { faHouseChimneyBlank } from '@fortawesome/pro-thin-svg-icons';
import { faAddressCard } from '@fortawesome/pro-thin-svg-icons';

const houseIcon = <FontAwesomeIcon icon={faHouseChimneyBlank} size="3x" />;
const addressIcon = <FontAwesomeIcon icon={faAddressCard} size="3x" />;
const scissorsIcon = <FontAwesomeIcon icon={faReel} size="3x" />;
const contactIcon = <FontAwesomeIcon icon={faMessage} size="3x" />;

export const navigation = [
	{ name: 'Home', pageLink: '/', current: true, icon: houseIcon },
	{ name: 'About', pageLink: '/about', current: false, icon: addressIcon },
	{ name: 'Products', pageLink: '/products', current: false, icon: scissorsIcon },
	{ name: 'Contact', pageLink: '/contact', current: false, icon: contactIcon },
];
