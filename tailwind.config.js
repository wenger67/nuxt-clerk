/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'primary-600': '#6C47FF',
        'primary-700': '#5639CC',
        'primary-50': '#F4F2FF',
        'success-700': '#027A48',
        'success-50': '#ECFDF3'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      }
    }
  },
  prefix: 'tw-',
  plugins: []
}
