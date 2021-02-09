// craco.config.js
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const path = require(`path`);
const alias = require(`./aliases`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: resolvedAliases,
    plugins: [
      new CompressionWebpackPlugin(),
      new BrotliPlugin({
        asset: "[path].br[query]",
        test: /\.(js|css|html|svg|map)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
}