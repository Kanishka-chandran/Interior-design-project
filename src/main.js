// import { createApp } from 'vue';
// import App from './App.vue';
// import store from './store';

// createApp(App).use(store).mount('#app');




// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')