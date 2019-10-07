import styled from 'styled-components'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export const DialogSurface = styled(ModalSurface)<ModalSurfaceProps>`
  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateY(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateY(0%);
  }
`

DialogSurface.defaultProps = {
  maxHeight: '90vh',
  maxWidth: '100%',
}
