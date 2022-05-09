export interface Page {
  path: string
  containerName: ContainerName
  order: number
  description: string
  title: string
}

export interface NavigationFunctions {
  goToNextPage: () => void
  goToPreviousPage: () => void
}

export interface PageNavigation {
  prevPath: string
  nextPath: string
  step: number
}

export type ContainerName =
  | 'ClientDataContainer'
  | 'EmailDataContainer'
  | 'AddressDataContainer'
  | 'FloorDataContainer'
  | 'OptionsDataContainer'
