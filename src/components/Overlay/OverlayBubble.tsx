import { Placement } from 'popper.js'
import * as React from 'react'
import { PopperArrowProps } from 'react-popper'
import { fadeIn, styled, Theme } from '../../style'
import { Box, BoxProps } from '../Box'

export interface OverlayBubbleArrowProps {
  backgroundColor: string
  border: React.ReactText
  borderColor: React.ReactText
}

const OverlayBubbleArrow = styled.div<OverlayBubbleArrowProps>`
  position: absolute;

  &:before {
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
    &:before {
      transform: rotate(45deg);
    }
  }

  &[data-placement*='right'] {
    left: 0.25rem;
    margin: 1rem 0;
    &:before {
      transform: rotate(135deg);
    }
  }

  &[data-placement*='bottom'] {
    top: 0.25rem;
    margin: 0 1rem;
    &:before {
      transform: rotate(225deg);
    }
  }

  &[data-placement*='left'] {
    right: 0.25rem;
    margin: 1rem 0;
    &:before {
      transform: rotate(315deg);
    }
  }
`

const OverlayBubbleContainer = styled<BoxProps<HTMLDivElement>>(Box)`
  animation: ${fadeIn} 0.2s linear;
`

export interface OverlayBubbleStyleProps extends OverlayBubbleArrowProps {
  borderColor: string
  borderRadius: string
  boxShadow: string
  color: string
  padding: keyof Theme['space']
}

export interface OverlayBubbleProps extends OverlayBubbleStyleProps {
  arrowProps: PopperArrowProps
  placement: Placement
}

export const OverlayBubble: React.SFC<OverlayBubbleProps> = ({ ...props }) => (
  <OverlayBubbleContainer
    p={props.padding}
    m="small"
    bg={props.backgroundColor}
    borderRadius={props.borderRadius}
    border={props.border}
    borderColor={props.borderColor}
    boxShadow={props.boxShadow}
    color={props.color}
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
