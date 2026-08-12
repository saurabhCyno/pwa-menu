import type { MenuItem } from "@/types/menu";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "veg-001",
    name: "Paneer Butter Masala",
    description: "Creamy tomato gravy with soft cottage cheese cubes",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-002",
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in rich buttery sauce",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1546833990-b9f581a1996d?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-003",
    name: "Veg Biryani",
    description: "Fragrant basmati rice with mixed vegetables and spices",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51c?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-004",
    name: "Margherita Pizza",
    description: "Classic thin crust with fresh mozzarella and basil",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-005",
    name: "Veg Burger",
    description: "Crispy patty with lettuce, tomato, and special sauce",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1520072959219-c083dc6673a8?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-006",
    name: "French Fries",
    description: "Golden crispy fries with a hint of sea salt",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-007",
    name: "Masala Dosa",
    description: "Crispy crepe filled with spiced potato masala",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1668236549570-865775108474?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-008",
    name: "Palak Paneer",
    description: "Fresh spinach curry with cubes of cottage cheese",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-009",
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy fried bread",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1626074353765-517a3e4a392f?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-010",
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with crisp vegetables and soy glaze",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-011",
    name: "Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and parmesan",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    category: "veg",
  },
  {
    id: "veg-012",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil with balsamic",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1608897012199-88486ecdb5ca?w=800&q=80",
    category: "veg",
  },
  {
    id: "nonveg-001",
    name: "Chicken Biryani",
    description: "Aromatic rice layered with tender spiced chicken",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51c?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-002",
    name: "Butter Chicken",
    description: "Tandoori chicken in velvety tomato-butter gravy",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1603894584375-5ac82b2ae398?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-003",
    name: "Fish Fry",
    description: "Crispy golden fish fillets with tangy lemon dip",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-004",
    name: "Egg Curry",
    description: "Boiled eggs simmered in spiced onion-tomato gravy",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1589302168060-964664b93a0b?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-005",
    name: "Chicken Tikka",
    description: "Char-grilled marinated chicken with mint chutney",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9e1697?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-006",
    name: "Mutton Rogan Josh",
    description: "Kashmiri slow-cooked lamb in aromatic red gravy",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-007",
    name: "Prawn Masala",
    description: "Juicy prawns in a fiery coastal-style curry",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1565680018434-b5133055a852?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-008",
    name: "Chicken Wings",
    description: "Crispy wings tossed in smoky barbecue glaze",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-009",
    name: "Lamb Kebab",
    description: "Minced lamb skewers with herbs and spices",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1529042410759-b0541200e034?w=800&q=80",
    category: "non-veg",
  },
  {
    id: "nonveg-010",
    name: "Tandoori Chicken",
    description: "Half chicken marinated in yogurt and tandoor spices",
    price: 390,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9e1697?w=800&q=80",
    category: "non-veg",
  },
];
