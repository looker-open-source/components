import * as React from 'react'
import { fadeIn, styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { OverlayContentProps } from './Overlay'

const PopoverArrow = styled.div`
  position: absolute;

  &:before {
    content: '';
    margin: auto;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${p => p.theme.colors.palette.white};
    border-bottom: 1px solid ${p => p.theme.colors.palette.charcoal200};
    border-right: 1px solid ${p => p.theme.colors.palette.charcoal200};
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

const PopoverContainer = styled<BoxProps>(Box)`
  animation: ${fadeIn} 0.2s linear;
`

export const popoverContent = (content: React.ReactNode) => {
  return ({ ...props }: OverlayContentProps) => (
    <PopoverContainer
      p="small"
      m="small"
      bg="palette.white"
      borderRadius="4"
      border="1px solid"
      borderColor="palette.charcoal200"
      boxShadow="3"
    >
      {content}
      <PopoverArrow
        innerRef={props.arrowProps.ref}
        style={props.arrowProps.style}
        data-placement={props.placement}
      />
    </PopoverContainer>
  )
}
