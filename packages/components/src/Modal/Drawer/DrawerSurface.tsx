import styled from 'styled-components'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export const DrawerSurface = styled(ModalSurface)<ModalSurfaceProps>`
  border-radius: 0;
  box-shadow: -18px 0 18px -18px rgba(0, 0, 0, 0.12);
  /* Shadow designed to match theme.shadows[3] but with a single left-side shadow */
  height: 100%;
  max-width: 100%;

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateX(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateX(0%);
  }
`

DrawerSurface.defaultProps = {
  anchor: 'right',
  width: '30rem',
}
