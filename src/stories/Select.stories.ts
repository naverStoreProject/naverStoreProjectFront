import SelectBox from '@/components/inputs/SelectBox.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof SelectBox> = {
  title: 'UI/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  args: {
    options: ['옵션 1', '옵션 2', '옵션 3'],
    modelValue: '옵션 1',
    color: 'base',
    size: 'sm',
    rounded: 'full',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'surface', 'base'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'radio',
      options: ['full', 'lg', 'square'],
    },
    modelValue: {
      control: false,
    },
    options: {
      control: false,
    },
  },
  parameters: {
    controls: { expanded: true },
    previewTabs: {
      'storybook/docs/panel': { hidden: false },
      canvas: { hidden: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof SelectBox>

export const DocsOnly: Story = {}
