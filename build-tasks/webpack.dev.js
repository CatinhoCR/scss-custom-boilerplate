const { merge } = require('webpack-merge')

const common = require('./webpack.common')

const environment = require('./env.config')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'eval-source-map',
  // devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    static: {
      directory: environment.paths.build,
      publicPath: '/',
      watch: true,
    },
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    watchFiles: [
      `${environment.paths.src}/**/*.html`,
      `${environment.paths.src}/**/*.scss`,
      `${environment.paths.src}/**/*.js`
    ],
    ...environment.server
  },

  // File watcher options
  watchOptions: {
    aggregateTimeout: 300,
    poll: 300,
    ignored: /node_modules/,
  },

  /*
  // Define modules rules
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  */

  // Plugins Configs
  plugins: [],
})
