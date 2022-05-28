import React from 'react';
import Paragraph from '../typography/Paragraph';
import SubTitle from '../typography/SubTitle';

const StoreInfo = () => {
	return (
		<div className="bg-orange-200">
			<div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
				{/* Details section */}
				<section aria-labelledby="details-heading">
					<div className="flex flex-col items-center text-center">
						<SubTitle title="Browse my wares!" />
					</div>
				</section>
			</div>
		</div>
	);
};

export default StoreInfo;
