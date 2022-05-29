// interface colorSectionType{
//   value: string;
// id: string;
// name:string
// options: [];
// }

interface colorOptionTypes {
	checked: boolean;
}

interface itemTypes {
	checked: boolean;
	value: string;
}

const colorFilters = (section: any, option: colorOptionTypes) => {
	const colorState: string[] = [];

	if (option.checked === false) {
		option.checked = true;
		section.options.forEach((item: itemTypes) => {
			if (item.checked === true) colorState.push(item.value);
		});
		console.log(colorState);
		return;
	}

	if (option.checked === true) {
		option.checked = false;
		section.options.forEach((item: itemTypes) => {
			if (item.checked === true) colorState.push(item.value);
		});
		console.log(colorState);
		return;
	}
};

export default colorFilters;
