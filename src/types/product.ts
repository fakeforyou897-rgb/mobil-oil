export type OilBase = 'Full Synthetic' | 'Synthetic Blend' | 'Mineral'

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  viscosity: string
  volume: string
  base: OilBase
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  images: string[]
  image: string
  stock: number
  specs: Record<string, string>
  description: string
  tags: string[]
  isBestseller?: boolean
  isNew?: boolean
}
