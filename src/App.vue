<template>
  <div id="app">
    <kigu></kigu>
    <kan-pei-pei></kan-pei-pei>
    <yugo></yugo>
    <h2>{{ count }}</h2>
    <button v-on:click="increment">plus</button>
  </div>
</template>

<script>
import Kigu from '@/components/Kigu.vue'
import KanPeiPei from '@/components/Kanpei.vue'
import Yugo from '@/components/Yugo.vue'

export default {
  components: { Kigu, KanPeiPei, Yugo },
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
