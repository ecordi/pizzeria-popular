export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  variants?: { name: string; price: number }[]
  image?: string
  badge?: string
}

export interface MenuCategory {
  id: string
  name: string
  icon: string
  items: MenuItem[]
  subcategories?: MenuCategory[]
}

export interface MenuSection {
  id: string
  name: string
  icon: string
  image?: string
  categories: MenuCategory[]
}

export const menuData: MenuSection[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    icon: "🍕",
    image: "https://cucinago.ar/image/cloud/52005.jpg",
    categories: [
      {
        id: "tradicionales",
        name: "Tradicionales",
        icon: "🔥",
        items: [
          {
            id: "margherita-albahaca",
            name: "Margherita con Albahaca",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella y albahaca fresca.",
            price: 18800,
            variants: [
              { name: "Grande", price: 18800 },
              { name: "Pequeña", price: 12300 },
              { name: "Mitad", price: 10300 }
            ],
            image: "https://cucinago.ar/image/cloud/51569.jpg"
          },
          {
            id: "margherita-oregano",
            name: "Margherita con Orégano",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella y orégano.",
            price: 18800,
            variants: [
              { name: "Grande", price: 18800 },
              { name: "Pequeña", price: 12300 },
              { name: "Mitad", price: 10300 }
            ],
            image: "https://cucinago.ar/image/cloud/50477.jpg"
          },
          {
            id: "napoletana",
            name: "Napoletana",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, tomate, ajo y orégano.",
            price: 19800,
            variants: [
              { name: "Grande", price: 19800 },
              { name: "Pequeña", price: 13400 },
              { name: "Mitad", price: 11100 }
            ],
            image: "https://cucinago.ar/image/cloud/51570.jpg"
          },
          {
            id: "fugazzetta",
            name: "Fugazzetta",
            description: "Pizza en horno de barro con mozzarella y cebolla.",
            price: 20400,
            variants: [
              { name: "Grande", price: 20400 },
              { name: "Pequeña", price: 13600 },
              { name: "Mitad", price: 11100 }
            ],
            image: "https://cucinago.ar/image/cloud/51564.jpg"
          },
          {
            id: "jamon-cocido",
            name: "Jamón Cocido",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella y jamón cocido.",
            price: 20600,
            variants: [
              { name: "Grande", price: 20600 },
              { name: "Pequeña", price: 14200 },
              { name: "Mitad", price: 10900 }
            ],
            image: "https://cucinago.ar/image/cloud/51565.jpg"
          },
          {
            id: "putanesca",
            name: "Putanesca",
            description: "Pizza en horno de barro con rodajas de tomate, mozzarella, anchoas y orégano.",
            price: 23400,
            variants: [
              { name: "Grande", price: 23400 },
              { name: "Pequeña", price: 14500 },
              { name: "Mitad", price: 11800 }
            ],
            image: "https://cucinago.ar/image/cloud/51568.jpg"
          }
        ]
      },
      {
        id: "populares",
        name: "Populares",
        icon: "⭐",
        items: [
          {
            id: "especial",
            name: "Especial",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, pimientos al rescoldo, jamón cocido, huevos y olivas verdes.",
            price: 27200,
            variants: [
              { name: "Grande", price: 27200 },
              { name: "Pequeña", price: 17900 },
              { name: "Mitad", price: 14100 }
            ],
            image: "https://cucinago.ar/image/cloud/51573.jpg",
            badge: "Popular"
          },
          {
            id: "4-formaggi",
            name: "4 Formaggi",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, queso azul, provolone y gruyere.",
            price: 27500,
            variants: [
              { name: "Grande", price: 27500 },
              { name: "Pequeña", price: 19800 },
              { name: "Mitad", price: 14300 }
            ],
            image: "https://cucinago.ar/image/cloud/51528.jpg"
          },
          {
            id: "pepperoni",
            name: "Pepperoni",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella y pepperoni original estilo New York.",
            price: 28900,
            variants: [
              { name: "Grande", price: 28900 },
              { name: "Pequeña", price: 20800 },
              { name: "Mitad", price: 15200 }
            ],
            image: "https://cucinago.ar/image/cloud/51529.jpg",
            badge: "Favorita"
          },
          {
            id: "americana",
            name: "Americana",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, pollo a la barbacoa, panceta, cheddar, cebolla morada y verdeo.",
            price: 31500,
            variants: [
              { name: "Grande", price: 31500 },
              { name: "Pequeña", price: 21100 },
              { name: "Mitad", price: 14500 }
            ],
            image: "https://cucinago.ar/image/cloud/51531.jpg"
          },
          {
            id: "rucula",
            name: "Rúcula",
            description: "Pizza en horno de barro con mozzarella, rúcula, tomates cherry, olivas negras, provolone, jamón crudo y aceite de oliva.",
            price: 34700,
            variants: [
              { name: "Grande", price: 34700 },
              { name: "Pequeña", price: 24400 },
              { name: "Mitad", price: 17400 }
            ],
            image: "https://cucinago.ar/image/cloud/51572.jpg"
          },
          {
            id: "palma",
            name: "Palma",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, pimientos al rescoldo, palmitos, salsa golf y jamón crudo.",
            price: 39500,
            variants: [
              { name: "Grande", price: 39500 },
              { name: "Pequeña", price: 29300 },
              { name: "Mitad", price: 20200 }
            ],
            image: "https://cucinago.ar/image/cloud/51524.jpg"
          }
        ]
      },
      {
        id: "gourmet",
        name: "Gourmet",
        icon: "👨‍🍳",
        items: [
          {
            id: "burrata",
            name: "Burrata",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, rúcula, jamón crudo, burrata, tomate, olivas negras y aceite de oliva.",
            price: 37000,
            variants: [
              { name: "Grande", price: 37000 },
              { name: "Pequeña", price: 29100 }
            ],
            image: "https://cucinago.ar/image/cloud/51533.jpg",
            badge: "Premium"
          },
          {
            id: "capresse",
            name: "Capresse",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, tomate fresco, tomates cherrys, tomate asado, mermelada de tomate, burrata y albahaca.",
            price: 39800,
            image: "https://cucinago.ar/image/cloud/51575.jpg",
            badge: "Chef"
          }
        ]
      },
      {
        id: "agridulces",
        name: "Agridulces",
        icon: "🍯",
        items: [
          {
            id: "pera",
            name: "Pera",
            description: "Pizza en horno de barro con peras frescas, queso azul, mozzarella, nueces, cebolla de verdeo y miel.",
            price: 33700,
            variants: [
              { name: "Grande", price: 33700 },
              { name: "Pequeña", price: 23100 },
              { name: "Mitad", price: 16700 }
            ],
            image: "https://cucinago.ar/image/cloud/51525.jpg"
          },
          {
            id: "anana",
            name: "Ananá",
            description: "Pizza en horno de barro con salsa de tomate, mozzarella, jamón cocido y ananás en azúcar negra caramelizada.",
            price: 32900,
            variants: [
              { name: "Grande", price: 32900 },
              { name: "Pequeña", price: 26100 },
              { name: "Mitad", price: 18200 }
            ],
            image: "https://cucinago.ar/image/cloud/51563.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "calzonis",
    name: "Calzonis",
    icon: "🥟",
    image: "https://cucinago.ar/image/cloud/52004.jpg",
    categories: [
      {
        id: "calzonis-menu",
        name: "Calzonis",
        icon: "🥟",
        items: [
          {
            id: "calzoni-romano",
            name: "Calzoni Romano",
            description: "Calzoni con puré de calabaza, mozzarella, queso azul, queso provolone y nueces.",
            price: 22990,
            image: "https://cucinago.ar/image/cloud/52818.jpg"
          },
          {
            id: "calzoni-piamontes",
            name: "Calzoni Piamontés",
            description: "Calzoni con pimientos en conserva, aceitunas, mozzarella, tomates, queso provolone, rúcula, jamón cocido, aceite de oliva y sal.",
            price: 27720,
            image: "https://cucinago.ar/image/cloud/52819.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗",
    image: "https://cucinago.ar/image/cloud/52002.jpg",
    categories: [
      {
        id: "clasicos-entradas",
        name: "Clásicos",
        icon: "🍟",
        items: [
          {
            id: "faina",
            name: "Fainá",
            description: "Fainá con provolone gratinado.",
            price: 4900,
            image: "https://cucinago.ar/image/cloud/51657.jpg"
          },
          {
            id: "faina-capresse",
            name: "Fainá Capresse",
            description: "Fainá con provolone gratinado, rúcula y tomates cherrys.",
            price: 5300,
            image: "https://cucinago.ar/image/cloud/54097.jpg"
          },
          {
            id: "bastoncitos-mozzarella",
            name: "Bastoncitos de Mozzarella",
            description: "Bastoncitos empanados con relleno de mozzarella.",
            price: 11000,
            image: "https://cucinago.ar/image/cloud/51651.jpg"
          },
          {
            id: "papas-clasicas",
            name: "Papas Clásicas",
            description: "Papas fritas clásicas.",
            price: 10000,
            image: "https://cucinago.ar/image/cloud/51654.jpg"
          }
        ]
      },
      {
        id: "panes",
        name: "Panes",
        icon: "🥖",
        items: [
          {
            id: "pan-capri",
            name: "Pan de la Casa Capri",
            description: "Pan de la casa al horno de barro con cebolla morada, queso parmesano y un toque de aceite de oliva.",
            price: 2200,
            image: "https://cucinago.ar/image/cloud/51655.jpg"
          },
          {
            id: "pan-mediterraneo",
            name: "Pan de la Casa Mediterráneo",
            description: "Pan de la casa al horno de barro, con tomates cherrys, olivas negras, hierbas y queso parmesano.",
            price: 2200,
            image: "https://cucinago.ar/image/cloud/51655.jpg"
          }
        ]
      },
      {
        id: "provoletas",
        name: "Provoletas",
        icon: "🧀",
        items: [
          {
            id: "provoleta-clasica",
            name: "Provoleta Clásica con Hierbas",
            description: "Provoleta clásica con hierbas frescas.",
            price: 13400,
            image: "https://cucinago.ar/image/cloud/51659.jpg"
          },
          {
            id: "provoleta-tomate",
            name: "Provoleta con Salsa de Tomate",
            description: "Provoleta con salsa de tomate casera.",
            price: 13900,
            image: "https://cucinago.ar/image/cloud/51660.jpg"
          },
          {
            id: "provoleta-hongos",
            name: "Provoleta con Crema de Hongos",
            description: "Provoleta con salsa de tomate y crema de hongos.",
            price: 15000,
            image: "https://cucinago.ar/image/cloud/51660.jpg"
          }
        ]
      },
      {
        id: "tablas",
        name: "Tablas",
        icon: "🪵",
        items: [
          {
            id: "tabla-fiambres-2",
            name: "Tabla Popular de Fiambres x2",
            description: "Tabla de jamón cocido, jamón crudo, queso tybo, salame, queso holanda, queso azul, cazuela de lactonesa y pan de la casa a elección. Para 2 personas.",
            price: 19100,
            image: "https://cucinago.ar/image/cloud/51652.jpg"
          },
          {
            id: "tabla-fiambres-4",
            name: "Tabla Popular de Fiambres x4",
            description: "Tabla de jamón cocido, jamón crudo, queso tybo, salame, queso holanda, queso azul, cazuela de lactonesa y pan de la casa a elección. Para 4 personas.",
            price: 36600,
            image: "https://cucinago.ar/image/cloud/51660.jpg"
          },
          {
            id: "tabla-fritos",
            name: "Tabla de Fritos x4",
            description: "Aros de cebolla, tiras de milanesas, bastones de mozzarella, papas fritas, nuggets de pollo, 4 cazuelas de salsas populares a elección y 1 pan de la casa.",
            price: 38700,
            image: "https://cucinago.ar/image/cloud/54105.jpg",
            badge: "Para compartir"
          },
          {
            id: "tabla-rincon",
            name: "Tabla Rincón Nuestro",
            description: "Tabla de jamón cocido, jamón crudo, salame de la colonia, queso tybo, queso holanda, queso azul, nueces, olivas, vegetales al forno, cazuela de lactonesa y 3 panes de la casa. Para 6 personas.",
            price: 42500,
            image: "https://cucinago.ar/image/cloud/51656.jpg",
            badge: "Premium"
          }
        ]
      }
    ]
  },
  {
    id: "postres",
    name: "Postres",
    icon: "🍰",
    image: "https://cucinago.ar/image/cloud/52006.jpg",
    categories: [
      {
        id: "de-la-casa",
        name: "De la Casa",
        icon: "🏠",
        items: [
          {
            id: "blondie",
            name: "Blondie",
            description: "Blondie con arándanos y helado de mascarpone con frutos rojos.",
            price: 8000,
            image: "https://cucinago.ar/image/cloud/51668.jpg",
            badge: "Recomendado"
          },
          {
            id: "pasion-trifle",
            name: "Pasión Trifle",
            description: "Galletas de chocolate, dulce de leche, mousse de frutos rojos.",
            price: 7200,
            image: "https://cucinago.ar/image/cloud/54101.jpg"
          },
          {
            id: "affogato",
            name: "Affogato",
            description: "Helado de dulce de leche, almendras y café expreso.",
            price: 7100,
            image: "https://cucinago.ar/image/cloud/51667.jpg"
          },
          {
            id: "crumble-manzana",
            name: "Crumble de Manzana",
            description: "Crumble de manzana con bocha de helado de vainilla.",
            price: 6000,
            image: "https://cucinago.ar/image/cloud/51666.jpg"
          },
          {
            id: "brownie-oreo",
            name: "Brownie Oreo con Helado",
            description: "Brownie oreo con una bocha de helado de vainilla, cubierto con salsa de chocolate.",
            price: 5900,
            image: "https://cucinago.ar/image/cloud/51663.jpg"
          },
          {
            id: "crostatta-patagonica",
            name: "Crostatta Patagónica a la Leña",
            description: "Pizza dulce para compartir, con helado de crema, frutos rojos, frutos secos, menta fresca. Bordes rellenos de crema de chocolate.",
            price: 12100,
            image: "https://cucinago.ar/image/cloud/51660.jpg",
            badge: "Para compartir"
          }
        ]
      },
      {
        id: "clasicos-postres",
        name: "Clásicos",
        icon: "⭐",
        items: [
          {
            id: "chocotorta",
            name: "Chocotorta",
            description: "Chocotorta con galletitas de chocolate con crema de dulce de leche y queso.",
            price: 6400,
            image: "https://cucinago.ar/image/cloud/51661.jpg"
          },
          {
            id: "mousse",
            name: "Mousse",
            description: "Mousse de crema suave y espumosa de chocolate semiamargo.",
            price: 6500,
            image: "https://cucinago.ar/image/cloud/51665.jpg"
          },
          {
            id: "tiramisu",
            name: "Tiramisú",
            description: "Base de crema y vainillas humedecidas en almíbar con licor de café y un toque de cacao.",
            price: 6500,
            image: "https://cucinago.ar/image/cloud/51662.jpg"
          }
        ]
      },
      {
        id: "helados",
        name: "Helados",
        icon: "🍨",
        items: [
          {
            id: "franui-leche",
            name: "Franui con Leche",
            description: "Frambuesas de la Patagonia bañadas en chocolate blanco y chocolate con leche. SIN TACC.",
            price: 9800,
            image: "https://cucinago.ar/image/cloud/51319.jpg",
            badge: "Sin TACC"
          },
          {
            id: "franui-amargo",
            name: "Franui Amargo",
            description: "Frambuesas de la Patagonia bañadas en chocolate blanco y chocolate amargo. SIN TACC.",
            price: 9800,
            image: "https://cucinago.ar/image/cloud/51318.jpg",
            badge: "Sin TACC"
          }
        ]
      }
    ]
  },
  {
    id: "menu-infantil",
    name: "Menú Infantil",
    icon: "👶",
    image: "https://cucinago.ar/image/cloud/54093.jpg",
    categories: [
      {
        id: "kids-menu",
        name: "Menú Infantil",
        icon: "🧒",
        items: [
          {
            id: "menu-milanesas",
            name: "Menú Infantil Milanesas",
            description: "Milanesas de carne con papas fritas. Incluye bebida y postre.",
            price: 11700,
            image: "https://cucinago.ar/image/cloud/51671.jpg"
          },
          {
            id: "menu-nuggets",
            name: "Menú Infantil Nuggets",
            description: "Nuggets de pollo con papas fritas. Incluye bebida y postre.",
            price: 11900,
            image: "https://cucinago.ar/image/cloud/51653.jpg"
          },
          {
            id: "menu-noquis",
            name: "Menú Infantil Ñoquis",
            description: "Ñoquis para niños. Con opción de salsa roja, crema o mixta. Incluye bebida y postre.",
            price: 11700,
            image: "https://cucinago.ar/image/cloud/51677.jpg"
          },
          {
            id: "menu-pancho",
            name: "Menú Infantil Pancho",
            description: "Pan de pizza, salchicha artesanal estilo alemán y aderezo a elección, con guarnición. Incluye bebida y postre.",
            price: 12000,
            image: "https://cucinago.ar/image/cloud/51653.jpg"
          },
          {
            id: "menu-pizza",
            name: "Menú Infantil Pizza Margherita",
            description: "Pizza en horno de barro para niños con salsa de tomate, mozzarella, orégano y olivas verdes. Incluye bebida y postre.",
            price: 12000,
            image: "https://cucinago.ar/image/cloud/51523.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    image: "https://cucinago.ar/image/cloud/51999.jpg",
    categories: [
      {
        id: "gaseosas",
        name: "Gaseosas",
        icon: "🥤",
        items: [
          {
            id: "pepsi-354",
            name: "Pepsi 354cc",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50905.jpg"
          },
          {
            id: "7up-354",
            name: "7up 354cc",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50906.jpg"
          },
          {
            id: "mirinda-354",
            name: "Mirinda Naranja 354cc",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50904.jpg"
          }
        ]
      },
      {
        id: "aguas",
        name: "Aguas Saborizadas",
        icon: "💧",
        items: [
          {
            id: "h2o-pomelo",
            name: "H2O Pomelo 500cc",
            description: "",
            price: 3400
          },
          {
            id: "h2o-pomelo-rosado",
            name: "H2O Pomelo Rosado 500cc",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50909.jpg"
          },
          {
            id: "h2o-limon",
            name: "H2O Limón 500cc",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/55267.jpg"
          }
        ]
      },
      {
        id: "cervezas",
        name: "Cervezas",
        icon: "🍺",
        items: [
          {
            id: "corona-330",
            name: "Corona 330cc",
            description: "",
            price: 6300,
            image: "https://cucinago.ar/image/cloud/50978.jpg"
          },
          {
            id: "corona-710",
            name: "Corona 710cc",
            description: "",
            price: 10300,
            image: "https://cucinago.ar/image/cloud/51224.jpg"
          },
          {
            id: "stella-975",
            name: "Stella Artois 975cc",
            description: "",
            price: 12500,
            image: "https://cucinago.ar/image/cloud/51230.jpg"
          },
          {
            id: "stella-noire-975",
            name: "Stella Artois Noire 975cc",
            description: "",
            price: 12500,
            image: "https://cucinago.ar/image/cloud/51229.jpg"
          },
          {
            id: "stella-473",
            name: "Stella Artois 473cc Lata",
            description: "",
            price: 6800,
            image: "https://cucinago.ar/image/cloud/51232.jpg"
          }
        ]
      },
      {
        id: "energizantes",
        name: "Energizantes",
        icon: "⚡",
        items: [
          {
            id: "redbull-energy",
            name: "Red Bull Energy Drink",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50501.jpg"
          },
          {
            id: "redbull-tropical",
            name: "Red Bull Tropical",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50504.jpg"
          },
          {
            id: "redbull-sugarfree",
            name: "Red Bull Sugar Free",
            description: "",
            price: 3400,
            image: "https://cucinago.ar/image/cloud/50502.jpg"
          }
        ]
      }
    ]
  }
]

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
