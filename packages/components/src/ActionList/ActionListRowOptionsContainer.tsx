import React, { ReactNode } from 'react'
import { Flex, FlexItem } from '../Layout/index'

export interface ActionListRowOptionsContainerProps {
  children?: ReactNode
}

export const ActionListRowOptionsContainer = (
  props: ActionListRowOptionsContainerProps
) => {
  return (
    <Flex justifyContent="center" alignItems="center" width="40px">
      <FlexItem>{props.children}</FlexItem>
    </Flex>
  )
}
