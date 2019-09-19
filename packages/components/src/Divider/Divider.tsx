import React, { FunctionComponent, Ref } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { ThemedProps } from '@looker/design-tokens'
import { Box, BoxPropsWithout } from '../Box'

export interface DividerProps
  extends BoxPropsWithout<HTMLDivElement, 'color' | 'size'> {
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
  const { size, customColor, appearance, ...boxProps } = props

  return (
    <Box
      height={size || '1px'}
      bg={customColor || 'palette.charcoal300'}
      {...boxProps}
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
