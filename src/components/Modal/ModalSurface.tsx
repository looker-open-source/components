import FocusTrap from 'focus-trap-react'
import * as React from 'react'
import { Styles } from 'styled-components'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { CustomizableModalAttributes } from './Modal'

export interface ModalSurfaceProps extends BoxProps<HTMLDivElement> {
  animationState?: string
}

export const ModalSurface: React.FC<ModalSurfaceProps> = ({
  style,
  className,
  ...props
}) => {
  return (
    <FocusTrap
      focusTrapOptions={{
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
      }}
    >
      <TransitionTimers
        bg={CustomizableModalAttributes.surface.backgroundColor}
        display="flex"
        className={`surface-overflow ${className}`}
        flexDirection="column"
        maxWidth="100%"
        position="absolute"
        tabIndex={-1}
        surfaceStyle={style}
        focusStyle={{ outline: 'none' }}
        {...props}
      />
    </FocusTrap>
  )
}

interface SurfaceInternalProps extends BoxProps<HTMLElement> {
  surfaceStyle?: React.CSSProperties
}

const SurfaceFactory = (props: SurfaceInternalProps) => {
  const { surfaceStyle, ref, ...boxProps } = props
  return <Box {...boxProps} ref={ref} />
}

const TransitionTimers = styled(SurfaceFactory)<SurfaceInternalProps>`
  /* stylelint-disable */
  box-shadow: ${props => props.theme.shadows[3]};

  transition: transform ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease},
    opacity ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease};

  ${props => props.surfaceStyle as Styles};
`
