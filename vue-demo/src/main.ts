import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app2:any = createApp(App)
// 如果不在qiankun环境下
if(!qiankunWindow._POWERED_BY_QIANKUN__) {
  console.log('vue子应用不在qiankun环境下');
  app2.use(router).mount('#app')
}else {
  renderWithQiankun({
    mount(props: any) {
      console.log('vue子应用在qiankun环境挂载');
      app2.use(router).mount(props.container.querySelector('#app'))
    },
    bootstrap() {
      console.log('vue app bootstrap');
    },
    update(){
      console.log('vue app update');
    },
    unmount() {
      console.log('vue app unmount');
      app2?.unmount()
    }
  })
}

