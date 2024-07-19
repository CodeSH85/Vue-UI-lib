import { mount } from '@vue/test-utils'
import ButtonComp from '../Button'

const wrapper = mount(ButtonComp, {
  props: {
    variant: 'primary',
    size: 'large',
    color: 'red',
    disabled: false,
  },
  slots: {
    default: 'Click me',
  },
})

describe('ButtonComp with Vue Test Utils', () => {
  it('renders correctly', () => {
    expect(wrapper.classes()).toContain('primary')
    expect(wrapper.classes()).toContain('large')
    expect(wrapper.text()).toContain('Click me')
  })

  it('emits click event', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
