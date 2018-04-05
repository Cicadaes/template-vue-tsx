import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as Template from './HelloHtml.html'

@Template
@Component
export default class HelloHtml extends Vue {
  link = { name: 'Jusi', sex: 'man', age: 28 }
}
