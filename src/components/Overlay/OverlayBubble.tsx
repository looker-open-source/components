import FocusTrap from 'focus-trap-react'
import { Placement } from 'popper.js'
import * as React from 'react'
import { PopperArrowProps } from 'react-popper'
import ScrollLock from 'react-scrolllock'
import { styled } from '../../style'
import { Box } from '../Box'
import { CustomizableOverlayAttributes } from '../Overlay'

export interface OverlayBubbleArrowProps {
  backgroundColor: string
  border: React.ReactText
  borderColor: React.ReactText
}

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
  lockWindow?: boolean

  innerRef?: React.RefObject<HTMLElement>
  eventHandlers?: React.DOMAttributes<{}>

  style?: React.CSSProperties
}

class OverlayBubbleInternal extends React.Component<OverlayBubbleProps> {
  public render() {
    const {
      animation,
      children,
      lockWindow,
      innerRef,
      style,
      ...props
    } = this.props

    const content = (
      <Box
        p="xsmall"
        overflow="visible"
        innerRef={innerRef}
        zIndex={CustomizableOverlayAttributes.zIndex + 1}
        style={{ ...style, animation }}
        {...this.props.eventHandlers}
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
            {lockWindow ? <ScrollLock>{children}</ScrollLock> : children}
          </Box>
          <OverlayBubbleArrow
            backgroundColor={props.backgroundColor}
            border={props.border}
            borderColor={props.borderColor}
            data-placement={props.placement}
            innerRef={props.arrowProps.ref}
            style={props.arrowProps.style}
          />
        </Box>
      </Box>
    )

    return lockWindow ? (
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        {content}
      </FocusTrap>
    ) : (
      content
    )
  }
}

export const OverlayBubble = React.forwardRef(
  (props: OverlayBubbleProps, ref) => (
    <OverlayBubbleInternal
      innerRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
)

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
