const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                //   options: {
                //       presets: ['env', 'react']
                //   }
                },
              },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}