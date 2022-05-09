import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '..'

const initialState = 0

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    incrementProgress: (state) => state + 1,
    decrementProgress: (state) => state - 1,
  },
})

export const selectProgress = (state: AppState) => state.progress

export const { incrementProgress, decrementProgress } = progressSlice.actions

export default progressSlice.reducer
