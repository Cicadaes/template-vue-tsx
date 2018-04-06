import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import App from './App.vue'
import Store from './store'
import HelloHtml from './component/HelloHtml'

import './style/main.styl'

// new Vue({
//   store: Store,
//   components: { App },
//   template: '<App/>'
// }).$mount('#app')

// https://sketchboard.io/vue-jsx-typescript-example/
@Component({
  store: Store,
  components: {
    HelloHtml
  }
})
class App extends Vue {
  render (h: Function) {
    return (
      <div>
        Hello TSX
        <hello-html />
      </div>
    )
  }
}

const vm = new App()
vm.$mount('#app')
