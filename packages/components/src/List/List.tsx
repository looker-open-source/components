import React, { FunctionComponent, Ref } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../Box'

export interface ListProps
  extends BoxProps<HTMLOListElement | HTMLUListElement> {
  type?: ListTypes
  nomarker?: boolean
}

export type ListTypes = 'bullet' | 'number' | 'letter'

type ComponentType = FunctionComponent<ListProps>
type StyledComponentType = StyledComponent<ComponentType, ListProps>

/**
 * List are stacked groups of related content that can be useful in many contexts.
 */
const InternalList: ComponentType = ({ type, ...props }) => {
  const pl = props.nomarker ? 'none' : 'medium'
  delete props.nomarker
  switch (type) {
    case 'number':
    case 'letter':
      return (
        <Box is="ol" m="none" pl={pl} {...props}>
          {props.children}
        </Box>
      )
    case 'bullet':
      return (
        <Box is="ul" m="none" pl={pl} {...props}>
          {props.children}
        </Box>
      )
    default:
      return (
        <Box is="ul" m="none" p="none" {...props}>
          {props.children}
        </Box>
      )
  }
}

function listStyleType(props: ListProps) {
  switch (props.nomarker ? undefined : props.type) {
    case 'bullet':
      return css`
        list-style-type: disc;
      `
    case 'number':
      return css`
        list-style-type: decimal;
      `
    case 'letter':
      return css`
        list-style-type: upper-alpha;
      `
    default:
      return css`
        list-style-type: none;
      `
  }
}

const ListFactory = React.forwardRef<StyledComponentType, ListProps>(
  (props: ListProps, ref: Ref<StyledComponentType>) => (
    <InternalList ref={ref} {...props} />
  )
)

/** @component */
export const List = styled<ComponentType>(ListFactory)`
  ${listStyleType};
`
