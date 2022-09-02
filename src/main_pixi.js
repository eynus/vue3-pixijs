// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')
import * as PIXI from 'pixi.js'
import logo from './assets/logo_blue.png';

const app = new PIXI.Application({
  width: 800, height: 600, resolution: window.devicePixelRatio || 1,
});
// 创建一个矩形
const rect = new PIXI.Graphics()
rect.beginFill(0xff0000)
rect.drawRect(0, 0, 50, 50)
rect.endFill()
// canvas根容器：game.stage
// 添加点击事件
rect.interactive = true//允许添加点击事件
rect.on('pointertap', () => {
  console.log(111);
  // 点击红色块取消动画
  app.ticker.remove(handleTicker)
})

app.stage.addChild(rect)


// 创建一个容器 container
const box1 = new PIXI.Container()
console.log({ box1 });
// 创建一个图片
const img = new PIXI.Sprite()
//img->url
img.texture = PIXI.Texture.from(logo)
// 创建一个文本
const skewStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  dropShadow: true,
  dropShadowAlpha: 0.8,
  dropShadowAngle: 2.1,
  dropShadowBlur: 4,
  dropShadowColor: '0x111111',
  dropShadowDistance: 10,
  fill: ['#ffffff'],
  stroke: '#004620',
  fontSize: 60,
  fontWeight: 'lighter',
  lineJoin: 'round',
  strokeThickness: 12,
});
const text = new PIXI.Text('hello,pixi.js!', skewStyle)
app.stage.addChild(box1)
box1.addChild(text)
box1.addChild(img)

// container的好处是可以设置坐标，里面元素一起换位置
box1.x = 100
box1.y = 100

// 定时器的回调
function handleTicker() {
  box1.x++
}
// 动画 ticker
app.ticker.add(handleTicker)

document.body.appendChild(app.view);
