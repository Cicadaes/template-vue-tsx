declare module '*.html' {
  // [ts] 'Vue' only refers to a type, but is being used as a namespace here.
  // https://stackoverflow.com/questions/46931994/vue-2-5-vue-class-component-uses-vue-namespace-but-its-a-type
  // ---
  // import Vue from 'vue'
  // interface WithRender {
  //   <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
  //   <V extends typeof Vue><component: V>: V
  // }
  // const withRender: WithRender
  // export = withRender

  // [ts] Call signature, which lacks return-type annotation, implicitly has an 'any' return type.
  // https://www.npmjs.com/package/vue-template-loader
  // ---
  import Vue, { ComponentOptions } from 'vue'
  interface WithRender {
    <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
    <V extends typeof Vue>(component: V): V
  }
  const withRender: WithRender
  export = withRender
}