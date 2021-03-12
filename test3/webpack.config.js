//这是webpack的配置文件
//注意：webpack这个工具，就是基于Node开发出来的
// 只要运行了npm run dev，就会立刻运行webpack这个命令，
// webpack这个工具，就会在项目根目录中，查找webpack.config.js这个配置文件，
// 然后读取配置文件中的配置对象，并根据配置对象进行相关的打包操作
const path=require('path')


//导入 复制index.html页面的插件
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  //指定要复制的模板
    filename: 'index.html'  //指定生成的文件名称，被复制出来的文件是虚拟的
})


//使用CommonJS规范，向外暴露一个配置对象
//webpack 4.x 默认约定：把src/index.js，打包输出到dist/main.js
module.exports={
    //两个可选值 development(开发阶段) 和production(产品上线阶段)
    //development模式不会压缩打包后的文件,提高打包效率
    mode: 'development',

    //指定要打包的文件
    entry: path.join(__dirname,'./src/index.js'),
    //指定输出文件相关的配置
    output:{
        path:path.join(__dirname,'./dist'), //把打包好的文件输出到哪个目录中
        filename:'main.js'  //指定输出文件的名称
    },

    //webpack要挂载的插件数组
    plugins:[htmlPlugin],

    //所有非js文件的第三方模块，都需要在这里进行配置，才可以正常打包
    module:{
        rules:[
            //所有第三方文件模块的匹配规则
            //注意：loader的调用顺序，是从后往前调用
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.jpg|png$/,use:['url-loader']},
            {test:/\.eot|woff|woff2|ttf|svg$/,use:['url-loader']},

            //注意：在配置babel-loader的时候，一定要添加exclude排除项，把node_modules目录排除
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
        ]
    },
}

//注意：webpack-dev-server会把打包好的文件，输出到项目的根目录中存放，并且文件是隐藏的
//注意：html-webpack-plugin插件，除了有复制文件的能力，还会自动把打包好的文件，注入到复制出来的页面底部
