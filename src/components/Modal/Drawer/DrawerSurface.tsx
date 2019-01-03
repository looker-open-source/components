import * as React from 'react'
import { styled, withTheme } from '../../../style'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

const Internal: React.SFC<ModalSurfaceProps> = ({
  children,
  width = '30rem',
  ...props
}) => {
  return (
    <Surface
      height="100%"
      maxWidth="100%"
      right={0}
      top={0}
      width={width}
      {...props}
    >
      {children}
    </Surface>
  )
}

export const DrawerSurface = withTheme(Internal)

const Surface = styled(ModalSurface)`
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
