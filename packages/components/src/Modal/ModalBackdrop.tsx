import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import {
  OpacityProps,
  // opacity,
  BackgroundColorProps,
  // backgroundColor,
  color,
} from 'styled-system'
import styled, { CSSObject } from 'styled-components'

export interface ModalBackdropProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BackgroundColorProps,
    OpacityProps {
  visible?: boolean
  inlineStyle?: CSSObject
}

// Backdrop styles are applied here (rather than using the inline `style={...}` prop) to ensure that
// transitions will still apply to backdrop
export const ModalBackdrop = styled.div.attrs((props: ModalBackdropProps) => ({
  backgroundColor: props.visible ? props.backgroundColor : 'transparent',
}))<ModalBackdropProps>`
  ${reset}

  ${color}
  cursor: default;
  opacity: ${props => props.opacity || 0.4};
  transition: opacity ${props => props.theme.transitions.durationSimple};
  ${props => props.inlineStyle};

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;

  &.entering,
  &.exiting {
    opacity: 0.01;
  }
`

ModalBackdrop.defaultProps = {
  backgroundColor: 'palette.charcoal200',
  opacity: 0.6,
  visible: true,
}
