<template>
    <div class="marquee">
        <ul class="marquee-content-lightRail mb-0">
            <li v-for="item in lightRailArray" :key="item">
              <span>{{ item }}</span>
            </li>
        </ul>

        <ul class="marquee-content-station mb-0">
            <li v-for="item in stationArray" :key="item">
              <span>{{ item }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  inject: ['useWebsocket'],
  data () {
    return {
      connection: '',
      marquee: [
        {
          name: 'listID1',
          content: '小心月臺與列車間的空隙,留意列車廣播,盡量往車廂內部移動,盡量挪出空間予輪椅使用者,列車行駛有起步加速及靠站煞車,站立時，時常緊握扶手或吊環,請勿倚靠車門, 請勿把手貼靠在車門上, 請將博愛座禮讓年長者、孕婦、行動不便或抱小孩之旅客優先乘坐, 使用行動電話與人交談，請降低音量，以免干擾其他旅客, 請勿把行李放在會阻礙通道或妨礙其他旅客的地方, 上下車時，留意隨身物品, 關門警音響起時，請勿強行下車, 發生緊急狀況時，使用車門旁的對講機和司機員聯絡'
        },
        {
          name: 'listID2',
          content: '賀!!光禾感知科技股份有限公司榮獲第三屆品牌金舶獎, 這裡放要跑的文字1, 這裡放要跑的文字2, 這裡放要跑的文字3'
        }
      ],
      data: [],
      listID1: '',
      listID2: ''
    }
  },
  methods: {
    getMarquee () {
      switch (this.name) {
        case 'lightrail' :
          this.marquee.forEach(item => {
            const string = item.content.split(',')
            if (item.name === 'listID1') {
              this.lightRailArray = string
            }
          })
          break
        case 'station' :
          this.marquee.forEach(item => {
            const string = item.content.split(',')
            if (item.name === 'listID2') {
              this.stationArray = string
            }
          })
          break
      }
    }
  },
  mounted () {
    // this.name = this.$route.query.name
    this.connection = this.useWebsocket()
    this.connection.onopen = (e) => {
      console.log('onOpen事件 in Marquee.vue', e)
      console.log('已成功連線至 WebSocket Server')
    }

    this.connection.onmessage = (e) => {
      const obj = JSON.parse(e.data)
      this.data = obj

      const listArray = []
      this.data.forEach(item => {
        listArray.push(item.listID)
      })
      this.listID1 = listArray[0]
      this.listID2 = listArray[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.marquee {
 height: 2em;
 margin: 0 auto;
 overflow: hidden;
 position: relative;
 background: black;
}

.marquee-content-lightRail {
  // padding-left: 0;
  display: flex;
  list-style: none;
  animation: marquee 40s linear infinite;
  position: absolute;
  li {
    white-space: nowrap;
    margin-right: 2em;
      span {
        font-weight: bold;
        color: yellow;
      }
  }
}

.marquee-content-station {
  // padding-left: 0;
  display: flex;
  list-style: none;
  animation: marquee 15s linear infinite;
  position: absolute;
  li {
    white-space: nowrap;
    margin-right: 2em;
      span {
        font-weight: bold;
        color: yellow;
      }
  }
}

@keyframes marquee {
  0% {
    left: 100%;
    transform: translateX(0%);
  }

  100% {
    left: 0;
    transform: translateX(-100%);
  }
}

</style>
