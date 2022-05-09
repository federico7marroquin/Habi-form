import { Styles } from 'react-modal'
import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`

export const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
}
