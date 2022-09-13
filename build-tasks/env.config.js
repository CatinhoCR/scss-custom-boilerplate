const path = require('path');

module.exports = {
  title: 'Catinho Webpack5 Boilerplate',
  paths: {
    config: path.resolve(__dirname, './'),
    // Source files
    src: path.resolve(__dirname, '../src'),
    // Production build files
    build: path.resolve(__dirname, '../public'),
    // Static files that get copied to build folder
    public: path.resolve(__dirname, '../public'),
  },
  server: {
    host: 'localhost',
    port: 8000,
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    images: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
};