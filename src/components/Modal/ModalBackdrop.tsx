import * as React from 'react'
import { Styles } from 'styled-components'
import { styled, Theme, withTheme } from '../../style'
import { Box, BoxProps } from '../Box'
import { CustomizableOverlayAttributes } from '../Overlay'

export interface BackdropProps {
  close: () => void
  style?: React.CSSProperties
  theme: Theme
  className?: string
}

interface BackdropInternalProps extends BoxProps<HTMLElement> {
  backdropStyle?: React.CSSProperties
}

const Internal: React.SFC<BackdropProps> = ({ close, style, className }) => (
  <Backdrop
    className={className}
    bg={CustomizableOverlayAttributes.backdrop.backgroundColor}
    height="100%"
    onClick={close}
    opacity={CustomizableOverlayAttributes.backdrop.opacity}
    position="fixed"
    style={{ cursor: 'pointer', ...style }}
    backdropStyle={style}
    // opacity={CustomizableOverlayAttributes.backdrop.opacity}
    width="100%"
  />
)

export const ModalBackdrop = withTheme(Internal)

const BackdropFactory = (props: BackdropInternalProps) => {
  const { backdropStyle, ref, ...boxProps } = props
  return <Box {...boxProps} ref={ref} />
}

const Backdrop = styled(BackdropFactory)`
  transition: opacity ${props => props.theme.transitions.durationSimple};
  cursor: pointer;

  ${props => props.backdropStyle as Styles};

  &.entering,
  &.exiting {
    opacity: 0.01;
  }
`
