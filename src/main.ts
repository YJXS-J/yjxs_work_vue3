import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 引入全局组件
import ModuleSlot from './components/ModuleSlot.vue';
// 注册全局组件
app.component('ModuleSlot', ModuleSlot);

app.mount('#app');
