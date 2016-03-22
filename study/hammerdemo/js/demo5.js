/** SingleTap<单点>和DoubleTap<双点击>(配合recognizeWith/requireFailure) */

var myElement = document.getElementById('myElement');

// 我们创建了一个manager对象, 像Hammer()一样, 但没有预置识别器。 
var mc = new Hammer.Manager(myElement);


// tap<点> 2次以上会被识别器识别
mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
// tap<点> 1次被识别
mc.add( new Hammer.Tap({ event: 'singletap' }) );


// 在 tap<点> 被识别到后，我们希望 doubletap 也被同时被检测并识别到
mc.get('doubletap').recognizeWith('singletap');
// 我们只希望触发单击事件，当我们没有检测到双击时（和demo4对比，设置这个后双击时不会打印singletap）
mc.get('singletap').requireFailure('doubletap');


mc.on("singletap doubletap", function(ev) {
    myElement.textContent += ev.type +" ";
});