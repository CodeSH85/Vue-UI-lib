import { App } from 'vue'
import Button from './Button/Button'
import Icon from './Icon/Icon'
import Alert from './Alert/AlertComp'
import TextInput from './TextInput/TextInput'
import Menu from './Menu/Menu'

export default function registerGlobalComponents(app: App<Element>) {
  app
    .component('CButton', Button)
    .component('CIcon', Icon)
    .component('CAlert', Alert)
    .component('CTextInput', TextInput)
    .component('CMenu', Menu)
}
