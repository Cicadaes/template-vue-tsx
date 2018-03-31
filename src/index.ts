import Vue from 'vue'
import HelloComponent from './component/Hello'

new Vue({
  el: '#root',
  components: {
    HelloComponent
  },
  template:
  `
    <div>
      <div>Hello {{ name }}!</div>
      Name : <input v-model='name' type='text'>
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'World'
  }
})