import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import React, { FC, useContext } from 'react'
import { HotKeys } from 'react-hotkeys'
import styled, { CSSObject, css } from 'styled-components'
import {
  BackgroundColorProps,
  BorderProps,
  BoxShadowProps,
  boxShadow,
  border,
  color,
  LayoutProps,
  layout,
} from 'styled-system'
import { useFocusTrap } from '../Overlay/useFocusTrap.hook'
import { ModalContext } from './ModalContext'

export interface ModalSurfaceProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BorderProps,
    BoxShadowProps,
    BackgroundColorProps,
    LayoutProps {
  surfaceStyle?: CSSObject
  anchor?: 'right'
  animationState?: string
}

export const ModalSurface: FC<ModalSurfaceProps> = ({
  anchor,
  style,
  className,
  ...props
}) => {
  const { closeModal } = useContext(ModalContext)
  const focusRef = useFocusTrap()

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
      <Style
        className={`surface-overflow ${className}`}
        tabIndex={-1}
        surfaceStyle={style as CSSObject}
        ref={focusRef}
        {...props}
      />
    </HotKeys>
  )
}

const surfaceTransition = () => css`
  ${props =>
    `${props.theme.transitions.durationModerate} ${props.theme.easings.ease}`}
`

const Style = styled.div<ModalSurfaceProps>`
  ${reset}
  ${boxShadow}
  ${border}
  ${layout}

  ${color}

  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  transition: transform ${surfaceTransition}, opacity ${surfaceTransition};

  ${props => props.surfaceStyle};

  &:focus {
    outline: none;
  }
`

Style.defaultProps = {
  backgroundColor: 'palette.white',
  borderRadius: 'medium',
  boxShadow: 3,
  color: 'palette.charcoal900',
}
