const path = require('path')
const withSass = require('@zeit/next-sass')
const loaderUtils = require('loader-utils')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    getLocalIdent: (loaderContext, localIdentName, localName, options) => {
      return getCssModuleLocalIdent(
        loaderContext,
        localIdentName,
        localName,
        options
      )
    },
  },
  sassLoaderOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
})

// next.js getLocalIdent source code
const regexLikeIndexModule = /(?<!pages[\\/])index\.module\.(scss|sass|css)$/

function getCssModuleLocalIdent(context, _, exportName, options) {
  const relativePath = path
    .relative(context.rootContext, context.resourcePath)
    .replace(/\\+/g, '/')

  const fileNameOrFolder = regexLikeIndexModule.test(relativePath)
    ? '[folder]'
    : '[name]'

  const hash = loaderUtils.getHashDigest(
    Buffer.from(`filePath:${relativePath}#className:${exportName}`),
    'md5',
    'base64',
    5
  )

  return loaderUtils
    .interpolateName(
      context,
      fileNameOrFolder + '_' + exportName + '__' + hash,
      options
    )
    .replace(/\.module_/, '_')
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(\d|--|-\d)/, '__$1')
}
