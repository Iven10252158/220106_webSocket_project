<template>
    <ul class="list-unstyled outer mb-0">
      <li>
        <router-link :to="{path : 'contentA', query:{ uuid: this.contentA_UUID}}" class="text-decoration-none me-5">contentA</router-link>
      </li>
       <li>
        <router-link :to="{path : 'contentB', query:{ uuid: this.contentB_UUID}}" class="text-decoration-none me-5">contentB</router-link>
      </li>
    </ul>
</template>

<script>
// import { WS_ADDRESS } from '@/configs/address.js'

export default {
  inject: ['useWebsocket'],
  data () {
    return {
      connection: null,
      messages: [],
      contentA_UUID: '',
      contentB_UUID: ''
    }
  },

  methods: {
    connect () {
      console.log(this.connection)
    },
    filterData () {
      const uuid = []
      this.messages.forEach((item) => {
        uuid.push(item.uuid)
      })
      this.contentA_UUID = uuid[0]
      this.contentB_UUID = uuid[1]
    }
  },

  created () {
    console.log(this.useWebsocket())
    //   const connection = new WebSocket(WS_ADDRESS)
    this.connection = this.useWebsocket()
    //   this.connect()
    this.connection.onopen = (e) => {
      console.log('onOpen事件', e)
      console.log('已成功連線至 WebSocket Server')
    }

    this.connection.onmessage = (e) => {
      console.log('this is onmessage')
      const obj = JSON.parse(e.data)
      this.messages = obj
      console.log(this.messages)
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
