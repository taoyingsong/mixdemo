/** 垂直方向的pan<平移>识别器 */

var myElement = document.getElementById('myElement');

// 创建一个简单的实例
// 默认情况下，它只是增加了横向识别
var mc = new Hammer(myElement);

// 让pan<平移>手势支持所有方向
// 支持所有方向后，在触屏设备中，竖直方向，在这个元素中会阻止滚轮事件（元素外还可以滚动）<this will block the vertical scrolling on a touch-device while on the element>
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// 监听事件...
mc.on("panleft panright panup pandown tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});