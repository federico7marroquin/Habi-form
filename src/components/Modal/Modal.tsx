import React from 'react'
import ReactModal from 'react-modal'
import { Button } from '../Button'
import { Resume } from '../Resume'
import { customStyles, ModalContainer } from './styles'
/**
 * Se uso react-modal para agilizar debido a falta de tiempo
 * @returns React component
 */
export const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ModalContainer>
      <Button label="Resumen" onClick={openModal} />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Resume />
        <Button onClick={closeModal} label="Cerrar" />
      </ReactModal>
    </ModalContainer>
  )
}
