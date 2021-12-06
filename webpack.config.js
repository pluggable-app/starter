const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json','.scss']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ]
        }]
    },
    devServer: {
        port: 9000,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}