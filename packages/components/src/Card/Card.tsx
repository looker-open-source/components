import {
  CompatibleHTMLProps,
  ColorProps,
  color,
  layout,
  LayoutProps,
  position,
  PositionProps,
  reset,
  space,
  SpaceProps,
} from 'looker-design-tokens'
import styled, { css } from 'styled-components'

export interface CardProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    ColorProps,
    PositionProps,
    LayoutProps,
    SpaceProps {
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
  ${reset}
  ${layout}
  ${position}
  ${space}
  ${color}

  background: ${props => props.theme.colors.palette.white};
  border: solid 1px ${props =>
    props.theme.colors.semanticColors.primary.borderColor};
  border-radius: ${props => props.theme.radii.medium};
  flex-direction: column;
  transition: border ${cardTransition}, box-shadow ${cardTransition};

  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal300};
  }

  ${raised}
`

Card.defaultProps = {
  display: 'flex',
  height: '100%',
  minWidth: '200px',
  overflow: 'hidden',
  raised: true,
}
