import BaseBtn from '@/components/buttons/BaseBtn.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof BaseBtn> = {
  title: 'UI/BaseBtn',
  component: BaseBtn,
  tags: ['autodocs'],
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
  parameters: {
    // Docs탭에서 Props 조작
    controls: { expanded: true },
    previewTabs: {
      'storybook/docs/panel': { hidden: false }, // Docs 탭 보이기
      canvas: { hidden: true }, // Canvas(스토리 리스트) 숨기기
    },
  },
}
export default meta

type Story = StoryObj<typeof BaseBtn>

export const DocsOnly: Story = {}
