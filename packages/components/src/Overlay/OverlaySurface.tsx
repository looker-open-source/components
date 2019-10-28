import {
  reset,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  fadeIn,
} from 'looker-design-tokens'
import { Placement } from 'popper.js'
import React, {
  CSSProperties,
  DOMAttributes,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
} from 'react'
import { HotKeys } from 'react-hotkeys'
import { PopperArrowProps } from 'react-popper'
import styled from 'styled-components'
import { ModalContext } from '../Modal'
import { OverlaySurfaceArrow } from './OverlaySurfaceArrow'
import { useFocusTrap } from './useFocusTrap.hook'

export interface SurfaceStyleProps extends BorderProps, BoxShadowProps {
  color?: string
  backgroundColor?: string
  border?: string
  borderColor?: string
}

export interface OverlaySurfaceProps extends SurfaceStyleProps {
  arrow?: boolean
  arrowProps: PopperArrowProps
  children: ReactNode
  eventHandlers?: DOMAttributes<{}>
  placement: Placement
  style?: CSSProperties
  zIndex?: number
}

export const OverlaySurface = forwardRef(
  (props: OverlaySurfaceProps, ref: Ref<HTMLDivElement>) => {
    const {
      arrow,
      arrowProps,
      children,
      eventHandlers,
      placement,
      style,
      zIndex,
      ...innerProps
    } = props
    const { closeModal } = useContext(ModalContext)
    const focusRef = useFocusTrap()
    // workaround for react-popper -caused error:
    // `NaN` is an invalid value for the `left` css style property
    if (Number.isNaN(arrowProps.style.left as number)) {
      delete arrowProps.style.left
    }
    if (Number.isNaN(arrowProps.style.top as number)) {
      delete arrowProps.style.top
    }

    return (
      <Outer ref={ref} zIndex={zIndex} style={style} {...eventHandlers}>
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
        >
          <Inner {...innerProps} tabIndex={-1} ref={focusRef}>
            {children}
            {arrow !== false && (
              <OverlaySurfaceArrow
                data-placement={placement}
                {...innerProps}
                {...arrowProps}
              />
            )}
          </Inner>
        </HotKeys>
      </Outer>
    )
  }
)

OverlaySurface.displayName = 'OverlaySurface'

const Outer = styled.div<{ zIndex?: number }>`
  ${reset};
  animation: ${fadeIn} 0.2s linear;
  overflow: visible;
  padding: ${props => props.theme.space.xsmall};
  z-index: ${props => props.zIndex};
`

const Inner = styled.div<SurfaceStyleProps>`
  ${reset}
  ${border}
  ${boxShadow}
  ${color}

  &:focus {
    outline: none;
  }
`
