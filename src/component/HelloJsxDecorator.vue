<script lang='tsx'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Dispatcher } from 'vuex-type-helper'

import { CounterActions } from '../store/module/count'
// import Store from '../store'
// import Count from '../store/module/count'
// import './base.styl'

@Component
export default class HelloJsxDecorator extends Vue {
  @Prop() name: string
  @Prop({ type: Number }) initialEnthusiasm: number

  // @Prop({
  //   type: String,
  //   default: 'Default Value',
  // }) public name: string
  // @Prop({
  //   type: Number,
  //   default: 'Default Value',
  // }) public initialEnthusiasm: number

  // @Prop([String, Boolean])
  // propC: string | boolean

  // name = 'hello-jsx-component'
  enthusiasm = this.initialEnthusiasm

  increment () {
    // this.enthusiasm++
    /* eslint-disable */
    this.$store.dispatch<Dispatcher<CounterActions>> ({
      type: 'incAsync',
      enthusiasm: 1,
      delay: 1000
    })
  }
  decrement () {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
  get exclamationMarks (): string {
    return Array(this.enthusiasm + 1).join('!')
  }
  render (h: Function) {
    return (
      <div class='hello-jsx-bg hello-jsx'>
        <div>Hello {name}-{this.$store.getters['count/half']}-{this.exclamationMarks}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
</script>

<style lang="stylus">
@import './base.styl'

.hello-jsx
  color rgb(256, 256, 256)
</style>
