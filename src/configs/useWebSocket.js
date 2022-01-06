import { WS_ADDRESS } from '../configs/address.js'
export function useWebsocket () {
  const ws = new WebSocket(WS_ADDRESS)
  return ws
}
