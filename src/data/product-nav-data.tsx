import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReel } from '@fortawesome/pro-thin-svg-icons';
import { faStore } from '@fortawesome/pro-thin-svg-icons';
import { faHouseChimneyBlank } from '@fortawesome/pro-thin-svg-icons';
import { faThoughtBubble } from '@fortawesome/pro-thin-svg-icons';

const storeIcon = <FontAwesomeIcon className="pr-2" icon={faStore} size="3x" />;

export const tabs = [
	{ name: 'All Products', current: true, icon: storeIcon },
	{ name: 'Tote Bags', current: false, icon: storeIcon },
	{ name: 'Toy', current: false, icon: storeIcon },
	{ name: 'Toy Bags', current: false, icon: storeIcon },
	{ name: 'Kids Bags', current: false, icon: storeIcon },
	{ name: 'Shopping Bag', current: false, icon: storeIcon },
	{ name: 'Soft Furnishing', current: false, icon: storeIcon },
	{ name: 'Clothing', current: false, icon: storeIcon },
];
