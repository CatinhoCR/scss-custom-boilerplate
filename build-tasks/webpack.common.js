const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Sass = require('sass')

const webpack = require('webpack')

const environment = require('./env.config')

// Maybe delete or tweak
const templateFiles = fs.readdirSync(environment.paths.src)
  .filter((file) => path.extname(file).toLowerCase() === '.html');

const htmlPluginEntries = templateFiles.map((template) => new HtmlWebpackPlugin({
  inject: true,
  hash: false,
  // title: environment.title,
  filename: template,
  template: path.resolve(environment.paths.src, template),
  favicon: path.resolve(environment.paths.src, 'images', 'favicon.png'),
}));

/**
 * This is the base config for webpack which is used
 * by both webpack.dev.js and webpack.prod.js
 *
 * It defines the directories of our entry file and
 * output (built) files as well as loaders for js,
 * css, fonts, images and Modernizr.
 */
 const env = process.env.NODE_ENV
 const isDevelopment = env === 'development'

if (isDevelopment) {
// only enable hot in development
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    app: path.resolve(environment.paths.src, 'index.js'),
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: environment.paths.build,
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // {
      //   test: /\.((c|sa|sc)ss)$/i,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          // Enable hot module replacement for CSS when in development mode
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          // isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,

          // The css-loader interprets @import and url() like
          // import/require() and will resolve them
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: isDevelopment,
            },
          },

          // Add postcss-loader for autoprexing for older browsers
          // see package.json for browserslist settings
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                config: path.resolve(environment.paths.config, 'postcss.config.js')
              },
            },
          },

          // The sass-loader compoiles scss to css
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: Sass,
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.(png|gif|jpe?g|svg)$/i,
      //   type: 'asset',
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: environment.limits.images,
      //     },
      //   },
      //   generator: {
      //     filename: 'images/design/[name].[hash:6][ext]',
      //   },
      // },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: environment.limits.images,
          },
        },
        generator: {
          filename: 'images/design/[name].[hash:6][ext]',
        },
      },
    ],
  },

  // optimization: {
  //   minimizer: [
  //     '...',
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           // Lossless optimization with custom option
  //           // Feel free to experiment with options for better result for you
  //           plugins: [
  //             ['gifsicle', { interlaced: true }],
  //             ['jpegtran', { progressive: true }],
  //             ['optipng', { optimizationLevel: 5 }],
  //             // Svgo configuration here https://github.com/svg/svgo#configuration
  //             [
  //               'svgo',
  //               {
  //                 plugins: [
  //                   {
  //                     name: 'removeViewBox',
  //                     active: false,
  //                   },
  //                 ],
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     }),
  //   ],
  // },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(environment.paths.src, 'images', 'content'),
          to: path.resolve(environment.paths.build, 'images', 'content'),
          toType: 'dir',
          globOptions: {
            ignore: ['*.DS_Store', 'Thumbs.db'],
          },
        },
      ],
    }),
  ].concat(htmlPluginEntries),

  resolve: {
    modules: [environment.paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': environment.paths.src,
      assets: environment.paths.public,
    },
  },
}
