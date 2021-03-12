const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: 'index.html'
})

const VuePlugin = require('vue-loader/lib/plugin')
const vuePlugin = new VuePlugin()

module.exports = {
    mode: 'development',
    plugins: [htmlPlugin,vuePlugin],

    module: {
        rules: [
            {test: /\.css$/,use: ['style-loader', 'css-loader']},
            {test: /\.less$/,use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.jpg|png$/,use: ['url-loader']},
            {test: /\.eot|woff|woff2|ttf|svg$/,use: ['url-loader']},
            {test: /\.js$/,use: ['babel-loader'],exclude: /node_modules/},
            {test: /\.vue$/,use: ['vue-loader']},
        ]
    },
}