// import * as Vuex from 'vuex'
// import * as Count from './module/count'

// /**
//  * Create a store as same as the ordinary way
//  */
// export const store = new Vuex.Store({
//   modules: {
//     a: Count
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
import { Person } from './module/person'
/**
 * Create a store as same as the ordinary way
 */
Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  modules: {
    person: new Person()
  }
})
