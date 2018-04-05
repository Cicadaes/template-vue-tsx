import { Module, Plugin } from 'vuex'
import { State, IState } from './state'
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'

export class Person implements Module<IState, any> {
  // resovle namespacing, applies `foo/bar/...` stuff automatically
  namespaced: boolean = true

  // default properties required for vuex stores/modules
  state: State
  getters = Getters
  mutations = Mutations
  actions = Actions
  plugins?: Plugin<IState>[] = []

  // create everything
  constructor (plugins?: Plugin<IState>[]) {
    this.state = new State()
    // Type 'Plugin<IState>[] | undefined' is not assignable to type 'Plugin<IState>[]'
    this.plugins = plugins
  }
}
