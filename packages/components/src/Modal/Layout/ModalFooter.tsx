import React, { FC } from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps } from 'looker-design-tokens/src'
import { SpaceProps, space } from 'styled-system'

export interface ModalFooterProps extends CompatibleHTMLProps<HTMLDivElement> {
  /**
   * Secondary content to place in the footer
   */
  secondary?: React.ReactNode
}

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  secondary,
  ...props
}) => {
  return (
    <Layout {...props}>
      <SpaceChildren>{children}</SpaceChildren>
      {secondary && <SpaceChildren mr="auto">{secondary}</SpaceChildren>}
    </Layout>
  )
}

const Layout = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  padding: ${props => props.theme.space.large}
    calc(${p => p.theme.space.xlarge} - ${p => p.theme.space.xsmall});
  /**
    * Subtract margin placed on children from the horizontal padding applied to the component
    * so that the content is properly aligned.
    * padding is: vertical: large, horizontal: calc(xlarge - xsmall)
    **/
`

const SpaceChildren = styled.div<SpaceProps>`
  ${space};
  display: flex;
  flex-direction: row-reverse;

  & > * {
    margin-right: ${props => props.theme.space.xsmall};
    margin-left: ${props => props.theme.space.xsmall};
  }
`
