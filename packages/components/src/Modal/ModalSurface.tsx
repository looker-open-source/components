import React, { FunctionComponent } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { CSSObject, StyledComponent } from 'styled-components'
import omit from 'lodash/omit'
import { Box, BoxProps } from '../Layout/Box'
import { CustomizableModalAttributes } from './Modal'
import { ModalContext } from './ModalContext'

export interface ModalSurfaceProps
  extends Omit<BoxProps<HTMLDivElement>, 'as'> {
  anchor?: 'right'
  animationState?: string
}

export type ModalSurfaceComponentType = FunctionComponent<ModalSurfaceProps>
export type StyledModalSurfaceComponentType = StyledComponent<
  ModalSurfaceComponentType,
  ModalSurfaceProps
>

export const ModalSurface: ModalSurfaceComponentType = ({
  anchor,
  style,
  className,
  ...props
}) => {
  const { closeModal } = React.useContext(ModalContext)

  return (
    <HotKeys
      keyMap={{
        CLOSE_MODAL: {
          action: 'keyup',
          name: 'Close Modal',
          sequence: 'esc',
        },
      }}
      handlers={{
        CLOSE_MODAL: () => {
          closeModal && closeModal()
        },
      }}
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: anchor === 'right' ? 'flex-end' : 'center',
        width: '100%',
      }}
      // NOTE: Styling is required because react-hotkeys injects a DOM element (`div` by default) that
      // breaks the flex inheritance. Eventually they will offer a React Hook that should allow removal
      // of this workaround.
      //
      // display: contents would be another workaround when it gains broader (corrected) support
    >
      <TransitionTimers
        bg={CustomizableModalAttributes.surface.backgroundColor}
        display="flex"
        className={`surface-overflow ${className}`}
        flexDirection="column"
        maxWidth="100%"
        position="relative"
        tabIndex={-1}
        surfaceStyle={style as CSSObject}
        focusStyle={{ outline: 'none' }}
        {...props}
      />
    </HotKeys>
  )
}

export interface SurfaceInternalProps
  extends Omit<BoxProps<HTMLElement>, 'as'> {
  surfaceStyle?: CSSObject
}

export type InternalSurfaceComponentType = FunctionComponent<
  SurfaceInternalProps
>

const SurfaceFactory: InternalSurfaceComponentType = props => (
  <Box {...omit(props, 'surfaceStyle')} />
)

const TransitionTimers = styled<InternalSurfaceComponentType>(SurfaceFactory)`
  /* stylelint-disable */
  box-shadow: ${props => props.theme.shadows[3]};

  transition: transform ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease},
    opacity ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease};

  ${props => props.surfaceStyle};
`
