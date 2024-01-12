import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root:any
function render(props:any) {
  const {container} = props
  const dom = container ? container.querySelector('#root') : document.getElementById('root')!
  root = ReactDOM.createRoot(dom)

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
// 如果不在qiankun环境下
if(!qiankunWindow._POWERED_BY_QIANKUN__) {
  render({})
}else {
  renderWithQiankun({
    mount(props: any) {
      render(props)
    },
    bootstrap() {

    },
    update(){},
    unmount() {
    }
  })
}