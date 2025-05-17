import BaseIcon from '@/components/atoms/BaseIcon.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof BaseIcon> = {
  title: 'UI/BaseIcon',
  component: BaseIcon,
  args: {
    icon: 'BaseIcon',
    background: 'surface',
  },
  argTypes: {
    background: {
      control: 'radio',
      options: ['surface', 'trans'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
  },
}
export default meta

export const Surface: StoryObj<typeof BaseIcon> = {
  args: {
    icon: 'Surface',
    background: 'surface',
  },
}
