import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent, withTheme } from 'styled-components'
import { ThemedProps } from '@looker/design-tokens'
import { Box, BoxProps } from '../Layout/Box'

export interface CardProps extends Omit<BoxProps<HTMLDivElement>, 'as'> {
  raised?: boolean
}

export type CardComponentType = FunctionComponent<ThemedProps<CardProps>>
export type StyledCardComponentType = StyledComponent<
  CardComponentType,
  CardProps
>

const InternalCard: CardComponentType = (props: ThemedProps<CardProps>) => (
  <Box
    bg="palette.white"
    borderRadius={props.theme.radii.medium}
    border={`solid 1px ${props.theme.colors.semanticColors.primary.borderColor}`}
    display="flex"
    flexDirection="column"
    height="100%"
    min-width="200px"
    overflow="hidden"
    {...omit(props, ['raised'])}
  >
    {props.children}
  </Box>
)

const InternalCardThemed = withTheme(InternalCard)

const CardFactory = React.forwardRef<StyledCardComponentType, CardProps>(
  (props: CardProps, ref: Ref<StyledCardComponentType>) => (
    <InternalCardThemed ref={ref} {...props} />
  )
)

// prettier-ignore
export const Card: StyledCardComponentType = styled<CardComponentType>(
  CardFactory
)`
  box-shadow: ${props => (props.raised ? props.theme.shadows[1] : 'none')};
  transition: border
    ${props => props.theme.transitions.durationQuick}
    ${props => props.theme.easings.ease},
    box-shadow
    ${props => props.theme.transitions.durationQuick}
    ${props => props.theme.easings.ease};
  &:hover {
    border-color: ${props => props.theme.colors.palette.charcoal300};
    box-shadow: ${props => (props.raised ? props.theme.shadows[2] : 'none')};
  }
`
