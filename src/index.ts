import Vue from 'vue'
import HelloComponent from './component/Hello.vue'
import HelloDecoratorComponent from './component/HelloDecorator.vue'

new Vue({
  el: '#root',
  components: {
    HelloComponent,
    HelloDecoratorComponent
  },
  template:
  `
    <div>
      <div>Hello {{ name }}!</div>
      Name : <input v-model='name' type='text'>
      <h1>Hello Component</h1>
      <hello-component :name="name" :initialEnthusiasm="5" />
      <h1>Hello Decorator Component</h1>
      <hello-decorator-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'World'
  }
})