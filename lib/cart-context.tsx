'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CartItem, Product, Size } from '@/lib/products'

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: Size, selectedFlavors?: string[]) => void
  removeItem: (index: number) => void
  updateQuantity: (index: number, quantity: number) => void
  updateNotes: (index: number, notes: string) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product, size: Size, selectedFlavors?: string[]) => {
    const price = product.prices[size]
    if (!price) return

    const existingIndex = items.findIndex(
      item => 
        item.product.id === product.id && 
        item.size === size &&
        JSON.stringify(item.selectedFlavors) === JSON.stringify(selectedFlavors)
    )

    if (existingIndex >= 0) {
      const newItems = [...items]
      newItems[existingIndex].quantity += 1
      setItems(newItems)
    } else {
      setItems([...items, { product, size, quantity: 1, selectedFlavors }])
    }
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(index)
      return
    }
    const newItems = [...items]
    newItems[index].quantity = quantity
    setItems(newItems)
  }

  const updateNotes = (index: number, notes: string) => {
    const newItems = [...items]
    newItems[index].notes = notes
    setItems(newItems)
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, item) => {
    const price = item.product.prices[item.size] || 0
    return sum + price * item.quantity
  }, 0)

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      updateNotes,
      clearCart,
      total,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
