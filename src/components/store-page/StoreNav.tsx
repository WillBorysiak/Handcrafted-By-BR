import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';

import { Link } from 'gatsby';

interface StoreNavProps {
	currentPage: string;
}

const StoreNav = (props: StoreNavProps) => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-4">
				<li>
					<div>
						<Link to="/" className="text-gray-400 hover:text-gray-500">
							<HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</Link>
					</div>
				</li>
				<li>
					<div className="flex items-center">
						<ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
						<Link to="/store" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
							Store
						</Link>
					</div>
				</li>
				<li>
					<div className="flex items-center">
						<ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
						<a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{props.currentPage}</a>
					</div>
				</li>
			</ol>
		</nav>
	);
};

export default StoreNav;
