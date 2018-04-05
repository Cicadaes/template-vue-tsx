import { GetterTree } from 'vuex'
import { IState } from './state'

// export function all (state: IState): IState {
//   return state
// }

// export function print (state: IState): void {
//   return console.log('Name: ' + state.name + ',Sex: ' + state.sex + ',Age' + state.age)
// }

// export function print (state: IState): void {
//   return console.log('Name: ' + state.name + ',Sex: ' + state.sex + ',Age' + state.age)
// }

// [tslint]:
// Type assertion using the '<>' syntax is forbidden. Use the 'as' syntax instead.
// (no-angle-bracket-type-assertion)
// ---
// export default <GetterTree<IState, any>> {
//   all
// }

// [eslint]:
// Parsing error: Unexpected token, expected ";" "as" syntax
// Fix: `eslint.validate {"language": "typescript","autoFix": true}`
// ---
// export default {
//   all
// } as GetterTree<IState, any>

// export everthing compliant to the vuex specification for getters
export default {
  foo (state: IState): string {
    return 'Name: ' + state.name + ',Sex: ' + state.sex + ',Age: ' + state.age
  }
} as GetterTree<IState, any>
