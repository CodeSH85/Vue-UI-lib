import { createApp } from "vue";
import App from './App.vue';
import * as components from '../src/index.ts';

import '../src/styles/main.scss';

const app = createApp(App);


for (const key in components) {
  // @ts-expect-error: expect valid components
  app.component(key, components[key])
}

app.mount('#app');
