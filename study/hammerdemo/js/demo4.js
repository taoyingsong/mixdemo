/** 用RecognizeWith操作Quadrupletap（自定义的，表示4个tap）识别器 */

var myElement = document.getElementById('myElement');

// 我们创建了一个manager对象, 像Hammer()一样, 但没有预置识别器。 
var mc = new Hammer.Manager(myElement);

// 默认情况,  tap<点> 识别器
mc.add( new Hammer.Tap() );

// 至少需要点击4次的 tap<点> 识别器
mc.add( new Hammer.Tap({ event: 'quadrupletap', taps: 4 }) );

// 在 tap<点> 被识别到后，我们希望 quadrupletap 也被同时被检测并识别到
// tap<点> 事件会在每次点击时被触发（其实这里的打印效果是"tap tap tap tap quadrupletap" 就是第4次tap后quadrupletap）
mc.get('quadrupletap').recognizeWith('tap');


mc.on("tap quadrupletap", function(ev) {
    myElement.textContent += ev.type +" ";
});