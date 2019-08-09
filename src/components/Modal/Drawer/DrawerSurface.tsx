import * as React from 'react'
import { styled } from '../../../style'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export const DrawerSurface: React.FC<ModalSurfaceProps> = ({
  children,
  width = '30rem',
  anchor = 'right',
  ...props
}) => {
  return (
    <Surface
      height="100%"
      maxWidth="100%"
      width={width}
      anchor={anchor}
      {...props}
    >
      {children}
    </Surface>
  )
}

// Shadow here is designed to match theme.shadows[3] but with a single left-side shadow

const Surface = styled(ModalSurface)`
  box-shadow: -18px 0 18px -18px rgba(0, 0, 0, 0.12);

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
