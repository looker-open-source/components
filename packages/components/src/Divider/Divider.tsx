import React, { FunctionComponent, Ref } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { ThemedProps } from '@looker/design-tokens'
import omit from 'lodash/omit'
import { Box, BoxProps } from '../Layout/Box'

export interface DividerProps
  extends Omit<BoxProps<HTMLDivElement>, 'color' | 'size' | 'as'> {
  size?: string | number
  customColor?: string
  appearance?: 'light' | 'dark' | 'onDark'
}

export type ThemedDividerProps = ThemedProps<DividerProps>
export type DividerComponentType = FunctionComponent<ThemedDividerProps>
export type StyledDividerComponentType = StyledComponent<
  DividerComponentType,
  DividerProps
>

const dividerAppearance = (props: ThemedDividerProps) => {
  switch (props.appearance) {
    case 'light':
      return css`
        background: ${props.theme.colors.palette.charcoal200};
      `
    case 'dark':
      return css`
        background: ${props.theme.colors.palette.charcoal400};
      `
    case 'onDark':
      return css`
        background: ${props.theme.colors.palette.charcoal500};
      `
    default:
      return false
  }
}

const InternalDivider: DividerComponentType = props => {
  const { size, customColor, ...boxProps } = props

  return (
    <Box
      height={size || '1px'}
      bg={customColor || 'palette.charcoal300'}
      {...omit(boxProps, ['appearance'])}
    />
  )
}

const DividerFactory = React.forwardRef<
  StyledDividerComponentType,
  ThemedDividerProps
>((props: ThemedDividerProps, ref: Ref<StyledDividerComponentType>) => (
  <InternalDivider ref={ref} {...props} />
))

/** @component */
export const Divider: StyledDividerComponentType = styled<DividerComponentType>(
  DividerFactory
)`
  ${props => dividerAppearance(props)};
`
