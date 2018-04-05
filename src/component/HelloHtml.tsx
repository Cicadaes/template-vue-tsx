import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class HelloHtml extends Vue {
  link = { name: 'Jusi', sex: 'man', age: 28 }
  render (h: Function) {
    return (
      <div>
        {this.link.name}--{this.link.sex}--{this.link.age}
      </div>
    )
  }
}
