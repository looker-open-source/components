import React, { Children, cloneElement, FC } from 'react'
import styled from 'styled-components'
import { SpaceProps, space, reset } from 'looker-design-tokens'
import omit from 'lodash/omit'

export interface TabPanelsProps extends SpaceProps {
  children: JSX.Element[]
  selectedIndex?: number
  onSelectTab?: (index: number) => void
}

export const TabPanels: FC<TabPanelsProps> = ({
  children,
  selectedIndex,
  ...props
}) => {
  const spaceProps = omit(props, 'onSelectTab')

  const clonedChildren = Children.map(
    children,
    (child: JSX.Element, index: number) => {
      return cloneElement(child, {
        selected: index === selectedIndex,
      })
    }
  )

  return <Layout {...spaceProps}>{clonedChildren}</Layout>
}

const Layout = styled.div<SpaceProps>`
  ${reset}
  ${space}
`

Layout.defaultProps = { pt: 'large' }
