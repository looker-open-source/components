import * as React from 'react'
import { Styles } from 'styled-components'
import { styled, Theme } from '../../style'
import { Box, BoxProps } from '../Box'

export interface ModalSurfaceProps extends BoxProps<HTMLDivElement> {
  theme: Theme
}

export const ModalSurface: React.SFC<ModalSurfaceProps> = ({
  children,
  className,
  style,
  width,
  theme,
  ...props
}) => (
  <TransitionTimers
    bg={theme.components.Modal.surface.backgroundColor}
    boxShadow={theme.shadows[3]}
    className={className}
    display="flex"
    flexDirection="column"
    maxWidth="100%"
    position="absolute"
    width={width}
    surfaceStyle={style}
    {...props}
  >
    {children}
  </TransitionTimers>
)

interface SurfaceInternalProps extends BoxProps<HTMLElement> {
  surfaceStyle?: React.CSSProperties
}

const SurfaceFactory = (props: SurfaceInternalProps) => {
  const { surfaceStyle, ref, ...boxProps } = props
  return <Box {...boxProps} ref={ref} />
}

const TransitionTimers = styled(SurfaceFactory)<SurfaceInternalProps>`
  /* stylelint-disable */
  transition: transform ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease},
    opacity ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease};

  ${props => props.surfaceStyle as Styles};
`
