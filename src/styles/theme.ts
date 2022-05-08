import { Theme } from '@/types/Theme'

export const theme: Theme = {
  text: {
    primary: '#2e2933',
    secondary: '#6d6970',
  },
  error: '#e51817',
  success: '#00f2c3',
  info: '#006b9980',
  input: {
    text: '#433e47',
    error: '#e51817',
    idle: {
      background: '#fff',
      border: '#eaeaeb',
    },
    focus: {
      background: '#e6fef9',
      border: '#00f2c3',
    },
  },
  button: {
    primary: {
      idle: {
        color: '#fff',
        background: '#7c01ff',
      },
      hover: {
        color: '#fff',
        background: '#5701b3',
      },
    },
    secondary: {
      idle: {
        color: '#2d2d2d',
        background: '#ffffff',
      },
      hover: {
        color: '#2d2d2d',
        background: '#dddddd',
      },
    },
  },
}
