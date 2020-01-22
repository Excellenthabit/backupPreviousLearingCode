const fs = require('fs');

function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,dataStr) => {
            if (err) return reject(err);
            resolve(dataStr);
        })
    })
}

// 通过.then指定回调函数的时候，成功的回调函数必须传，失败的回调可以省略不传


// 在上一个 .then()中，返回一个新的promise实例，可以继续使用下一个.then()来处理
// 如果前面的Promise执行失败，如果不想让后续的Promise操作被终止，可以为每个Promise指定失败的回调

// 读取文件1
// getFileByPath('./file/1.txt')
//  .then(function(data){
//      console.log(data)

//     //  读取文件2
//      return getFileByPath('./file/2.txt')
//  })
//  .then(function(data){
//      console.log(data)

//     //  读取文件3
//      return getFileByPath('./file/3.txt')
//  })
//  .then(function(data){
//     console.log(data)
//  })

//  console.log("OJBK") // 甭管前面的是否出错,都先打印这一行,因为这一行是非异步操作


// 哪怕前面的Promise执行失败了，但是不要影响后续promise的正常执行
// 可以单独为每个promise通过.then指定一下失败的回调
// 有时候,我们有这样的需求,和上面的需求刚好相反:如果后续的Promise执行,依赖于前面Promise执行的结果
// 如果前面的失败了,则后面的就没有继续执行下去的意义了,此时,我们想要实现,一旦有报错,则立即终止所有Promise的执行

getFileByPath('./file/1.txt')
    .then(function(data){
        console.log(data)

        // 读取文件2
        return getFileByPath('./file/2.txt')
    })
    .then(function(data){
        console.log(data)

        // 读取文件3
        return getFileByPath('./file/3.txt')
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        // catch的作用:如果前面有任何的Promise执行失败,则立即终止所有promise的执行,
        // 并且立即进入catch去处理Promise中抛出的异常
        console.log('这是catch处理抛出问题的方式'+err.message)
    })

