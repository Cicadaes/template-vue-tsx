// default import for testing
// import * as chai from 'chai'
import { suite, test } from 'mocha-typescript'
import { expect } from 'chai'

// setup Vuex
// import Vue from 'vue'
import * as Vue from 'vue'
import * as Vuex from 'vuex'

// console.log(Vue)
// Vue.use(Vuex)
Vue.use(Vuex)

// import own code
import { State } from '../../../../src/store/module/person/state'
import { Person } from '../../../../src/store/module/person/'

let store: Vuex.Store<State>

@suite('GETTERS')
class Functional { // tslint:disable-line
  before () {
    store = new Vuex.Store({
      modules: {
        person: new Person()
      }
    })
  }

  @test('returning complete state works')
    public allWorks () {
    const result: string = store.getters['person/foo']

    expect(result).include('Name: Jusi')
  }
}

// node_modules/vuex-type-helper/helpers.d.ts:6:32 - error TS2709: Cannot use namespace 'Vue' as a type.
// import Vue from 'vue' => import Vue = require('vue')
