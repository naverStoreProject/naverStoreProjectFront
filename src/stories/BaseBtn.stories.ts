import BaseButton from '../components/atoms/BaseBtn.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof BaseButton> = {
  title: 'UI/BaseButton',
  component: BaseButton,
  args: {
    label: 'BaseBtn',
    size: 'md',
    color: 'primary',
    rounded: 'lg',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'surface', 'base'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'square'],
    },
    rounded: {
      control: 'select',
      options: ['full', 'lg', 'square'],
    },
  },
}
export default meta

export const Primary: StoryObj<typeof BaseButton> = {
  args: {
    label: 'Primary',
    color: 'primary',
  },
}

export const Surface: StoryObj<typeof BaseButton> = {
  args: {
    label: 'Surface',
    color: 'surface',
  },
}

export const Base: StoryObj<typeof BaseButton> = {
  args: {
    label: 'Base',
    color: 'base',
  },
}
