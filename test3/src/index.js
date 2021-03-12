//导入jQuery
//ES6模块语法,导入jquery并使用$接收
import $ from 'jquery'

//在webpack中，一切皆模块
//图片、js、css、字体文件、模板文件
//You may need an approriate loader to handle this file type.
//报错原因：webpack默认只能打包处理js文件，webpack默认处理不了非js后缀名的文件
import './css/1.css'
import './css/1.less'

//默认情况下，如果导入的模块是路径，webpack会优先去node_modules目录下，查找给定的路径是否存在
import 'bootstrap/dist/css/bootstrap.min.css'

$(function(){
    $('li:odd').css('backgroundColor','pink');
    $('li:even').css('backgroundColor','lightblue');
})


//webpack默认只能打包处理一部分高级的js语法，如果某些js语法太过于高级，webpack无法处理
//需要使用babel这个插件来打包处理
class Person{
    //定义静态属性的高级语法，webpack无法处理
    static userinfo = { name: 'zs' ,address:'北京'}
}


//默认导入
//默认导入的成员，可以使用任何合法的名称来进行接收
//按需导入的时候，可以使用as关键字，为按需导入的成员起别名
import m1,{test1 as mytest1,test2} from './js/01.ES6导入导出语法.js'
console.log(m1)
console.log(mytest1)
console.log(test2)


// import m3 from './js/02.直接导入不接收.js'
// console.log(m3)
//可以直接使用import导入某个模块并执行其中的代码，但是不接收任何成员
import './js/02.直接导入不接收.js'
