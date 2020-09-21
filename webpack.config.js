const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = "development"; //important for babel to know we're in dev mode
process.env.BABEL_ENV = "development";

module.exports = {
    mode: 'development',
    target: 'node', //could use node instead of browser
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname,'./src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        inline:true,
        contentBase: './public',
        compress:true,
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: "body"
        })
    ],
    module: {
        rules: [
            {
                test:/\.html/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.(jsx|js|mjs)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jsx|js|mjs)$/,
                exclude: /node_modules/,
                use: "eslint-loader"
            },
            {
                test: /(\.css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/(\.scss)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use:["file-loader"]
            }
        ]
    }
}