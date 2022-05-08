import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import * as configPaths from '@/utils/paths/configPaths.json'
import { Page, PageNavigation } from '@/types/Page'
import { AppState } from '..'
export interface CounterState {
  value: number
}

const initialState: Page[] = Array.from(configPaths).sort((a, b) =>
  a.order > b.order ? 1 : -1
) as Page[]

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    update: (_state, action: PayloadAction<Page[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return action.payload.sort((a, b) => (a.order > b.order ? 1 : -1))
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = stepsSlice.actions

export const selectSteps = (state: AppState) => state.steps
export const selectPage = (_: AppState, pagePath: string) => pagePath

export const pageSelector = createSelector(
  selectSteps,
  selectPage,
  (steps, pagePath) => {
    const index = steps.findIndex((step) => step.path === pagePath)
    //selects the previous step
    const prevPath = `/${index > 0 && steps[index - 1].path}`
    //selects the next step
    const nextPath = `/${
      index === steps.length - 1 ? 'resumen' : steps[index + 1].path
    }`
    //AugmentatedPage allows to pass prev and next paths to a page
    const augmentatedPage: PageNavigation = {
      prevPath,
      nextPath,
    }
    return augmentatedPage
  }
)

export default stepsSlice.reducer
