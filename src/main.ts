import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './routers';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
