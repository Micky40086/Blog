const path = require('path')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src')
    config.resolve.alias['components'] = path.resolve(
      __dirname,
      'src',
      'components'
    )

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
}
