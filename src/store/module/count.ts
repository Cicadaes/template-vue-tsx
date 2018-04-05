import { createNamespacedHelpers } from 'vuex'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'
// import { createDecorator } from 'vue-class-component/lib/util'

/**
 * Declare module types
 */
interface IState {
  count: number
}

interface IGetters {
  // getterName: returnType
  half: number
}

interface IMutations {
  // mutationName: mutationPayloadType
  inc: {
    enthusiasm: number
  },
  dec: {
    enthusiasm: number
  }
}

interface IActions {
  // actionName: actionPayloadType
  incAsync: {
    enthusiasm: number,
    delay: number
  }
}

/**
 * Implement the module
 */

const state: IState = {
  count: 0
}

const getters: DefineGetters<IGetters, IState> = {
  half: state => state.count / 2
}

const mutations: DefineMutations<IMutations, IState> = {
  inc (state, { enthusiasm }) {
    state.count += enthusiasm
  },
  dec (state, { enthusiasm }) {
    state.count -= enthusiasm
  }
}

const actions: DefineActions<IActions, IState, IMutations, IGetters> = {
  incAsync ({ commit }, payload) {
    setTimeout(() => {
      commit('inc', payload)
    }, payload.delay)
  }
}

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers<IState, IGetters, IMutations, IActions>('count')

export const count = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
