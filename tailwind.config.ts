import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#1a237e',
        'secondary-orange': '#ff6f00',
        'accent-green': '#00e676',
        'neutral-gray': '#f5f5f5',
        'text-dark': '#212121',
        'text-light': '#757575'
      }
    }
  },
  plugins: []
} satisfies Config;

