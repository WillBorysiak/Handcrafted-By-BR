export const sortOptions = [
	{ name: 'Most Popular', href: 'popular', current: true },
	{ name: 'A-Z', href: 'azDown', current: false },
	{ name: 'Z-A', href: 'azUp', current: false },
];

export const subCategories = [
	{ name: 'Tote Bags', href: '#' },
	{ name: 'Toys', href: '#' },
	{ name: 'Toy Bags', href: '#' },
	{ name: 'Kids Bags', href: '#' },
	{ name: 'Shopping Bags', href: '#' },
	{ name: 'Clothing', href: '#' },
	{ name: 'Soft Furnishing', href: '#' },
];

export const filters = [
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'any', label: 'Any', checked: true },
			{ value: 'white', label: 'White', checked: false },
			{ value: 'beige', label: 'Beige', checked: false },
			{ value: 'blue', label: 'Blue', checked: false },
			{ value: 'brown', label: 'Brown', checked: false },
			{ value: 'green', label: 'Green', checked: false },
			{ value: 'purple', label: 'Purple', checked: false },
		],
	},
	{
		id: 'category',
		name: 'Category',
		options: [
			{ value: 'general', label: 'General', checked: true },
			{ value: 'seasonal', label: 'Seasonal', checked: false },
		],
	},
];
