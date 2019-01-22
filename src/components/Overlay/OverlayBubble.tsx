import { Placement } from 'popper.js'
import * as React from 'react'
import { PopperArrowProps } from 'react-popper'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export interface OverlayBubbleArrowProps {
  backgroundColor: string
  border: React.ReactText
  borderColor: React.ReactText
}

const OverlayBubbleArrow = styled.div<OverlayBubbleArrowProps>`
  position: absolute;

  &::before {
    content: '';
    margin: auto;
    display: block;
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

interface OverlayBubbleContainerProps extends BoxProps<HTMLDivElement> {
  animation?: string
}

const OverlayBubbleContainer = styled<OverlayBubbleContainerProps>(
  ({ animation, ...props }) => <Box {...props} />
)`
  animation: ${props => props.animation};
`

export interface OverlayBubbleStyleProps extends OverlayBubbleArrowProps {
  animation?: string
  borderColor: string
  borderRadius: string
  boxShadow: string
  color: string
}

export interface OverlayBubbleProps extends OverlayBubbleStyleProps {
  arrowProps: PopperArrowProps
  placement: Placement
}

export const OverlayBubble: React.SFC<OverlayBubbleProps> = ({ ...props }) => (
  <OverlayBubbleContainer
    m="xsmall"
    bg={props.backgroundColor}
    borderRadius={props.borderRadius}
    border={props.border}
    borderColor={props.borderColor}
    boxShadow={props.boxShadow}
    color={props.color}
    animation={props.animation}
  >
    {props.children}
    <OverlayBubbleArrow
      backgroundColor={props.backgroundColor}
      border={props.border}
      borderColor={props.borderColor}
      innerRef={props.arrowProps.ref}
      style={props.arrowProps.style}
      data-placement={props.placement}
    />
  </OverlayBubbleContainer>
)
