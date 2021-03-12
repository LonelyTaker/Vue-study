//在webpack中，每个js文件都是独立模块
//每个模块，都有独立的作用域
//其他模块，默认无法直接访问当前模块中定义的成员
let a = 10
let b = 20

//默认导出
//一个模块中，只允许默认导出一次
export default{
    a,
    b,
    say(){
        console.log('ok')
    },
}

//在一个模块中，可以同时使用按需导出和默认导出
//在一个模块中，可以按需导出多次
export let test1='111'
export let test2='222'