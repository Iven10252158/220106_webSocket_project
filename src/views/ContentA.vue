<template>
    <h2>This is contentA page</h2>
    {{ contentA_uuid }}
    <ul>
      <li>
        <button type='button' class="btn btn-primary btn-sm" @click='getListID'>A跑馬燈</button>
        <!-- <router-link :to="{path : 'contentA', query:{ uuid: contentA_uuid, listID: '1234'}}" class="text-decoration-none me-5">A跑馬燈</router-link> -->
      </li>
      <li>
        <router-link :to="{path : 'contentA', query:{ uuid: contentA_uuid, listID: '1234'}}" class="text-decoration-none me-5">B跑馬燈</router-link>
      </li>
    </ul>
    <!-- <Marquee></Marquee> -->
    <Video></Video>
</template>

<script>
import Video from '@/components/Video.vue'
// import Marquee from '@/components/Marquee.vue'
export default {
  inject: ['useWebsocket'],
  components: {
    Video
    // Marquee
  },
  props: {
    contentA: {
      type: Object,
      default () {
        return {
          uuid: 'd12dc2ec-6c5b-11ec-90d6-0242ac120003'
        }
      }
    }
  },
  data () {
    return {
      name: '',
      contentA_uuid: ''
    }
  },
  methods: {
    getListID () {
      const ID = '1234'
      this.$route.query.listID = `${ID}`
      this.$router.push({ path: '/contentA', query: { uuid: this.contentA_uuid, listID: `${ID}` } })
      console.log(this.$route)
      console.log('A跑馬燈')
    }
  },
  mounted () {
    this.contentA_uuid = this.$route.query.uuid
  }
}
</script>
