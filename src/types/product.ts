export type OilBase = 'Full Synthetic' | 'Synthetic Blend' | 'Mineral'

export interface Product {
  id: string
  name: string
  brand: string
  viscosity: string
  volume: string
  base: OilBase
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  stock: number
  tags: string[]
  isBestseller?: boolean
  isNew?: boolean
}
