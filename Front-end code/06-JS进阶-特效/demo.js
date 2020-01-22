
//缓动动画复杂版封装，可以同时获取多个属性（加了透明度opacity以及层级zIndex）
/**
 *
 * @param elm
 * @param json
 * @param fn
 */
function animate(elm,json,fn) {
    //先清定时器
    clearInterval(elm.timer);
    elm.timer = setInterval(function () {
        //开闭原则（用来处理清除定时器的bug）
        var flag = true;
        //遍历属性和值，分别单独处理json
        //attr == k(键)    target == json[k](值)
        for (var k in json) {
            var leader;
            //判断属性，特殊情况特殊处理(处理透明度opacity属性)
            if ( k === "opacity"){
                leader = getStyle(elm,k)*100 || 1;  //这里乘以100，以后调用时都要写成百分制
                                                    //例如opacity = 0.1,写成10
            } else{
                leader = parseInt(getStyle(elm,k)) || 0;
            }
            //获取步长
            var step = (json[k] - leader)/10;
            //二次加工步长
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            //赋值
            //特殊情况特殊赋值
            //如果是层级，一次赋值成功，不需要缓动赋值
            if (k === "opacity") {
                // opacity: 0.5;  内容一起透明.(火狐谷歌IE9+)
                //取值范围：  0-1
                //filter: alpha(opacity=50);     IE678(不研究)
                //取值范围：  0-100
                elm.style[k] = leader/100;
                //兼容ie6、7、8
                elm.style.filter = "alpha(opacity="+leader+")";
            }else if (k === "zIndex") {
                elm.style.zIndex = json[k];  //调用时写zIndex，避免前后不一致出错
            } else{
                elm.style[k] = leader + "px";
            }
            //判断: 目标值和当前值的差大于步长，就不能跳出循环
            //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
            if (json[k]!==leader){
                flag = false;
            }
        }
        console.log(1); //用来检测定时器是否被清除
        //只有所有的属性都到了指定位置，flag的值才会变为true，才能清除定时器
        //清除定时器
        if (flag) {
            clearInterval(elm.timer);
            //所有程序执行完了，现在可以执行回调函数了
            //只有传递了回调函数，才能执行
            if (fn){
                fn();
            }
        }
    },15)
}

// 未加入opacity、zIndex时的缓动框架
// function animate(elm,json,fn) {
//     //先清定时器
//     clearInterval(elm.timer);
//     elm.timer = setInterval(function () {
//         //开闭原则（用来处理清除定时器的bug）
//         var flag = true;
//         for (var k in json) {
//             var leader = parseInt(getStyle(elm,k)) || 0;
//             //获取步长
//             var step = (json[k] - leader)/10;
//             //二次加工步长
//             step = step>0?Math.ceil(step):Math.floor(step);
//             leader += step;
//             //赋值
//             elm.style[k] = leader + "px";
//             //判断: 目标值和当前值的差大于步长，就不能跳出循环
//             //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
//             if (json[k]!==leader){
//                 flag = false;
//             }
//         }
//         console.log(1); //用来检测定时器是否被清除
//         //只有所有的属性都到了指定位置，flag的值才会变为true，才能清除定时器
//         //清除定时器
//         if (flag) {
//             clearInterval(elm.timer);
//             //所有程序执行完了，现在可以执行回调函数了
//             //只有传递了回调函数，才能执行
//             if (fn){
//                 fn();
//             }
//         }
//     },5)
// }


//兼容方法获取内嵌式和外链式样式的属性
/**
 *
 * @param elm
 * @param attr   (attribute属性的缩写)
 * @returns {*}
 */
function getStyle(elm,attr) {
    if (window.getComputedStyle){
        return window.getComputedStyle(elm,null)[attr];
    }
    return elm.currentStyle[attr];
}



//获取浏览器可视区域的宽高
/**
 *
 * @returns {{width: number, height: number}}
 */
function client() {
    if (window.innerHeight !== undefined){
        return{
            "width":window.innerWidth,
            "height":window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return{
            "width":document.documentElement.clientWidth,
            "height":document.documentElement.clientHeight
        }
    }else{
        return{
            "width":document.body.clientWidth,
            "height":document.body.clientHeight
        }
    }
}


//通过show（）让元素显示
/**
 *
 * @param elm
 */
function show(elm) {
    elm.style.display = "block";
}



//通过hide（）让元素显示
/**
 *
 * @param elm
 */
function hide(elm) {
    elm.style.display = "none";
}


//匀速动画函数封装（水平方向）
/**
 *
 * @param elm
 * @param target
 */
function animateX1(elm,target) {
    clearInterval(elm.timer);
    elm.timer = setInterval(function () {
        var step = target>elm.offsetLeft?10:-10;
        elm.style.left = elm.offsetLeft + step + "px";
        // //检测动画有没有停止
        // console.log(1);
        if (Math.abs(target-elm.offsetLeft)<Math.abs(step)){
            elm.style.left = target + "px";
            clearInterval(elm.timer);
        }
    },20)
}

//匀速动画函数封装（竖直平方向）
/**
 *
 * @param elm
 * @param target
 */
function animateY1(elm,target) {
    clearInterval(elm.timer);
    elm.timer = setInterval(function () {
        var step = target>elm.offsetTop?10:-10;
        elm.style.top = elm.offsetTop + step + "px";
        // //检测动画有没有停止
        // console.log(1);
        if (Math.abs(target-elm.offsetTop)<Math.abs(step)){
            elm.style.top = target + "px";
            clearInterval(elm.timer);
        }
    },20)
}

//缓动动画函数封装（水平方向）
/**
 *
 * @param elm
 * @param target
 */
function animateX2(elm,target) {
    clearInterval(elm.timer);
    elm.timer = setInterval(function () {
        var step = (target - elm.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        elm.style.left = elm.offsetLeft + step + "px";
        // //检测缓动动画有没有停止
        // console.log(1);
        if (Math.abs(target - elm.offsetLeft)<=Math.abs(step)){
            //处理小数赋值
            elm.style.left = target + "px";
            clearInterval(elm.timer);
        }
    },20)
}


//缓动动画函数封装（竖直方向）
/**
 *
 * @param elm
 * @param target
 */
function animateY2(elm,target) {
    clearInterval(elm.timer);
    elm.timer = setInterval(function () {
        var step = (target - elm.offsetTop)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        elm.style.top = elm.offsetTop + step + "px";
        // //检测缓动动画有没有停止
        // console.log(1);
        if (Math.abs(target - elm.offsetTop)<=Math.abs(step)){
            //处理小数赋值
            elm.style.top = target + "px";
            clearInterval(elm.timer);
        }
    },20)
}




// //练习使用此种封装方法（复杂，了解原理使用）
// function scroll1() {
//     if (window.pageYOffset !== undefined){
//         return{
//             "top":window.pageYOffset,
//             "left":window.pageXOffset
//         }
//     }else if (document.compatMode === "CSS1Compat"){
//         return{
//             "top":document.documentElement.scrollTop,
//             "left":document.documentElement.scrollLeft
//         }
//     } else{
//         return{
//             "top":document.body.scrollTop,
//             "left":document.body.scrollLeft
//         }
//     }
// }



//简单封装方法（实际工作中使用） 通过scroll（）返回元素距离页面的top和left值
/**
 *
 * @returns {{top: number, left: number}}
 */
function scroll() {
    return {
        "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
        "left":  window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
    }
}
