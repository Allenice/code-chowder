<template>
  <div class="hello">
    <h1 v-on:click="click">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },

  methods: {
    click (msg, e) {
      console.log(msg, e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  color: #42b983;

  h1 {
    color: blue;
  }
}
</style>
