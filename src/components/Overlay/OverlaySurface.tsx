import { Placement } from 'popper.js'
import * as React from 'react'
import { PopperArrowProps } from 'react-popper'
import { styled } from '../../style'
import { Box } from '../Box'
import { ModalSurfaceStyleProps } from '../Modal'

export interface OverlaySurfaceArrowProps {
  backgroundColor: string
  border: React.ReactText
  borderColor: React.ReactText
}

export interface OverlaySurfaceProps extends ModalSurfaceStyleProps {
  arrow?: boolean
  arrowProps: PopperArrowProps
  children: React.ReactNode
  eventHandlers?: React.DOMAttributes<{}>
  placement: Placement
  style?: React.CSSProperties
  surfaceRef?: React.RefObject<HTMLElement>
}

const OverlaySurfaceInternal: React.FC<OverlaySurfaceProps> = ({
  animation,
  children,
  surfaceRef,
  style,
  ...props
}) => (
  <Box
    py="xsmall"
    overflow="visible"
    className="surface-overflow"
    innerRef={surfaceRef}
    style={{ ...style, animation }}
    {...props.eventHandlers}
  >
    <Box
      bg={props.backgroundColor}
      borderRadius={props.borderRadius}
      border={props.border}
      borderColor={props.borderColor}
      boxShadow={props.boxShadow}
      color={props.color}
    >
      <Box tabIndex={0} focusStyle={{ outline: 'none' }}>
        {children}
      </Box>

      {props.arrow !== false && (
        <OverlaySurfaceArrow
          backgroundColor={props.backgroundColor}
          border={props.border}
          borderColor={props.borderColor}
          data-placement={props.placement}
          innerRef={props.arrowProps.ref}
          style={props.arrowProps.style}
        />
      )}
    </Box>
  </Box>
)

export const OverlaySurface = React.forwardRef(
  (props: OverlaySurfaceProps, ref) => (
    <OverlaySurfaceInternal
      surfaceRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
)

const OverlaySurfaceArrow = styled.div<OverlaySurfaceArrowProps>`
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
