
//绑定到原形上，调用者是jQuery对象
$.fn.setColorRed = function f() {
    this.css({"color":"red"});
}


//绑定到$上，调用者是$
$.setColorRed = function(e) {
    e.css({"color":"red"});
}