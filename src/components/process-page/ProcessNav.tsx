import Heading from '../typography/Heading';
import processArray from '../../data/process-nav-data';
import React, { Fragment } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { classNames } from '../utils/classes';
import { Listbox, Transition } from '@headlessui/react';
import { ProcessNavPropTypes } from '../../../models/process-page/nav.model';


const ProcessNav = (props: ProcessNavPropTypes) => {
	return (
		<Listbox value={props.selected} onChange={props.setSelected}>
			{({ open }) => (
				<>
					<div className="relative mt-1">
						<Heading heading="Jump to process step:" />
						<Listbox.Button className="sm:text-md relative mt-2 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary">
							<span className="block truncate">{props.selected.name}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon className="h-5 w-5 text-secondary" aria-hidden="true" />
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="text-md absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg">
								{processArray.map(process => (
									<Listbox.Option
										key={process.id}
										className={({ active }) =>
											classNames(
												active ? 'bg-primary text-secondary' : 'text-secondary',
												'relative cursor-default select-none py-2 pl-3 pr-9',
											)
										}
										value={process}
									>
										{({ selected }) => (
											<>
												<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
													{process.name}
												</span>
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
};

export default ProcessNav;
