// default import for testing
// import * as chai from 'chai'
import { suite, test } from 'mocha-typescript'
import { expect } from 'chai'

// setup Vuex
// import Vue from 'vue'
import * as Vue from 'vue'
import * as Vuex from 'vuex'

// import own code
import { State } from '../../../../src/store/module/person/state'
import Mutations from '../../../../src/store/module/person/mutations'
import * as Types from '../../../../src/store/types'

// console.log(Vue)
// Vue.use(Vuex)
Vue.use(Vuex)

@suite('MUTATIONS')
class Unit { // tslint:disable-line
  @test('person/inc works')
  public inc () {
    const state = new State()

    Mutations[Types.PERSON_AGE_INC](state, 3)
    expect(state.age).to.be.equal(30)
  }
}
