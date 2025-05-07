import Button from './Button.vue'

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Click Me',
    variant: 'primary',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
}

export const Danger = {
  args: {
    label: 'Delete',
    variant: 'danger',
    disabled: false,
  },
}
