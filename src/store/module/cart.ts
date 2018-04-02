import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'

// refs: https://github.com/Anonyfox/vuex-store-module-example
export class State {
  count: number = 0
}

const getters = {
  count (state: State): number {
    return state.count
  }
} as GetterTree<State, any>

const mutations = {
  inc (state: State, amount: number) {
    state.count += amount
  },
  dec (state: State) {
    state.count -= 1
  }
} as MutationTree<State>

const actions = {
  inc (store: ActionContext<State, any>, amount: number) {
    store.commit('inc', amount)
  },
  dec (store: ActionContext<State, any>) {
    store.commit('dec')
  }
} as ActionTree<State, any>

export const cart = {
  namespaced: true,
  state: new State(),
  getters: getters,
  mutations: mutations,
  actions: actions
}
