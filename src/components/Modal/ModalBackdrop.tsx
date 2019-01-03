import * as React from 'react'
import { Styles } from 'styled-components'
import { styled, Theme, withTheme } from '../../style'
import { Box, BoxProps } from '../Box'

export interface BackdropProps {
  close: () => void
  style?: React.CSSProperties
  theme: Theme
  className?: string
}

const Internal: React.SFC<BackdropProps> = ({
  close,
  style,
  theme,
  className,
}) => (
  <Backdrop
    className={className}
    bg={theme.components.Overlay.backdrop.backgroundColor}
    height="100%"
    onClick={close}
    opacity={theme.components.Overlay.backdrop.opacity}
    position="fixed"
    // style={{ cursor: 'pointer', ...style }}
    backdropStyle={style}
    width="100%"
  />
)

export const ModalBackdrop = withTheme(Internal)

interface BackdropInternalProps extends BoxProps<HTMLElement> {
  backdropStyle?: React.CSSProperties
}

const BackdropFactory = (props: BackdropInternalProps) => {
  const { backdropStyle, ref, ...boxProps } = props
  return <Box {...boxProps} ref={ref} />
}

const Backdrop = styled(BackdropFactory)<BackdropInternalProps>`
  transition: opacity ${props => props.theme.transitions.durationSimple};
  cursor: pointer;

  ${props => props.backdropStyle as Styles};

  &.entering,
  &.exiting {
    opacity: 0.01;
  }

  &.exited {
    opacity: ${props => props.theme.components.Overlay.backdrop.opacity};
  }
`
