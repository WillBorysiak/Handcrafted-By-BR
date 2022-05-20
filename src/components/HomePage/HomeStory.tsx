import React from 'react';

import SubTitle from '../Typography/SubTitle';

const posts = [
	{
		title: 'Boost your conversion rate',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
	},
	{
		title: 'How to use search engine optimization to drive sales',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
		imageUrl:
			'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
	},
	{
		title: 'Improve your customer experience',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
		imageUrl:
			'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
	},
];

const HomeStory = () => {
	return (
		<div className="relative bg-stone-200 px-4 pt-5 pb-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
			<div className="absolute inset-0">
				<div className="bg-stone-20 h-1/3 sm:h-2/3" />
			</div>
			<div className="relative mx-auto max-w-7xl">
				<div className="text-center">
					<SubTitle title="My Story" />
					<p className=" mx-auto mt-3 max-w-2xl font-roman text-xl text-gray-500 sm:mt-4">
						Do what you love and you'll never work a day in your life...
					</p>
				</div>
				<div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
					{posts.map(post => (
						<div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
							<div className="flex-shrink-0">
								<img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
							</div>
							<div className="flex flex-1 flex-col justify-between bg-white p-6">
								<div className="flex-1">
									<p className="text-sm font-medium text-indigo-600"></p>
									<div className="mt-2 block">
										<p className="text-xl font-semibold text-gray-900">{post.title}</p>
										<p className="mt-3 text-base text-gray-500">{post.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeStory;
