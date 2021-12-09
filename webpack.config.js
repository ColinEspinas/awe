const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = (_, options) => ({
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            declaration: options.mode === 'production',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|wav)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: true,
    })],
    usedExports: true,
  },
  stats: {
    warnings: false,
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin(),
    new WebpackBar({ name: 'Building', profile: true }),
  ],
  target: ['web', 'es2018'],
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: 'module',
    },
    module: true,
  },
});
