import { DefineGetters, DefineMutations, DefineActions, Dispatcher, Committer } from 'vuex-type-helper'

/**
 * Declare module types
 */
export interface CounterState {
  count: number
}

export interface CounterGetters {
  // getterName: returnType
  half: number
}

export interface CounterMutations {
  // mutationName: mutationPayloadType
  inc: {
    enthusiasm: number
  }
}

export interface CounterActions {
  // actionName: actionPayloadType
  incAsync: {
    enthusiasm: number
    delay: number
  }
}

export const namespaced: boolean = true

/**
 * Implement the module
 */

const state: CounterState = {
  count: 0
}

const getters: DefineGetters<CounterGetters, CounterState> = {
  half: state => state.count / 2
}

const mutations: DefineMutations<CounterMutations, CounterState> = {
  inc (state, { enthusiasm }) {
    state.count += enthusiasm
  }
}

const actions: DefineActions<CounterActions, CounterState, CounterMutations, CounterGetters> = {
  incAsync ({ commit }, payload) {
    setTimeout(() => {
      commit('inc', payload)
    }, payload.delay)
  }
}
