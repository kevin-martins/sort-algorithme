import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateArray } from '../helpers/helpers'

export interface SortState {
  size: number
  array: number[]
  timer: number
}

const initialState: SortState = {
  size: 100,
  array: [],
  timer: 0,
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSize(state, action: PayloadAction<number>) {
      state.size = action.payload
    },
    setArray(state, action: PayloadAction<number>) {
      state.array = []
      generateArray(state.array, action.payload)
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
  setSize,
  setArray,
  startTimer,
  stopTimer,
} = sortSlice.actions
export default sortSlice.reducer