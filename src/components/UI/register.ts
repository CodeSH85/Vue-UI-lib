import { App, resolveComponent } from 'vue';
import Button from './Button/Button'
import Icon from './Icon/Icon'
import Alert from './Alert/AlertComp';

export default function registerGlobalComponents(app: App<Element>) {
  app
    .component('ButtonComp', Button)
    .component('IconComp', Icon)
    .component('AlertComp', Alert)
}
