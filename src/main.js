// import { createApp } from 'vue'

import { createRenderer } from 'vue'
import App from './App.vue'
import { Application, Graphics } from 'pixi.js'
// 渲染流程：template => render => vnode(element,tree) => mountElement => element =>append(#app)

// init game
const game = new Application({
  width: 500,
  height: 500,
})
document.body.appendChild(game.view);

const renderer = createRenderer({
  createElement(type) {
    let element
    if (type === 'rect') {
      element = new Graphics()
      element.beginFill(0xff0000)
      element.drawRect(0, 0, 50, 50)
      element.endFill()
    } else if (type === 'circle') {
      element = new Graphics()
      element.beginFill(0xffff00)
      element.drawCircle(0, 0, 50)
      element.endFill()
    }
    return element
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  setElementText(node, text) {
    node.append(document.createTextNode(text))

  },
  // vue3再设置attribute用到渲染接口
  patchProp(el, key, prevValue, nextValue) {
    // if (key === 'x') el.x = nextValue
    // if (key === 'y') el.y = nextValue
    el[key] = nextValue
  }

})
renderer.createApp(App).mount(game.stage)
