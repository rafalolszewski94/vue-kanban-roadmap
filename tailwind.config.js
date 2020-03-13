const plugin = require('tailwindcss/plugin')

module.exports = {
  variants: {
    fontSize: ['responsive', 'hover', 'focus', 'important']
  },
  theme: {
    extend: {
      colors: {
        green: {
          100: '#beff67',
          200: '#aaff53',
          300: '#96f53f',
          400: '#82e12b',
          500: '#6ECD17',
          600: '#5ab903',
          700: '#46a500',
          800: '#329100',
          900: '#1e7d00'
        },
        teal: {
          100: '#acffff',
          200: '#98ffff',
          300: '#84f8ff',
          400: '#70e4f2',
          500: '#5cd0de',
          600: '#48BCCA',
          700: '#34a8b6',
          800: '#2094a2',
          900: '#0c808e'
        }
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.${rule.selector.slice(1)}\\!`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
    })
  ]
}
