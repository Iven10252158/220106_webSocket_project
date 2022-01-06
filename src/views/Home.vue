<template>
    <ul class="list-unstyled outer mb-0">
      <li>
        <router-link :to="{path : 'lightrail', query:{name: 'lightrail', uuid: ''}}" class="text-decoration-none me-5">高雄輕軌</router-link>
      </li>
       <li>
        <router-link :to="{path : 'station', query:{name: 'station', uuid: ''}}" class="text-decoration-none me-5">高雄火車站</router-link>
      </li>
    </ul>
    <button type='button' @click="pushUUID">傳送</button>
</template>

<script>
import { WS_ADDRESS } from '@/configs/address.js'

export default {
  inject: ['emitter'],
  data () {
    return {
      connection: null,
      messages: [],
      uuid: [],
      lightRail_UUID: '',
      station_UUID: ''
    }
  },

  methods: {
    connect () {
      console.log(this.connection)
    },
    filterData () {
      this.messages.forEach((item, index) => {
        this.uuid.push(item.uuid)
      })
      this.lightRail_UUID = this.uuid[0]
      this.station_UUID = this.uuid[1]
      // this.pushUUID()
    },
    pushUUID () {
      this.emitter.emit('lightRail-uuid', this.lightRail_UUID)
      console.log('pushUUID', this.lightRail_UUID)
    }
  },

  created () {
    const connection = new WebSocket(WS_ADDRESS)
    this.connection = connection
    this.connect()
    this.connection.onopen = (e) => {
      console.log('onOpen事件', e)
      console.log('已成功連線至 WebSocket Server')
    }

    this.connection.onmessage = (e) => {
      const obj = JSON.parse(e.data)
      this.messages = obj
      this.filterData()
    }
  }
}
</script>

<style lang="scss" scoped>
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: orange;
  }
</style>
