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
    amount: number
  }
}

export interface CounterActions {
  // actionName: actionPayloadType
  incAsync: {
    amount: number
    delay: number
  }
}

/**
 * Implement the module
 */
export const state: CounterState = {
  count: 0
}

export const getters: DefineGetters<CounterGetters, CounterState> = {
  half: state => state.count / 2
}

export const mutations: DefineMutations<CounterMutations, CounterState> = {
  inc (state, { amount }) {
    state.count += amount
  }
}

export const actions: DefineActions<CounterActions, CounterState, CounterMutations, CounterGetters> = {
  incAsync ({ commit }, payload) {
    setTimeout(() => {
      commit('inc', payload)
    }, payload.delay)
  }
}
