import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import ProductCard from '../product/ProductCard.vue'
import { products } from '../../data/products'

describe('ProductCard', () => {
  it('renders product details and supports adding to cart', async () => {
    const wrapper = mount(ProductCard, {
      props: { product: products[0] },
      global: {
        plugins: [createPinia()],
        stubs: { RouterLink: { template: '<a><slot /></a>' } },
      },
    })

    expect(wrapper.text()).toContain('EDGE Titanium 5W-30')
    await wrapper.get('button[aria-label="Add EDGE Titanium 5W-30 to cart"]').trigger('click')
    expect(wrapper.find('button[aria-label="Add EDGE Titanium 5W-30 to cart"]').exists()).toBe(true)
  })
})
