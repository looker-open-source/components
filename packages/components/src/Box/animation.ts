import { AnimationProperty } from 'csstype'
import { css } from 'styled-components'

export interface AnimationProps {
  animation?: AnimationProperty
}

export const animation = (props: AnimationProps) =>
  css`
    animation: ${props.animation};
  `
