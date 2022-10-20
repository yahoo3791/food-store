import { createApp } from 'vue';
import {
  defineRule, configure,
} from 'vee-validate';
import {
  required, email, min,
} from '@vee-validate/rules';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { setLocale, localize } from '@vee-validate/i18n';
import App from './App.vue';
import router from './router';

configure({
  generateMessage: localize({
    zh_TW: zhTW,
    validateOnInput: true,
  }),
});
setLocale('zh_TW');
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('confirmed', (value, [target]) => {
  if (value === target) {
    return true;
  }
  return 'Passwords must match';
});
const app = createApp(App);
app.use(router);
app.mount('#app');
