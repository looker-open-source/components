import * as React from 'react'
import { styled, withTheme } from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxProps } from '../Box'

export interface CardProps extends BoxProps<HTMLDivElement> {
  raised?: boolean
}

const InternalCard: React.SFC<ThemedProps<CardProps>> = ({
  raised,
  ...props
}) => (
  <Box
    bg="palette.white"
    borderRadius={props.theme.radii.medium}
    border={`solid 1px ${
      props.theme.colors.semanticColors.primary.borderColor
    }`}
    display="flex"
    flexDirection="column"
    height="100%"
    min-width="200px"
    overflow="hidden"
    {...props}
  >
    {props.children}
  </Box>
)

export const Card = styled<CardProps>(withTheme(InternalCard))`
  box-shadow: ${props => (props.raised ? props.theme.shadows[1] : 'none')};
  transition: border ${props => props.theme.transitions.durationQuick}
      ${props => props.theme.easings.ease},
    box-shadow ${props => props.theme.transitions.durationQuick}
      ${props => props.theme.easings.ease};
  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal300};
    box-shadow: ${props => (props.raised ? props.theme.shadows[2] : 'none')};
  }
`
