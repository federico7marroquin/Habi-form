import { Resume, ResumeDictionary } from '@/types/Resume'
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '..'

const initialState: Resume = {}

const dictionary: ResumeDictionary = {
  name: 'Nombre',
  floor: 'Piso',
  email: 'Correo',
  checked: 'Opciones',
  address: 'Dirección',
}
export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<Resume>) => {
      return { ...state, ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateField } = resumeSlice.actions

export const selectResume = (state: AppState) => state.resume

export const resumeSelector = createSelector(selectResume, (state) => {
  const resume = Object.keys(state).map((key) => {
    const value = state[key as keyof Resume]
    return {
      id: key,
      label: dictionary[key as keyof ResumeDictionary],
      value: Array.isArray(value) ? value.join(', ') : value,
    }
  })

  return resume.length > 0 ? resume : []
})

export default resumeSlice.reducer
