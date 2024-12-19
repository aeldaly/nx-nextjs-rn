/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    '../../libs/shared/src/**/*.{js,ts,jsx,tsx}', // Include shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add NativeWind preset for React Native compatibility
  presets: [require('nativewind/tailwind/css')],
};
