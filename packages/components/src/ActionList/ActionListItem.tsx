import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import React, { createContext, ReactNode, RefObject, useRef } from 'react'

export interface ActionListContextProps {
  actionListItemRef: RefObject<HTMLElement> | undefined
}

export const ActionListItemContext = createContext<ActionListContextProps>({
  actionListItemRef: undefined,
})

export interface ActionListItemProps
  extends BorderProps,
    ColorProps,
    SpaceProps {
  children?: ReactNode
  className?: string
}

const ActionListItemInternal = (props: ActionListItemProps) => {
  const actionListItemRef = useRef<HTMLDivElement>(null)
  const context = {
    actionListItemRef,
  }

  return (
    <ActionListItemContext.Provider value={context}>
      <div className={props.className} ref={actionListItemRef} tabIndex={0}>
        {props.children}
      </div>
    </ActionListItemContext.Provider>
  )
}

export const ActionListItem = styled(ActionListItemInternal)`
  ${border}
  ${space}
  ${color}

  display: flex;
`

ActionListItem.defaultProps = {
  backgroundColor: 'palette.white',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
}
