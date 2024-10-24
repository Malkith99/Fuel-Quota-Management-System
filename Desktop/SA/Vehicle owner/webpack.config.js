const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
          },

        },
        
      },
      {
        test: /\.css$/,  // Adding rule for CSS files
        use: ['style-loader', 'css-loader'],  // First inject CSS with style-loader, then resolve CSS with css-loader
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,  // Adding rule for image files
        type: 'asset/resource',  // This handles images and other assets
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
};
