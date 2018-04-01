import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloDecorator extends Vue {
  @Prop() public name: string
  @Prop() public initialEnthusiasm: number

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

  public enthusiasm = this.initialEnthusiasm

  public increment () {
    this.enthusiasm++
  }
  public decrement () {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
  get exclamationMarks (): string {
    return Array(this.enthusiasm + 1).join('!')
  }
}
