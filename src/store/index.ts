import resso from 'resso'
import { create } from 'zustand'

export const rStore = resso({
  count: 0,
  user: {
    name: 'admin',
    token: '1234567890'
  },
  inc: () => {
    rStore.count++
    // store('count', pre => pre + 1) // or this
  }
})

export const userZstore = create<{
  num: number
  updateNum: () => void
}>(set => ({
  num: 0,
  updateNum: () =>
    set(state => ({
      num: state.num + 1
    }))
}))
