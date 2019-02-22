import FocusTrap from 'focus-trap-react'
import * as React from 'react'
import ScrollLock from 'react-scrolllock'
import { Styles } from 'styled-components'
import { styled, Theme } from '../../style'
import { Box, BoxProps } from '../Box'
import { CustomizableModalAttributes } from './Modal'

export interface ModalSurfaceProps extends BoxProps<HTMLDivElement> {
  theme: Theme
  animationState?: string
}

export const ModalSurface: React.SFC<ModalSurfaceProps> = ({
  children,
  className,
  style,

  width,
  theme,
  ...props
}) => {
  return (
    <ScrollLock>
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        <TransitionTimers
          bg={CustomizableModalAttributes.surface.backgroundColor}
          boxShadow={theme.shadows[3]}
          className={className}
          display="flex"
          flexDirection="column"
          maxWidth="100%"
          position="absolute"
          width={width}
          tabIndex={0}
          surfaceStyle={style}
          focusStyle={{ outline: 'none' }}
          zIndex={CustomizableModalAttributes.zIndex + 1}
          {...props}
        >
          {children}
        </TransitionTimers>
      </FocusTrap>
    </ScrollLock>
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
  transition: transform ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease},
    opacity ${props => props.theme.transitions.durationModerate}
      ${props => props.theme.easings.ease};

  ${props => props.surfaceStyle as Styles};
`
