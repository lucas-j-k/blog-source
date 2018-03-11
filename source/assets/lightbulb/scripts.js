var timeline = anime.timeline();
var restartButton = document.getElementById('restart');
var shellFill = document.getElementById('shell_fill');



timeline
.add({
  targets: '.socket',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing:'linear',
  duration:1000
}).add({
  targets:'#shell',
  strokeDashoffset:[anime.setDashoffset, 0],
  easing:'easeInOutQuad',
  duration:750,
  offset:1000
})
.add({
  targets:'#filament',
  strokeDashoffset:[anime.setDashoffset, 0],
  opacity:[0,1],
  duration:500,
  offset:1000,
  easing:'easeInOutQuad'
})
.add({
  targets:'#filament',
  stroke:'#00001a',
  duration:70,
  easing:'linear'
})
.add({
  targets:'#shell_fill',
  opacity:[
    {value:1.0, duration:20},
    {value:0, duration:10},
    {value:1.0, duration:10}
  ],
  easing:'easeOutQuad'
})


restartButton.onclick = function(){
  timeline.restart();
}
