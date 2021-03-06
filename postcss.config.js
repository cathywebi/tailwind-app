module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-nested'),
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.html',
          './src/index.html',
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      }),
      process.env.NODE_ENV === 'production' && require('cssnano')({
        preset: 'default',
      }),
    ]
  }