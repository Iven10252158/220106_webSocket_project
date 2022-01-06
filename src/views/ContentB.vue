<template>
    <h2>This is contentB page</h2>
    {{ contentB_uuid }}
    <Video></Video>
</template>

<script>
import Video from '@/components/Video.vue'
export default {
  props: {
    contentB: {
      type: Object,
      default () {
        return {
          uuid: 'd12dc2ec-6c5b-11ec-90d6-0242ac120003'
        }
      }
    }
  },
  components: {
    Video
  },
  data () {
    return {
      name: '',
      contentB_uuid: ''
    }
  },
  methods: {

  },
  mounted () {
    this.contentB_uuid = this.$route.query.uuid
    console.log(this.contentB_uuid)
  }
}
</script>
