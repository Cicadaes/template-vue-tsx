<template>
  <div>
    <div>Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
  
<script lang='ts' src='./HelloDecorator'></script>

<style lang="stylus">
  .greeting
    background-color rgb(51, 51, 51)
</style>
