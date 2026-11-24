/**
 * Product catalogue shown on /products.
 *
 * Photos live in public/media/products/. Cumin, rice and onion are free-licence
 * stock (Pexels / Unsplash / Pixabay). A product with no `image` renders a
 * branded placeholder tile instead.
 */
export type ProductCategory =
  | "Fresh fruits"
  | "Fresh vegetables"
  | "Spices & seeds"
  | "Oilseeds"
  | "Grains"
  | "Dehydrated";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image?: string;
};

const p = (f: string) => `/media/products/${f}`;

export const products: Product[] = [
  {
    slug: "mango",
    name: "Mango",
    category: "Fresh fruits",
    description:
      "Hand-picked Alphonso mangoes with rich aroma, golden flesh and natural sweetness.",
    image: p("mango.jpg"),
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    category: "Fresh fruits",
    description:
      "Deep-red, juicy arils with a balanced sweet-tart taste, packed fresh for export.",
    image: p("pomegranate.jpg"),
  },
  {
    slug: "banana",
    name: "Banana",
    category: "Fresh fruits",
    description:
      "Uniform, well-filled green bananas harvested at the right maturity for ripening on arrival.",
    image: p("banana.jpg"),
  },
  {
    slug: "groundnut",
    name: "Groundnut",
    category: "Oilseeds",
    description:
      "Clean, well-dried groundnuts in shell or as kernels, suited to snacking and oil milling.",
    image: p("groundnut.jpg"),
  },
  {
    slug: "cumin",
    name: "Cumin",
    category: "Spices & seeds",
    description:
      "Aromatic cumin seed, machine-cleaned and sorted for consistent colour and flavour.",
    image: p("cumin.jpg"),
  },
  {
    slug: "sesame-seed",
    name: "Sesame seed",
    category: "Oilseeds",
    description:
      "Natural and hulled sesame seed with high oil content and a clean, nutty taste.",
    image: p("sesame.jpg"),
  },
  {
    slug: "psyllium-husk",
    name: "Psyllium husk",
    category: "Spices & seeds",
    description:
      "Fine, high-purity psyllium (isabgol) husk for food, nutraceutical and fibre applications.",
    image: p("psyllium-husk.jpg"),
  },
  {
    slug: "rice",
    name: "Rice",
    category: "Grains",
    description:
      "Long-grain basmati and non-basmati rice, milled and graded to buyer specification.",
    image: p("rice.jpg"),
  },
  {
    slug: "onion",
    name: "Onion",
    category: "Fresh vegetables",
    description:
      "Firm red and white onions with good shelf life, sorted by size and packed for transit.",
    image: p("onion.jpg"),
  },
  {
    slug: "green-chilli",
    name: "Green chilli",
    category: "Fresh vegetables",
    description:
      "Fresh, glossy green chillies with bright colour and lively heat, harvested daily.",
    image: p("green-chilli.jpg"),
  },
  {
    slug: "dehydrated-onion-garlic-powder",
    name: "Dehydrated onion & garlic powder",
    category: "Dehydrated",
    description:
      "Flakes, granules and powder made from select onion and garlic, dried to lock in flavour.",
    image: p("dehydrated-onion-garlic.jpg"),
  },
];
