export const sortOptions = [
	{ name: 'Most Popular', href: 'popular', current: true },
	{ name: 'A-Z', href: 'a_z', current: false },
	{ name: 'Z-A', href: 'z_a', current: false },
];

export const subCategories = [
	{ name: 'All', href: 'all', current: true },
	{ name: 'Tote Bags', href: 'tote_bags', current: false },
	{ name: 'Toys', href: 'toys', current: false },
	{ name: 'Toy Bags', href: 'toy_bags', current: false },
	{ name: 'Kids Bags', href: 'kids_bags', current: false },
	{ name: 'Shopping Bags', href: 'shopping_bags', current: false },
	{ name: 'Clothing', href: 'clothing', current: false },
	{ name: 'Soft Furnishing', href: 'soft_furnishing', current: false },
];

export const filters = [
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'any', label: 'Any', checked: true },
			{ value: 'beige', label: 'Beige', checked: false },
			{ value: 'blue', label: 'Blue', checked: false },
			{ value: 'red', label: 'Red', checked: false },
			{ value: 'green', label: 'Green', checked: false },
			{ value: 'pink', label: 'Pink', checked: false },
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
