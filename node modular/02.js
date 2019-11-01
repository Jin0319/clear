/*
* 模块化开始
*
* 传统非模块化开发有如下的缺点：
* 1、命名冲突
* 2、文件依赖
*
* 前段标准的模块化规范：
* 1、 AMD-requireJS
* 2、 CMD-seaJS
*
* 服务器端模块化规范：
*
* 1、 CommonJS - Node.js 同步过程
*
* 模块化相关的规则：
* 1、如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立的
* 2、模块成员的导出和引入
*
* */
var sum = function (a,b) {
    return parseInt(a) + parseInt(b);
}
//导出模块成员
// exports.sum = sum;


// 导出模块成员另一种方式
module.exports = sum;