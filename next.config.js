const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
    // this rule is to add support for global scss variables
    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: ['./src/styles/_variables.scss'],
      },
    })

    return config
  },
})
