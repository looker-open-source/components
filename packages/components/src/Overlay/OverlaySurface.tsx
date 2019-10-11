import {
  reset,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  fadeIn,
} from '@looker/design-tokens'
import { Placement } from 'popper.js'
import React, { CSSProperties, forwardRef, Ref, useContext } from 'react'
import { HotKeys } from 'react-hotkeys'
import { PopperArrowProps } from 'react-popper'
import styled from 'styled-components'
import { ModalContext } from '../Modal'
import { OverlaySurfaceArrow } from './OverlaySurfaceArrow'
import { useFocusTrap } from './useFocusTrap.hook'

interface SurfaceStyleProps extends BorderProps, BoxShadowProps {
  color?: string
  backgroundColor?: string
  border?: string
  borderColor?: string
}

export interface OverlaySurfaceProps extends SurfaceStyleProps {
  arrow?: boolean
  arrowProps: PopperArrowProps
  children: React.ReactNode
  eventHandlers?: React.DOMAttributes<{}>
  placement: Placement
  style?: CSSProperties
  zIndex?: number
}

export const OverlaySurface = forwardRef(
  (props: OverlaySurfaceProps, ref: Ref<HTMLDivElement>) => {
    const { children, eventHandlers, style, zIndex, ...innerProps } = props
    const { closeModal } = useContext(ModalContext)
    const focusRef = useFocusTrap()

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
            {props.arrow !== false && (
              <OverlaySurfaceArrow
                backgroundColor={props.backgroundColor}
                border={props.border}
                borderColor={props.borderColor}
                data-placement={props.placement}
                ref={props.arrowProps.ref}
                style={props.arrowProps.style}
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
