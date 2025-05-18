import Icon from '@/components/icons/Icon.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'], // Docs 탭 자동 생성
  args: {
    icon: 'src/assets/logo.svg',
    label: '홈',
    background: 'surface',
    size: 'md',
    sorting: 'vertical',
  },
  argTypes: {
    background: {
      control: { type: 'radio' },
      options: ['surface', 'trans'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
    },
    sorting: {
      control: { type: 'radio' },
      options: ['vertical', 'horizon'],
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
type Story = StoryObj<typeof Icon>

export const DocsOnly: Story = {}
