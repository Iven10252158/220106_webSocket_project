<template>
  <router-view/>
</template>

<script>
import { useWebsocket } from '@/configs/useWebSocket.js'
export default {
  provide () {
    return {
      useWebsocket
    }
  }
}

</script>

<style lang="scss">
  @import "./assets/all";
</style>
