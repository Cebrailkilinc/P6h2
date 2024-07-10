import * as palette from './packages/theme/palette';
import defaultScheme from './packages/theme/scheme-dark';
import { buildExtend } from './packages/util/tailwind';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './module/**/*.{js,ts,jsx,tsx,mdx}',
    './core/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: palette,
    fontFamily: {
      inter: 'var(--font-inter)',
    },
    extend: buildExtend(defaultScheme),
  },
  plugins: [],
};