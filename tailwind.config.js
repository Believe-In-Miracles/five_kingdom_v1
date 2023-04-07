module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      custom: ['MyCustomFont', 'sans-serif'],
      Canterbury: ['Canterbury']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}