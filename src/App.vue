<template>
  <router-view/>
</template>
<script>
import emitter from '@/configs/mitt.js'

export default {
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/all";
</style>
