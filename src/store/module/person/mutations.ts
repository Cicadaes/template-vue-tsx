import { MutationTree } from 'vuex'
import { IState } from './state'
import * as Types from '../../types'

// export type personIdentifier = 'adults' | 'juveniles' | 'children'

// export function INC (state: IState, key: personIdentifier) {
//   state[key]++
// }

// export everything compliant to the vuex specification for mutations
export default {
  [Types.PERSON_AGE_INC] (state: IState, key: number) {
    state.age += key
  },
  [Types.PERSON_NAME_CHANGE] (state: IState, key: string) {
    state.name += key
  }
} as MutationTree<IState>
