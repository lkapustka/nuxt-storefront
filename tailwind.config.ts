import { Config } from 'tailwindcss';

export default <Config>{
  content: [
    'app.vue',
    './components/**/*.vue',
    './pages/**/*.vue',
    './layputs/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
