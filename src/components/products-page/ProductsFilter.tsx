import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid';

import ProductsGrid from './ProductsGrid';
import { subCategories, sortOptions, filters } from '../../data/product-nav-data';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

const ProductsFilter = () => {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [sortOrder, setSortOrder] = useState('popular');
	console.log(sortOrder);
	return (
		<div className="bg-primary">
			<div>
				{/* Mobile filter dialog */}
				<Transition.Root show={mobileFiltersOpen} as={Fragment}>
					<Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								{/* Filter Title and Button */}

								<Dialog.Panel className="relative ml-auto flex h-full  w-full max-w-xs flex-col overflow-y-auto bg-secondary py-4 pb-12 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-primary">Filters</h2>
										<button
											type="button"
											className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary p-2 text-secondary"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="sr-only">Close menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Mobile Item Types */}

									<form className="mt-4 border-t border-gray-200">
										<h3 className="sr-only">Categories</h3>
										<ul role="list" className="px-2 py-3 font-medium text-primary">
											{subCategories.map(category => (
												<li key={category.name}>
													<a href={category.href} className="block px-2 py-3">
														{category.name}
													</a>
												</li>
											))}
										</ul>

										{/* Mobile Filters */}

										{filters.map(section => (
											<Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
												{({ open }) => (
													<>
														<h3 className="-mx-2 -my-3 flow-root">
															<Disclosure.Button className="flex w-full items-center justify-between bg-primary px-2 py-3 text-secondary hover:text-gray-500">
																<span className="font-medium text-secondary">{section.name}</span>
																<span className="ml-6 flex items-center">
																	{open ? (
																		<MinusSmIcon className="h-5 w-5" aria-hidden="true" />
																	) : (
																		<PlusSmIcon className="h-5 w-5" aria-hidden="true" />
																	)}
																</span>
															</Disclosure.Button>
														</h3>
														<Disclosure.Panel className="pt-6">
															<div className="space-y-6">
																{section.options.map((option, optionIdx) => (
																	<div key={option.value} className="flex items-center">
																		<input
																			id={`filter-mobile-${section.id}-${optionIdx}`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type="checkbox"
																			defaultChecked={option.checked}
																			className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
																		/>
																		<label
																			htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																			className="ml-3 min-w-0 flex-1 text-primary"
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										))}
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Shared UI */}

				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative z-10 flex items-baseline justify-end border-b border-secondary pb-6">
						<div className="flex items-center">
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<Menu.Button className="text-secondar group inline-flex justify-center text-sm font-medium hover:text-gray-900">
										Sort
										<ChevronDownIcon
											className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-secondary group-hover:text-gray-500"
											aria-hidden="true"
										/>
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									{/* Sort Options */}

									<Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-primary shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											{sortOptions.map(option => (
												<Menu.Item key={option.name}>
													{({ active }) => (
														<li
															onClick={() => {
																const currentOption = sortOptions.find(item => item.current === true);
																currentOption.current = false;
																const newOption = sortOptions.find(item => item.href === option.href);
																newOption.current = true;
																setSortOrder(option.href);
															}}
															className={classNames(
																option.current ? 'font-medium text-secondary' : 'text-gray-500',
																active ? 'bg-gray-200' : '',
																'block px-4 py-2 text-sm',
															)}
														>
															{option.name}
														</li>
													)}
												</Menu.Item>
											))}
										</div>
									</Menu.Items>
								</Transition>
							</Menu>

							{/* Grid Button */}

							<button type="button" className="-m-2 ml-5 p-2 text-secondary hover:text-gray-500 sm:ml-7">
								<span className="sr-only">View grid</span>
								<ViewGridIcon className="h-5 w-5" aria-hidden="true" />
							</button>
							<button
								type="button"
								className="-m-2 ml-4 p-2 text-secondary hover:text-gray-500 sm:ml-6 lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="sr-only">Filters</span>
								<FilterIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>

					<section aria-labelledby="products-heading" className="pt-6 pb-24">
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>

						{/* Sub Categories Filter */}

						<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
							{/* Filters */}
							<form className="hidden lg:block">
								<h3 className="sr-only">Categories</h3>
								<ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-secondary">
									{subCategories.map(category => (
										<li key={category.name}>
											<a href={category.href}>{category.name}</a>
										</li>
									))}
								</ul>

								{/* Drop Down Filters Title and Button */}

								{filters.map(section => (
									<Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
										{({ open }) => (
											<>
												<h3 className="-my-3 flow-root">
													<Disclosure.Button className="flex w-full items-center justify-between bg-primary py-3 text-sm text-secondary hover:text-gray-500">
														<span className="font-medium text-secondary">{section.name}</span>
														<span className="ml-6 flex items-center">
															{open ? (
																<MinusSmIcon className="h-5 w-5" aria-hidden="true" />
															) : (
																<PlusSmIcon className="h-5 w-5" aria-hidden="true" />
															)}
														</span>
													</Disclosure.Button>
												</h3>

												{/* Drop Down Filters Content */}

												<Disclosure.Panel className="pt-6">
													<div className="space-y-4">
														{section.options.map((option, optionIdx) => (
															<div key={option.value} className="flex items-center">
																<input
																	id={`filter-${section.id}-${optionIdx}`}
																	name={`${section.id}[]`}
																	defaultValue={option.value}
																	type="checkbox"
																	defaultChecked={option.checked}
																	className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary"
																/>
																<label
																	htmlFor={`filter-${section.id}-${optionIdx}`}
																	className="ml-3 text-sm text-secondary"
																>
																	{option.label}
																</label>
															</div>
														))}
													</div>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								))}
							</form>

							{/* Product Gird Output */}
							<div className="lg:col-span-3">
								<ProductsGrid sortOrder={sortOrder} />
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default ProductsFilter;
