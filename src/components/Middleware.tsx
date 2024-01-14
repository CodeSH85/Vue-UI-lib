import { defineComponent, defineAsyncComponent, ref } from 'vue'
import type { Component } from 'vue'
import AccountingView from '../views/AccountingView.vue'
import FormView from '../views/FormView.vue'
import EditorView from '../views/EditorView.vue'
import SpreadSheetView from '../views/SpreadSheetView.vue'
import DiagramView from '../views/DiagramView.vue'
import HomeView from '../views/HomeView.vue'
import ComponentView from '../views/ComponentView.vue'

export default defineComponent({
  name: 'MiddlewareComp',
  props: {
    data: {
      type: Object
    },
    componentName: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const compDef: Component = {
      AccountingView,
      FormView,
      EditorView,
      SpreadSheetView,
      DiagramView,
      HomeView,
      ComponentView
    }
    const DynamicComponent = defineAsyncComponent(() => {
      return Promise.resolve(compDef[props.componentName])
    })

    return () => (
      <DynamicComponent></DynamicComponent>
    )
  }
})
