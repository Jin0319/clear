/*
*
*  引入模块
*
* */
//exports导出     引入的方式
// var module = require('./02.js');

// console.log(module.sum(12,12));



//module导出     引入的方式  区别在于  module就等于了导出数据的本身，而不是一个固定的对象
var module = require('./02.js');

console.log(typeof module);