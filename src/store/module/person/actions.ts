import { ActionTree, ActionContext } from 'vuex'
import { IState } from './state'
import * as Types from '../../types'

// export everything compliant to the vuex specification for actions
export default {
  [Types.PERSON_AGE_INC] (store: ActionContext<IState, any>, key) {
    store.commit(Types.PERSON_AGE_INC, key)
  }
} as ActionTree<IState, any>
