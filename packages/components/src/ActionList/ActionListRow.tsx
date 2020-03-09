import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'

export interface ActionListItemLayoutProps
  extends CompatibleHTMLProps<HTMLElement> {
  secondary?: ReactNode
}

export const ActionListRowColumns = styled.div``

const ActionListRowSupplementary = styled.div``

const ActionListRowLayout = forwardRef(
  (props: ActionListItemLayoutProps, ref: Ref<HTMLDivElement>) => {
    const {
      className,
      children,
      secondary,
      onClick,
      onKeyDown,
      tabIndex,
    } = props
    return (
      <div
        ref={ref}
        className={className}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
      >
        <ActionListRowColumns>{children}</ActionListRowColumns>
        <ActionListRowSupplementary>{secondary}</ActionListRowSupplementary>
      </div>
    )
  }
)

ActionListRowLayout.displayName = 'ActionListRowLayout'

export const ActionListRow = styled(ActionListRowLayout)`
  display: flex;

  ${ActionListRowColumns} {
    flex-grow: 1;
  }

  ${ActionListRowSupplementary} {
    flex-basis: 2.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
`
