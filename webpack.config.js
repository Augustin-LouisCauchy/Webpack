const path = require('path') 

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}