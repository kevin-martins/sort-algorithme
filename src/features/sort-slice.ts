import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateArray } from '../helpers/helpers'

export interface SortState {
  size: number
  min: number
  max: number
  array: number[]
  timer: number
  comparaison: number
  swap: number
}

const initialState: SortState = {
  size: 50,
  min: 5,
  max: 300,
  array: [],
  timer: 0,
  comparaison: 0,
  swap: 0
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    fitScreen(state, action: PayloadAction<{ width: number, height: number }>) {
      state.size = Math.floor(action.payload.width / 3)
      state.max = Math.floor(action.payload.height / 2)
    },
    setSize(state, action: PayloadAction<number>) {
      state.size = action.payload
    },
    setArray(state) {
      state.array = []
      // generateArray(state.array, state.size, state.min, state.max)
    },
    startTimer(state) {
      state.timer = Date.now() / 1000
    },
    stopTimer(state) {
      state.timer = (Date.now() / 1000) - state.timer
    }
  }
})

export const {
  fitScreen,
  setSize,
  setArray,
  startTimer,
  stopTimer,
} = sortSlice.actions
export default sortSlice.reducer