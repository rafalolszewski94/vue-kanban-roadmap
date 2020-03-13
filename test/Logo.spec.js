import { mount } from '@vue/test-utils'
import Component from '@/components/Logo'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('has NuxtLogo string', (t) => {
    const wrapper = mount(Component)
    expect(wrapper.html().includes('NuxtLogo'))
  })
})
