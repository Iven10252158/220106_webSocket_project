<template>
  <div class='videoBox'>
    <YoutubeVue3 ref="youtube" :videoid="video3.video_id"
      style='width:100% ;height:600px'
      :autoplay="autoplay"
      @played="onPlayed"/>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'
export default {
  components: {
    YoutubeVue3
  },
  props: {
    autoplay: {
      type: Number,
      default: 1
    },
    loop: {
      type: Number,
      default: 1
    },
    videoid: {
      type: String
    }
  },
  data () {
    return {
      player: '',
      loopPlaylists: true,
      video1: {
        video_id: 'T1DXPL2t64k',
        loop: 1
      },
      video2: {
        video_id: 'pvYMUF-PMnc'
      },
      video3: {
        video_id: 'o1tj2zJ2Wvg' // 'mF3bYa4U6yA'
      },
      playNow: '',
      theseTime: '',
      isDefault: false,
      arVideo: null,
      timer: ''
    }
  },
  methods: {
    onPlayed () {
      console.log('## OnPlayed')
    },
    onEnded () {
      this.player.seekTo(0)
      console.log('## OnEnded')
    },
    changeTime () {
      const date = Date.now()
      const hours = new Date().getHours(date)
      const mins = new Date().getMinutes(date)

      // 轉成字串，如果低於10，前面加上'0'
      const hourString = (hours < 10) ? ('0' + hours) : ('' + hours)
      const minString = (mins < 10) ? ('0' + mins) : ('' + mins)

      this.theseTime = `${hourString}${minString}`
      console.log(this.theseTime)
      //   const startTime = '00'
      //   const endTime = '59'

      //   if (hourString >= 9 && hourString <= 21) {
      this.player.getPlayerState().then(getPlayerState => {
        console.log('外面的getPlayerState', getPlayerState)
        switch (getPlayerState) {
          case 5 :
            this.playNow = this.video1.video_id
            console.log('現在在case 5')
            break

          case 0 :
            switch (hourString) {
              case '11' :
                if (minString === '00') {
                  this.playNow = this.video1.video_id
                  this.player.seekTo(0)
                  console.log('case 0 的 11點整的影片播放')
                } else {
                  this.playNow = this.video1.video_id
                  this.player.seekTo(0)
                  console.log('case 0 的 11點多的影片播放')
                }
                break

              case '12' :
                if (minString === '00') {
                  this.playNow = this.video2.video_id
                  this.player.seekTo(0)
                  console.log('case 0 的 12點整的影片播放')
                } else {
                  getPlayerState = 0
                  this.playNow = this.video2.video_id
                  this.player.seekTo(0)
                  console.log('case 0 的 12點多的影片播放')
                }
                break
            }
            break
        }
      })
    }
  },
  mounted () {
    this.player = this.$refs.youtube.player
    // setInterval(() => {
    //   this.changeTime()
    // }, 1000)
  }
}
</script>

<style scoped lang="scss">

</style>
