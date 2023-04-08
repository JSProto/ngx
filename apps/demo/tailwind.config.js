const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    spacing: {},
    screens: {},
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
