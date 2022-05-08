import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import stepperReducer from './stepper/slice'
/**
 * This creates a Redux store, and also automatically configure the Redux DevTools extension
 * so that you can inspect the store while developing.
 */
export const store = configureStore({
  reducer: {
    steps: stepperReducer,
  },
})

/**
 * Infer the `AppState` type from the store itself
 */
export type AppState = ReturnType<typeof store.getState>

/**
 * Infer the `AppDispatch` type from the store itself
 */
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>
