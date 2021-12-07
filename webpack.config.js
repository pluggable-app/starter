const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (webpackConfigEnv, argv) => {
    return {
        mode: 'none',
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.scss']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|gif|jpg|jpeg)$/,
                    use: ['file-loader']
                }
            ]
        },
        devServer: {
            port: 9000,
            historyApiFallback: true
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(webpackConfigEnv.NODE_ENV)
            }),
            new HtmlWebpackPlugin({
                template: './src/index.ejs'
            }),
            new ModuleFederationPlugin({
                name: 'App',
                filename: 'remoteEntry.js',
                remotes: {
                    // Add your remote applications here
                },
                exposes: {
                    './App': './src/App'
                }
            })
        ]
    }
}
