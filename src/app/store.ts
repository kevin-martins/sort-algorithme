import { configureStore } from '@reduxjs/toolkit'
import sortReducer from '../features/sort-slice'

export const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
