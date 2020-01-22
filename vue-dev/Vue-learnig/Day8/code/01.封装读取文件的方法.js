// 需求：封装一个方法，给一个要读取文件的路径。这个方法能读取文件并且把内容返回
const fs = require('fs')
const path = require("path")

//普通读取文件的方式
// fs.readFile(path.join(__dirname,"./file/1.txt"),'utf-8',(err,dataStr) => {
//     if(err) throw err
//     console.log(dataStr)
// })

// 初衷：给文件路径，返回读取到的内容
// 规定callback中有两个参数，第一个参数是失败的结果，第二个参数是成功的结果
// 同时规定：如果成功后返回的结果应该位于callback参数的第二个位置，此时，第一个位置由于没有出错
// 放一个null；如果失败了，则第一个位置放error对象，第二个位置放一个undefined
function getFileByPath(fpath,callback){
    // 如果报错了，进入iffenzhi后，if后买你的代码就没有必要执行了
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return callback(err);
        // console.log(dataStr)
        // return dataStr
        callback(null,dataStr);
    })
}

// var result = getFileByPath(path.join(__dirname,'./file/1.txt'))
// console.log(result)

getFileByPath(path.join(__dirname,'./file/12.txt'),(err,dataStr) => {
    // console.log(dataStr + " hello Nicholas")
    if(err) return console.log(err.message); // 出错就打印错误信息
    console.log(dataStr); // 没出错就执行这一行
})

