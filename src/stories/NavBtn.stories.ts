import NavBtn from '@/components/buttons/NavBtn.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof NavBtn> = {
  title: 'UI/NavBtn',
  component: NavBtn,
  tags: ['autodocs'],
  args: {
    nav: '<',
  },
}
export default meta

type Story = StoryObj<typeof NavBtn>

export const DocsOnly: Story = {}
