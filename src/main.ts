import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
import mUI from './components/index'
// import mUI from '../lib/cai-elememt-components.es.js'
// import '../lib/style.css'
import './mock'

const app = createApp(App)

// 全局注册图标为了方便生产中不要这样用

for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
  // console.log(`el-icon-${toLine(i)}`)
}

app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
