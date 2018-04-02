<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'

// import HelloComponent from './component/Hello.vue'
// import HelloDecoratorComponent from './component/HelloDecorator.vue'
import HelloJsxDecoratorComponent from './component/HelloJsxDecorator.vue'
import HelloJsxVuex from './component/HelloJsxVuex.vue'
// import { CreateElement } from 'vue/types/vue'

@Component({
  components: {
    // HelloComponent,
    // HelloDecoratorComponent,
    HelloJsxDecoratorComponent,
    HelloJsxVuex
  }
})
export default class App extends Vue {
  render (h: Function) {
    return (
      <div>
        <hello-jsx-decorator-component initial-enthusiasm={5} />
        <br />
        <hello-jsx-vuex />
      </div>
    )
  }
}
</script>
