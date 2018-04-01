<script lang='tsx'>
import { CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

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
  enthusiasm = this.initialEnthusiasm;

  increment () {
    this.enthusiasm++
  }
  decrement () {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
  get exclamationMarks (): string {
    return Array(this.enthusiasm + 1).join('!')
  }
  render (h: CreateElement) {
    return (
      <div>
        <div>Hello {name}{this.exclamationMarks}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
</script>

<style lang="stylus">
.greeting {
  background-color: rgb(51, 51, 51);
}
</style>
