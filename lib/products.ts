export type ProductCategory = 'granizados' | 'especiales' | 'combinados'

export type Size = '9oz' | '12oz' | '16oz' | '22oz'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  description: string
  hasAlcohol: boolean
  prices: {
    '9oz'?: number
    '12oz'?: number
    '16oz'?: number
    '22oz'?: number
  }
  toppings: {
    '9oz'?: string
    '12oz'?: string
    '16oz'?: string
    '22oz'?: string
  }
  outOfStock?: boolean
}

export interface CartItem {
  product: Product
  size: Size
  quantity: number
  selectedFlavors?: string[] // Para combinados
  notes?: string
}

export interface OrderData {
  items: CartItem[]
  customer: {
    name: string
    phone: string
    email: string
    address: string
    notes: string
  }
  total: number
}

export const GRANIZADOS: Product[] = [
  {
    id: 'ojo-diablo',
    name: 'Ojo de Diablo (Tequila)',
    category: 'granizados',
    description: 'Granizado intenso con un toque picante y tequila',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'tussy',
    name: 'Tussy (Vodka)',
    category: 'granizados',
    description: 'Sabor dulce y refrescante con vodka',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'bubbaloo',
    name: 'Bubbaloo (Vodka)',
    category: 'granizados',
    description: 'El clasico sabor de chicle con vodka',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'mora-azul',
    name: 'Mora Azul (Vodka)',
    category: 'granizados',
    description: 'Explosion de sabor a mora con vodka y un color vibrante',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },

  {
    id: 'tamarindo',
    name: 'Smirnoff Tamarindo',
    category: 'granizados',
    description: 'Sabor agridulce tradicional con un toque de picante muy refrescante',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'maracuya',
    name: 'Maracuyá (Tequila)',
    category: 'granizados',
    description: 'Sabor tropical fresco y vibrante con tequila',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
]

export const ESPECIALES: Product[] = [
  {
    id: 'maracumoy',
    name: 'Maracumoy',
    category: 'especiales',
    description: 'Sin alcohol. Trozos de mango, 3 lonchas de mango, chamoy, tajin, gomita y bolitas de chamoy',
    hasAlcohol: false,
    prices: { '12oz': 14000, '16oz': 17000 },
    toppings: {
      '12oz': 'Trozos de mango, 3 lonchas de mango, chamoy, tajin, gomita, bolitas de chamoy',
      '16oz': 'Trozos de mango, 3 lonchas de mango, chamoy, tajin, gomita, bolitas de chamoy, dulce bandera'
    }
  },
  {
    id: 'mora-azul-sl',
    name: 'Mora Azul SL',
    category: 'especiales',
    description: 'Sin alcohol. Refrescante sabor a mora azul sin licor',
    hasAlcohol: false,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'bubbaloo-sl',
    name: 'Bubbaloo SL',
    category: 'especiales',
    description: 'Sin alcohol. Sabor a chicle estilo Bubbaloo',
    hasAlcohol: false,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'manzana-verde-sl',
    name: 'Manzana Verde SL',
    category: 'especiales',
    description: 'Sin alcohol. Refrescante sabor manzana verde sin licor',
    hasAlcohol: false,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000, '22oz': 20000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera',
      '22oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
]

export const ALL_PRODUCTS = [...GRANIZADOS, ...ESPECIALES]

export const COMBINABLE_FLAVORS = GRANIZADOS.map(g => g.name)
