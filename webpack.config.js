const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: "./dist",
        hot: true,
        open: true,

        port: 9000,
        historyApiFallback: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },

                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        })]

};