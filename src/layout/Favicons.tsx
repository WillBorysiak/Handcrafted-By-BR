import favicon from '../assets/images/favicons/favicon.ico';
import favicon_16 from '../assets/images/favicons/favicon-16x16.png';
import favicon_32 from '../assets/images/favicons/favicon-32x32.png';
import favicon_android_192 from '../assets/images/favicons/android-chrome-192x192.png';
import favicon_apple_180 from '../assets/images/favicons/apple-touch-icon.png';
import React from 'react';

const Favicons = () => {
	return (
		<>
			<link rel="shortcut icon" type="image/x-icon" href={favicon} />
			<link rel="icon" type="image/png" sizes="16x16" href={favicon_16} />
			<link rel="icon" type="image/png" sizes="32x32" href={favicon_32} />
			<link rel="icon" type="image/png" sizes="192x192" href={favicon_android_192} />
			<link rel="apple-touch-icon" sizes="180x180" href={favicon_apple_180} />
		</>
	);
};

export default Favicons;
