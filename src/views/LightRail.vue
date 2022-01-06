<template>
    <h2>This is LightRail page</h2>
</template>

<script>
export default {
  inject: ['emitter'],
  data () {
    return {
      name: '',
      uuid: ''
    }
  },
  mounted () {
    console.log(this.$route)
    this.emitter.on('lightRail-uuid', (msg) => {
      this.uuid = msg
    })
    console.log('uuid', this.uuid)
  }
}
</script>
