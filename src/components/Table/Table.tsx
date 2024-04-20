import { defineComponent } from 'vue'

const Table = defineComponent({
  name: 'TableComp',
  setup (props) {
    return () => {
      <table>
        <thead>
          <tr>
            <th>
              test
            </th>
          </tr>
        </thead>
        <tbody>
          <tr><td>test</td></tr>
          <tr><td>test</td></tr>
          <tr><td>test</td></tr>
          <tr><td>test</td></tr>
        </tbody>
      </table>
    }
  }
})

export default Table
