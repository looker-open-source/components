import {
  CompatibleHTMLProps,
  FlexboxProps,
  flexbox,
} from 'looker-design-tokens'
import styled, { css } from 'styled-components'
import { LayoutComponentProps, layoutCSS } from '../Layout/layout'

export interface CardProps
  extends CompatibleHTMLProps<HTMLElement>,
    FlexboxProps,
    LayoutComponentProps {
  /**
   * Show card with a BoxShadow applied
   * @default true
   */
  raised?: boolean
}

const cardTransition = () => css`
  ${props =>
    `${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`}
`

const raised = (props: CardProps) =>
  props.raised &&
  css`
    box-shadow: ${props => props.theme.shadows[1]};

    &:hover {
      box-shadow: ${props => props.theme.shadows[2]};
    }
  `

export const Card = styled.div<CardProps>`
  ${layoutCSS}
  ${flexbox}

  transition: border ${cardTransition}, box-shadow ${cardTransition};

  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal400};
  }

  ${raised}
`

Card.defaultProps = {
  bg: 'palette.white',
  border: '1px solid',
  borderColor: 'palette.charcoal300',
  borderRadius: 'medium',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minWidth: '200px',
  overflow: 'hidden',
  raised: true,
}
