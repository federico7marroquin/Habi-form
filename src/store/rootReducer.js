import { combineReducers } from '@reduxjs/toolkit'
import stepperReducer from './stepper/slice'
import resumeReducer from './resume/slice'
import progressReducer from './progress/slice'

export const combinedReducer = combineReducers({
  steps: stepperReducer,
  resume: resumeReducer,
  progress: progressReducer
  // ... all your app's reducers
})

export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return combinedReducer(state, action)
}
