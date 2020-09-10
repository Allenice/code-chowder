<template>
  <div id="app">
    <test name="aa" test="aaa"></test>
    <img alt="Vue logo" src="./assets/logo.png">
    <icon data="@/assets/svg-icon/vue.svg" original></icon>
    <icon data="@icon/vue.svg" original></icon>
    <input type="text" @change="changeMsg">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  },
  data() {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeMsg(e) {
      this.message = e.target.value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
