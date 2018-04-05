import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import App from './App.vue'
import Store from './store'

import HelloHtml from './component/HelloHtml'
import * as Template from './app.html'

// new Vue({
//   store: Store,
//   components: { App },
//   template: '<App/>'
// }).$mount('#app')

@Template
@Component({
  store: Store,
  components: {
    HelloHtml
  }
})
class App extends Vue {

}

const vm = new App()
vm.$mount('#app')
