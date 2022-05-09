import { ContainerName, NavigationFunctions } from '@/types/Page'
import { AddressDataContainer } from './AddressDataContainer'
import { ClientDataContainer } from './ClientDataContainer'
import { EmailDataContainer } from './EmailDataContainer'
import { FloorDataContainer } from './FloorDataContainer'
import { OptionsDataContainer } from './OptionsDataContainer'

import React from 'react'
export const SelectContainer = ({
  containerName,
  navigationFunctions: { goToPreviousPage, goToNextPage },
}: {
  containerName: ContainerName
  navigationFunctions: NavigationFunctions
}) => {
  switch (containerName) {
    case 'AddressDataContainer':
      return (
        <AddressDataContainer
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )
    case 'ClientDataContainer':
      return (
        <ClientDataContainer
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )
    case 'EmailDataContainer':
      return (
        <EmailDataContainer
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )
    case 'FloorDataContainer':
      return (
        <FloorDataContainer
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )
    case 'OptionsDataContainer':
      return (
        <OptionsDataContainer
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )
  }
}
