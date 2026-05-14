export type ProductCategory = 'granizados' | 'especiales' | 'cremosos' | 'combinados'

export type Size = '9oz' | '12oz' | '16oz'

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
  }
  toppings: {
    '9oz'?: string
    '12oz'?: string
    '16oz'?: string
  }
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
    name: 'Ojo de Diablo',
    category: 'granizados',
    description: 'Granizado intenso con un toque picante y atrevido',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'tussy',
    name: 'Tussy',
    category: 'granizados',
    description: 'Sabor dulce y refrescante que te encantara',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'bubbaloo',
    name: 'Bubbaloo',
    category: 'granizados',
    description: 'El clasico sabor de chicle que todos amamos',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'mora-azul',
    name: 'Mora Azul',
    category: 'granizados',
    description: 'Explosion de sabor a mora con un color vibrante',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'tamarindo',
    name: 'Tamarindo',
    category: 'granizados',
    description: 'Sabor agridulce tradicional muy refrescante',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'beso-negro',
    name: 'Beso Negro',
    category: 'granizados',
    description: 'Misterioso y delicioso, una experiencia unica',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  },
  {
    id: 'smirnoff-ice',
    name: 'Smirnoff Ice',
    category: 'granizados',
    description: 'El clasico Smirnoff en version granizada',
    hasAlcohol: true,
    prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
    toppings: {
      '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
      '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
      '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
    }
  }
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
  }
]

export const CREMOSOS: Product[] = [
  {
    id: 'baileys',
    name: 'Baileys',
    category: 'cremosos',
    description: 'Cremoso con chocolate en polvo y licor Baileys',
    hasAlcohol: true,
    prices: { '9oz': 11000, '12oz': 14000, '16oz': 18000 },
    toppings: {
      '9oz': 'Chocolate en polvo',
      '12oz': 'Chocolate en polvo',
      '16oz': 'Chocolate en polvo, gomita dulce bandera'
    }
  },
  {
    id: 'quipitos',
    name: 'Quipitos',
    category: 'cremosos',
    description: 'Sin alcohol. Cremoso con polvo de Quipitos',
    hasAlcohol: false,
    prices: { '9oz': 11000, '12oz': 14000, '16oz': 18000 },
    toppings: {
      '9oz': 'Polvo de Quipitos',
      '12oz': 'Polvo de Quipitos',
      '16oz': 'Polvo de Quipitos, gomita dulce bandera'
    }
  }
]

export const ALL_PRODUCTS = [...GRANIZADOS, ...ESPECIALES, ...CREMOSOS]

export const COMBINABLE_FLAVORS = GRANIZADOS.map(g => g.name)
