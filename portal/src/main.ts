import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { registerMicroApps, start } from 'qiankun';


const apps = [
  {
    name: 'react-demo',
    entry: '//localhost:3001',
    container: '#sub-app',
    activeRule: '/react-demo',
  },
  {
    name: 'vue-demo',
    entry: '//localhost:3002',
    container: '#sub-app',
    activeRule: '/vue-demo',
  },
  {
    name: 'umijs-demo',
    entry: '//localhost:8000',
    container: '#sub-app',
    activeRule: '/umijs-demo',
  },
]
registerMicroApps(apps, {
  beforeLoad: [async app => console.log('before load', app.name)],
  beforeMount: [async app => console.log('before mount', app.name)],
  afterMount: [async app => {
    console.log('after mount', app.name)
  }]
});
// 启动 qiankun
start();





createApp(App).use(router).mount('#app')
