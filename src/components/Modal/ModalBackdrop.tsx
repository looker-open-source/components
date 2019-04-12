import { rgba } from 'polished'
import * as React from 'react'
import { Styles } from 'styled-components'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { CustomizableModalAttributes } from './Modal'

export interface ModalBackdropProps extends BoxProps<HTMLElement> {
  style?: React.CSSProperties
  className?: string
}

export const ModalBackdrop: React.SFC<ModalBackdropProps> = ({
  className,
  onClick,
  style,
}) => {
  return (
    <Backdrop
      onClick={onClick}
      className={className}
      bg={rgba(
        CustomizableModalAttributes.backdrop.backgroundColor,
        CustomizableModalAttributes.backdrop.opacity
      )}
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      right="0"
      backdropStyles={style}
    />
  )
}

interface BackdropStylesProps extends ModalBackdropProps {
  backdropStyles?: React.CSSProperties
}

//
// All of this  drama is to not auto-spread `backdropStyles` onto Box and cause React run-time warnings
//
const BackdropFactory = (props: BackdropStylesProps) => {
  const { backdropStyles, ref, ...boxProps } = props
  return <Box {...boxProps} ref={ref} />
}

// Backdrop styles are applied here (rather than using the inline `style={...}` prop) to ensure that
// transitions will still apply to backdrop
const Backdrop = styled(BackdropFactory)`
  transition: opacity ${props => props.theme.transitions.durationSimple};
  cursor: pointer;
  ${props => props.backdropStyles as Styles};

  &.entering,
  &.exiting {
    opacity: 0.01;
  }
`

export interface BackdropStyles {
  backgroundColor: string
  opacity?: number
}
