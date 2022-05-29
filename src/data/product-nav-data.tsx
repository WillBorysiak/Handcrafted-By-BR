export const sortOptions = [
	{ name: 'Most Popular', value: 'popular', current: true },
	{ name: 'A-Z', value: 'a_z', current: false },
	{ name: 'Z-A', value: 'z_a', current: false },
];

export const subCategories = [
	{ name: 'All', value: 'all', current: true },
	{ name: 'Tote Bags', value: 'tote_bags', current: false },
	{ name: 'Toys', value: 'toys', current: false },
	{ name: 'Toy Bags', value: 'toy_bags', current: false },
	{ name: 'Kids Bags', value: 'kids_bags', current: false },
	{ name: 'Shopping Bags', value: 'shopping_bags', current: false },
	{ name: 'Clothing', value: 'clothing', current: false },
	{ name: 'Soft Furnishing', value: 'soft_furnishing', current: false },
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
