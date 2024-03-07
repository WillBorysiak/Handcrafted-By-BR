export const sortOptions = [
  { name: "Most Popular", value: "popular", current: true },
  { name: "A-Z", value: "a_z", current: false },
  { name: "Z-A", value: "z_a", current: false },
];

export const productTypes = [
  { name: "All", value: undefined, current: true },
  { name: "Tote Bags", value: "tote_bag", current: false },
  { name: "Toys", value: "toy", current: false },
  { name: "Toy Bags", value: "toy_bag", current: false },
  { name: "Kids Bags", value: "kids_bag", current: false },
  { name: "Shopping Bags", value: "shopping_bag", current: false },
  { name: "Clothing", value: "clothing", current: false },
  { name: "Soft Furnishing", value: "soft_furnishing", current: false },
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "red", label: "Red", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "pink", label: "Pink", checked: false },
      { value: "multi", label: "Multi", checked: false },
    ],
  },
  {
    id: "season",
    name: "Season",
    options: [
      { value: "valentines", label: "Valentines", checked: false },
      { value: "easter", label: "Easter", checked: false },
      { value: "christmas", label: "Christmas", checked: false },
    ],
  },
];
