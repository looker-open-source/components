import { Placement } from 'popper.js'
import React, { CSSProperties, FunctionComponent, Ref } from 'react'
import { HotKeys } from 'react-hotkeys'
import { PopperArrowProps } from 'react-popper'
import styled, {
  FlattenSimpleInterpolation,
  StyledComponent,
} from 'styled-components'
import { Box } from '../Layout/Box'
import { ModalContext } from '../Modal'

export interface SurfaceStyleProps {
  animation?: FlattenSimpleInterpolation
  backgroundColor: string
  border: string
  borderColor: string
  borderRadius: string
  boxShadow: string
  color: string
}

export interface OverlaySurfaceProps extends SurfaceStyleProps {
  arrow?: boolean
  arrowProps: PopperArrowProps
  children: React.ReactNode
  eventHandlers?: React.DOMAttributes<{}>
  placement: Placement
  style?: CSSProperties
  surfaceRef?: any
  zIndex?: number
}

type ComponentType = FunctionComponent<OverlaySurfaceProps>
type StyledComponentType = StyledComponent<
  FunctionComponent,
  OverlaySurfaceProps
>

const OverlaySurfaceInternal: ComponentType = ({
  animation,
  children,
  surfaceRef,
  style,
  zIndex,
  ...props
}) => {
  const { closeModal } = React.useContext(ModalContext)

  return (
    <Box
      p="xsmall"
      overflow="visible"
      ref={surfaceRef}
      style={{ ...style }}
      zIndex={zIndex}
      animation={animation}
      {...props.eventHandlers}
    >
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
        <Box
          bg={props.backgroundColor}
          borderRadius={props.borderRadius}
          border={props.border}
          borderColor={props.borderColor}
          boxShadow={props.boxShadow}
          color={props.color}
          focusStyle={{ outline: 'none' }}
          tabIndex={0}
        >
          {children}

          {props.arrow !== false && (
            <OverlaySurfaceArrow
              backgroundColor={props.backgroundColor}
              border={props.border}
              borderColor={props.borderColor}
              data-placement={props.placement}
              ref={props.arrowProps.ref as any}
              style={props.arrowProps.style}
            />
          )}
        </Box>
      </HotKeys>
    </Box>
  )
}

export const OverlaySurface = React.forwardRef<
  StyledComponentType,
  OverlaySurfaceProps
>((props: OverlaySurfaceProps, ref: Ref<StyledComponentType>) => (
  <OverlaySurfaceInternal surfaceRef={ref} {...props} />
))

interface SurfaceArrowProps extends PopperArrowProps {
  className?: string
  backgroundColor: string
  border: string
  borderColor: string
  ['data-placement']: string
}

type SurfaceArrowComponentType = FunctionComponent<SurfaceArrowProps>

const OverlaySurfaceArrowFactory = React.forwardRef<
  SurfaceArrowComponentType,
  SurfaceArrowProps
>((props, ref) => {
  const { className, style } = props
  return (
    <Box
      ref={ref}
      className={className}
      style={style}
      data-placement={props['data-placement']}
    />
  )
})

const OverlaySurfaceArrow = styled(OverlaySurfaceArrowFactory)`
  position: absolute;

  &::before {
    content: '';
    display: block;
    margin: auto;
    width: 0.5rem;
    height: 0.5rem;
    background: ${props => props.backgroundColor};
    border-bottom: ${props => props.border} ${props => props.borderColor};
    border-right: ${props => props.border} ${props => props.borderColor};
  }

  &[data-placement*='top'] {
    bottom: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(45deg);
    }
  }

  &[data-placement*='right'] {
    left: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(135deg);
    }
  }

  &[data-placement*='bottom'] {
    top: 0.25rem;
    margin: 0 1rem;
    &::before {
      transform: rotate(225deg);
    }
  }

  &[data-placement*='left'] {
    right: 0.25rem;
    margin: 1rem 0;
    &::before {
      transform: rotate(315deg);
    }
  }
`
