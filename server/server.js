const webSocket = require('ws')

;((ws) => {
  const wss = new ws.Server({ port: 3000 })

  function init () {
    bindEvent()
  }

  function bindEvent () {
    wss.on('open', handleOpen)
    wss.on('close', handleClose)
    wss.on('error', handleError)
    wss.on('connection', handleConnection)
  }

  function handleOpen () {
    console.log('webSocket Open')
  }

  function handleClose () {
    console.log('webSocket Close')
  }

  function handleError () {
    console.log('webSocket Error')
  }

  function handleConnection (ws) {
    console.log('webSocket Connection')
    var data = [{
      listID: 'f49d4f32-6c46-11ec-90d6-0242ac120003',
      name: 'video1',
      uuid: 'd12dc2ec-6c5b-11ec-90d6-0242ac120003',
      type: 'video',
      source: 'https://www.youtube.com/watch?v=o1tj2zJ2Wvg',
      videoID: 'o1tj2zJ2Wvg'
    },
    {
      listID: 'f49d4f32-6c46-11ec-90d6-0242ac120004',
      name: 'video2',
      uuid: 'd12dc2ec-6c5b-11ec-90d6-0242ac120004',
      type: 'video',
      source: 'https://www.youtube.com/watch?v=pvYMUF-PMnc',
      videoID: 'pvYMUF-PMnc'
    }]
    setTimeout(() => {
      ws.send(JSON.stringify(data))
    }, 1000)
    ws.on('message', handleMessage)
  }

  function handleMessage (msg) {
    console.log('msg', msg)
  }
  init()
})(webSocket)
