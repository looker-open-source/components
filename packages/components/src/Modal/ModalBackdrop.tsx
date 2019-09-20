import { rgba } from 'polished'
import React, { FunctionComponent } from 'react'
import styled, { CSSObject, StyledComponent } from 'styled-components'
import omit from 'lodash/omit'
import { Box, BoxProps } from '../Box'
import { CustomizableModalAttributes } from './Modal'

export interface ModalBackdropProps extends Omit<BoxProps<HTMLElement>, 'as'> {
  style?: CSSObject
  className?: string
  visible?: boolean
  inlineStyle?: CSSObject
}

export type ModalBackdropComponentType = FunctionComponent<ModalBackdropProps>
export type StyledModalBackdropComponentType = StyledComponent<
  ModalBackdropComponentType,
  ModalBackdropProps
>

export const ModalBackdrop: ModalBackdropComponentType = ({
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

//
// All of this  drama is to not auto-spread `inlineStyle` onto Box and cause React run-time warnings
//
const BackdropFactory: ModalBackdropComponentType = (
  props: ModalBackdropProps
) => <Box {...omit(props, 'inlineStyle')} />

// Backdrop styles are applied here (rather than using the inline `style={...}` prop) to ensure that
// transitions will still apply to backdrop
const Backdrop: StyledModalBackdropComponentType = styled<
  ModalBackdropComponentType
>(BackdropFactory)`
  cursor: default;
  transition: opacity ${props => props.theme.transitions.durationSimple};
  ${props => props.inlineStyle};

  &.entering,
  &.exiting {
    opacity: 0.01;
  }
`

export interface BackdropStyles {
  backgroundColor: string
  opacity?: number
}
