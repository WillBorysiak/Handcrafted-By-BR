// interface colorSectionType{
//   value: string;
// id: string;
// name:string
// options: [];
// }

interface categoryOptionTypes {
	checked: boolean;
}

interface itemTypes {
	checked: boolean;
	value: string;
}

const categoryFilters = (section: any, option: categoryOptionTypes) => {
	const categoryState: string[] = [];

	if (option.checked === false) {
		option.checked = true;
		section.options.forEach((item: itemTypes) => {
			if (item.checked === true) categoryState.push(item.value);
		});
		return categoryState;
	}

	if (option.checked === true) {
		option.checked = false;
		section.options.forEach((item: itemTypes) => {
			if (item.checked === true) categoryState.push(item.value);
		});
		return categoryState;
	}
};

export default categoryFilters;
