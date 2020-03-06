import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'

interface ActionListItemLayoutProps extends CompatibleHTMLProps<HTMLElement> {
  secondary?: ReactNode
}

export const ActionListRowColumns = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const ActionListRowSupplementary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
`

export const ActionListRow = forwardRef(
  (props: ActionListItemLayoutProps, ref: Ref<HTMLDivElement>) => {
    const { className, children, secondary } = props
    return (
      <div ref={ref} className={className}>
        <ActionListRowColumns>{children}</ActionListRowColumns>
        <ActionListRowSupplementary>{secondary}</ActionListRowSupplementary>
      </div>
    )
  }
)

ActionListRow.displayName = 'ActionListRow'
