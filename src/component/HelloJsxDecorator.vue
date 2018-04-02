<script lang='tsx'>
import { Component, Prop, Vue } from 'vue-property-decorator'
// import { Dispatcher } from 'vuex-type-helper'
import { State, Action, Getter, Mutation } from 'vuex-class'
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

// import { ICounterActions } from '../store/module/count'
// import Store from '../store'
// import Count from '../store/module/count'
// import './base.styl'

const namespace: string = 'count'

@Component
export default class HelloJsxDecorator extends Vue {
  @State('count') state
  @Getter('half', { namespace }) half
  @Action('incAsync', { namespace }) incAsync
  @Mutation('dec', { namespace }) dec

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
    // this.$store.dispatch<Dispatcher<CounterActions>> ({
    //   type: 'incAsync',
    //   enthusiasm: 1,
    //   delay: 1000
    // })
    this.incAsync({
      enthusiasm: 1,
      delay: 1000
    })
  }
  decrement () {
    // if (this.enthusiasm > 1) {
    //   this.enthusiasm--
    // }
    this.dec({
      enthusiasm: 1
    })
  }
  get exclamationMarks (): string {
    return Array(this.state.count + 1).join('!')
  }
  render (h: Function) {
    return (
      <div class='hello-jsx-bg hello-jsx'>
        <div>Hello {name}-{this.half}-{this.exclamationMarks}</div>
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
