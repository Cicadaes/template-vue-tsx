import { DefineGetters, DefineMutations, DefineActions, Dispatcher, Committer } from 'vuex-type-helper'

/**
 * Declare module types
 */
export interface ICounterState {
  count: number
}

export interface ICounterGetters {
  // getterName: returnType
  half: number
}

export interface ICounterMutations {
  // mutationName: mutationPayloadType
  inc: {
    enthusiasm: number
  },
  dec: {
    enthusiasm: number
  }
}

export interface ICounterActions {
  // actionName: actionPayloadType
  incAsync: {
    enthusiasm: number,
    delay: number
  }
}

/**
 * Implement the module
 */

const state: ICounterState = {
  count: 0
}

const getters: DefineGetters<ICounterGetters, ICounterState> = {
  half: state => state.count / 2
}

const mutations: DefineMutations<ICounterMutations, ICounterState> = {
  inc (state, { enthusiasm }) {
    state.count += enthusiasm
  },
  dec (state, { enthusiasm }) {
    state.count -= enthusiasm
  }
}

const actions: DefineActions<ICounterActions, ICounterState, ICounterMutations, ICounterGetters> = {
  incAsync ({ commit }, payload) {
    setTimeout(() => {
      commit('inc', payload)
    }, payload.delay)
  }
}

export const count = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
