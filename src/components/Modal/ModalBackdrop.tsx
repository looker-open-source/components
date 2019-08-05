import { rgba } from 'polished'
import * as React from 'react'
import { Styles } from 'styled-components'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { CustomizableModalAttributes } from './Modal'

export interface ModalBackdropProps extends BoxProps<HTMLElement> {
  style?: React.CSSProperties
  className?: string
  visible?: boolean
}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  className,
  onClick,
  style,
  visible = true,
}) => {
  const visibilityProps = visible
    ? {
        bg: rgba(
          CustomizableModalAttributes.backdrop.backgroundColor,
          CustomizableModalAttributes.backdrop.opacity
        ),
        inlineStyle: style,
      }
    : { bg: 'transparent' }

  return (
    <Backdrop
      inlineStyle={style}
      bottom="0"
      className={className}
      left="0"
      onClick={onClick}
      position="fixed"
      right="0"
      top="0"
      {...visibilityProps}
    />
  )
}

interface BackdropStylesProps extends ModalBackdropProps {
  inlineStyle?: React.CSSProperties
}

//
// All of this  drama is to not auto-spread `inlineStyle` onto Box and cause React run-time warnings
//
const BackdropFactory = (props: BackdropStylesProps) => {
  const { inlineStyle, ref, ...boxProps } = props
  return <Box {...boxProps} innerRef={ref} />
}

// Backdrop styles are applied here (rather than using the inline `style={...}` prop) to ensure that
// transitions will still apply to backdrop
const Backdrop = styled(BackdropFactory)`
  cursor: default;
  transition: opacity ${props => props.theme.transitions.durationSimple};
  ${props => props.inlineStyle as Styles};

  &.entering,
  &.exiting {
    opacity: 0.01;
  }
`

export interface BackdropStyles {
  backgroundColor: string
  opacity?: number
}
