import {
  colors,
  fontSizes,
  fontWeights,
  radius,
  space,
} from '@frontend-challenge/tokens'
import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        ...fontSizes,
      },
      fontWeight: {
        ...fontWeights,
      },
      borderRadius: {
        ...radius,
      },
      spacing: {
        ...space,
      },
    },
  },
} satisfies Omit<Config, 'content'>

export default config
