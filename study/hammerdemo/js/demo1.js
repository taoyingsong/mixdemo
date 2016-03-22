/** 基础实例 */

var myElement = document.getElementById('myElement');

// 创建一个简单的实例
// 默认情况下，它只是增加了横向识别
var mc = new Hammer(myElement);

// 监听事件...
mc.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});