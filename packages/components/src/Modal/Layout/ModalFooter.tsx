import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ThemedProps } from '@looker/design-tokens'
import { Box, BoxProps } from '../../Box'

export interface ModalFooterProps extends BoxProps<HTMLDivElement> {
  /**
   * Content that will be placed inside the DialogHeader
   * @required
   */
  children: React.ReactNode

  /**
   * Secondary content to place in the footer
   */
  secondary?: React.ReactNode
  theme?: ThemedProps<any>
}

export type ModalFooterComponentType = FunctionComponent<ModalFooterProps>

export const ModalFooter: ModalFooterComponentType = ({
  children,
  secondary,
  ...props
}) => {
  /*
   * @TODO / Note: When chrome supports `flex-basis: fit-content` minHeight can be removed
   */
  return (
    <Layout
      alignItems="center"
      display="flex"
      is="footer"
      flexDirection="row-reverse"
      {...props}
    >
      <SpaceChildren flexDirection="row-reverse">{children}</SpaceChildren>
      {secondary && <SpaceChildren mr="auto">{secondary}</SpaceChildren>}
    </Layout>
  )
}

export type ThemedBoxProps = ThemedProps<BoxProps<HTMLElement>>
export type BoxComponentType = FunctionComponent<ThemedBoxProps>
export type StyledBoxComponentType = StyledComponent<
  BoxComponentType,
  ThemedBoxProps
>

// Subtract margin placed on children from the horizonal padding applied to the component
// so that the content is properly aligned.
// padding is: vertical: large, horizonal: calc(xlarge - xsmall)
const Layout: StyledBoxComponentType = styled<BoxComponentType>(Box)`
  padding: ${props => props.theme.space.large}
    calc(${p => p.theme.space.xlarge} - ${p => p.theme.space.xsmall});
`

const SpaceChildren: StyledBoxComponentType = styled<BoxComponentType>(Box)`
  display: flex;

  & > * {
    margin-right: ${props => props.theme.space.xsmall};
    margin-left: ${props => props.theme.space.xsmall};
  }
`
