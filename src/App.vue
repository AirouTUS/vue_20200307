<template>
  <div id="app">
    <h2>{{ count }}</h2>
    <button v-on:click="increment">plus</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 本通り
      count: 0
    }
  },
  computed: {
    // 本通り
  },
  methods: {
    // 本通り
    increment: function() {
      this.count++
    }
  },
  filters: {
    // 本通り
  }
}
</script>

<style>
</style>
