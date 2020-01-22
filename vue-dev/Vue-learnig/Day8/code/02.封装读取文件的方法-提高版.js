// 需求：封装一个方法，给一个要读取文件的路径。这个方法能读取文件并且把内容返回


const fs = require("fs");
const path = require("path");

function getFileByPath(fpath,succCb,errCb){
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return errCb(err);
        succCb(dataStr)
    })
}

// 需求：先读取文件1，再读取文件2，最后读取文件3
// 回调地狱：函数作为参数层层嵌套
// 使用ES6中的Promise来解决回调地狱的问题
// Promise的本质只是单纯地解决回调地狱的问题，但并不能减小代码量

getFileByPath(path.join(__dirname,'./file/1.txt'),function(data){
    console.log(data)

    getFileByPath(path.join(__dirname,'./file/2.txt'),function(data){
        console.log(data)

        getFileByPath(path.join(__dirname,'./file/3.txt'),function(data){
            console.log(data)
        })
    })
})