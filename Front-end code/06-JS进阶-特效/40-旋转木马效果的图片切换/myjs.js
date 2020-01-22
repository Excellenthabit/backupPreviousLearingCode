window.onload = function () {
    //需求：点击足有按钮实现旋转木马。
    //原理：点击右侧按钮，让3号盒子的样式赋值给2号盒子，然后2->1,1->5,5->4,4->3。。。
    //左侧同理。
    //步骤：
    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    //2.让页面加载出所有的盒子的样式。
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    //4.书写函数。
    // (操作数组。正向旋转：删除数组中第一个样式，添加到数组中的最后一位)
    // (操作数组。反向旋转：删除数组中最后一个样式，添加到数组中的第一位)

    //样式数组
    var arr = [
        {   //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 20,
            zIndex: 2
        },
        {  // 2
            width: 600,
            top: 120,
            left: 0,
            opacity: 80,
            zIndex: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            zIndex: 4
        },
        {  // 4
            width: 600,
            top: 120,
            left: 600,
            opacity: 80,
            zIndex: 3
        },
        {   //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 20,
            zIndex: 2
        }
    ];

    //获取元素
    var slide = document.getElementById("slide");
    var liArr = document.getElementsByTagName("li");
    var arrow = document.getElementById("arrow");
    var swcBtn = arrow.children;  //左右切换图片按钮 switchButton缩写
    //设置一个开闭原则，点击后修改这个值
    var flag = true;
    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    slide.onmouseenter = function () {
        animate(arrow, {"opacity": 100});
    }
    slide.onmouseleave = function () {
        animate(arrow, {"opacity": 0});
    }

    // //2.让页面加载出所有的盒子的样式。
    // for (var i=0; i<liArr.length;i++) {
    //     // //利用animate（）框架让指定的属性，缓慢运动到指定的位置
    //     animate(liArr[i], {
    //         "width": arr[i].width,
    //         "top": arr[i].top,
    //         "left": arr[i].left,
    //         "opacity": arr[i].opacity,
    //         "zIndex": arr[i].zIndex
    //     });
    //     // //另一种写法
    //     // liArr[i].style.width = arr[i].width + "px";
    //     // liArr[i].style.top = arr[i].top + "px";
    //     // liArr[i].style.left = arr[i].left + "px";
    //     // liArr[i].style.opacity = arr[i].opacity/100;
    //     // liArr[i].style.zIndex = arr[i].zIndex;
    // }

    move();
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    //这里用到了函数截流，目的是让点击完一次按钮，等他到达指定位置再进行点击才有用，否则再怎么点都不起作用
    // swcBtn[0].onclick = function () {
    //     //     if (flag) {
    //     //         flag = false;
    //     //         move(true);
    //     //     }
    //     //
    //     // }
    //     // swcBtn[1].onclick = function () {
    //     //     if (flag){
    //     //         flag = false;
    //     //         move(false);
    //     //     }
    //     // }
    //另一种写法 for...in...绑定事件，绑定后利用元素的className属性知道是前一个还是后一个，然后调用函数
    for(var k in swcBtn){
        swcBtn[k].onclick = function () {
            //if()括号里面只能用this.className,如果用k.className,会导致无论点哪个按钮，都只往一个方向旋转
            if (this.className === "prev"){
                if (flag){
                    //函数截流
                    //点击一次立刻修改为false，这样别人就不能在点击。（点击也不执行move()）
                    flag = false;
                    move(true);
                }
            } else {
                if (flag){
                    flag = false;
                    move(false);
                }
            }
        }
    }

    //4.书写函数。
    function move(bool) {
        if (bool !== undefined){
            //也可以写成 bool === true || bool ===false
            // (操作数组。正向旋转：删除数组中第一个样式，添加到数组中的最后一位)
            //arr.push();//在最后添加
            //arr.pop();//删除最后一位
            //arr.unshift();//在最前面添加
            //arr.shift();//删除第一位
            if (bool) {
                arr.unshift(arr.pop());
            } else {
                // (操作数组。反向旋转：删除数组中最后一个样式，添加到数组中的第一位)
                arr.push(arr.shift());
            }
        }
        //再次为页面上的所有li赋值属性，利用缓动框架
        for (var i=0; i<liArr.length;i++) {
            //利用animate（）框架让指定的属性，缓慢运动到指定的位置
            animate(liArr[i],arr[i],function () {
                flag = true;
            });
        }
    }
}