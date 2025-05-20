import BaseIcon from '@/components/icons/BaseIcon.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof BaseIcon> = {
  title: 'UI/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  args: {
    icon: 'BaseIcon',
    background: 'surface',
    size: 'md',
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

type Story = StoryObj<typeof BaseIcon>

export const DocsOnly: Story = {}
