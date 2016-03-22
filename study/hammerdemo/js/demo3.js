/** 同时识别（用RecognizeWith实现）pinch<捏放> 和 rotate<旋转> */

var myElement = document.getElementById('myElement');

var mc = new Hammer.Manager(myElement);

// 创建一个pinch<捏放> 和 rotate<旋转>识别器
// 这需要两个触点
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();

// 我们想两个同时监测
pinch.recognizeWith(rotate);

// 添加到Manager中
mc.add([pinch, rotate]);


mc.on("pinch rotate", function(ev) {
    myElement.textContent += ev.type +" ";
});