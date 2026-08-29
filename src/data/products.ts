import type { Product } from '@/types/product'

const oilPhoto = 'https://images.pexels.com/photos/13065697/pexels-photo-13065697.jpeg?auto=compress&cs=tinysrgb&w=900'
const garagePhoto = 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85'
const enginePhoto = 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85'

export const products: Product[] = [
  {
    id: 'castrol-edge-5w30', name: 'EDGE Titanium 5W-30', brand: 'Castrol', viscosity: '5W-30', volume: '4.2 L', base: 'Full Synthetic', price: 42.9, originalPrice: 49.9,
    rating: 4.9, reviewCount: 248, image: oilPhoto, stock: 12, tags: ['API SP', 'ACEA C3'], isBestseller: true,
  },
  {
    id: 'mobil-1-0w20', name: 'Mobil 1 ESP X2 0W-20', brand: 'Mobil 1', viscosity: '0W-20', volume: '5 L', base: 'Full Synthetic', price: 54.5,
    rating: 4.8, reviewCount: 186, image: garagePhoto, stock: 8, tags: ['API SP', 'ILSAC GF-6A'], isBestseller: true,
  },
  {
    id: 'motul-8100-5w40', name: '8100 X-clean Gen2 5W-40', brand: 'Motul', viscosity: '5W-40', volume: '5 L', base: 'Full Synthetic', price: 61.0,
    rating: 4.7, reviewCount: 94, image: enginePhoto, stock: 5, tags: ['API SP', 'ACEA C3'], isNew: true,
  },
  {
    id: 'liqui-moly-molygen', name: 'Molygen New Generation', brand: 'LIQUI MOLY', viscosity: '5W-30', volume: '1 L', base: 'Synthetic Blend', price: 16.8,
    rating: 4.8, reviewCount: 71, image: oilPhoto, stock: 20, tags: ['API SN', 'ACEA A3/B4'],
  },
  {
    id: 'shell-helix-ultra', name: 'Helix Ultra 5W-40', brand: 'Shell', viscosity: '5W-40', volume: '4 L', base: 'Full Synthetic', price: 39.95,
    rating: 4.6, reviewCount: 129, image: garagePhoto, stock: 16, tags: ['API SN', 'ACEA A3/B4'],
  },
  {
    id: 'total-quartz-ineo', name: 'Quartz INEO ECS 5W-30', brand: 'TotalEnergies', viscosity: '5W-30', volume: '5 L', base: 'Full Synthetic', price: 47.25,
    rating: 4.7, reviewCount: 83, image: enginePhoto, stock: 10, tags: ['API SP', 'ACEA C2'],
  },
]
