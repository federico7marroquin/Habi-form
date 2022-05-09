export type Resume = {
  name?: string
  floor?: number
  address?: string
  email?: string
  checked?: number[]
}

export type ResumeDictionary = {
  name: string
  floor: string
  address: string
  email: string
  checked: string
}

export type ResumeNormalized = {
  id: string
  label: string
  value: string | number | number[] | undefined
}[]
