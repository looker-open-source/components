import * as React from 'react'
import styled, { css } from '../../styled_components'
import { reset } from '../../styles/helpers'

export interface ListProps {
  type?: ListTypes
  nomarker?: boolean
}

export type ListTypes = 'bullet' | 'number' | 'letter'

/**
 * List are stacked groups of related content that can be useful in many contexts.
 */
const ListGenerator: React.SFC<ListProps> = ({ type, ...args }) => {
  const props = Object.assign({}, args)
  delete props.nomarker

  switch (type) {
    case 'number':
    case 'letter':
      return <ol {...props}>{props.children}</ol>
    case 'bullet':
    default:
      return <ul {...props}>{props.children}</ul>
  }
}

function listStyleType(type: ListTypes | undefined) {
  switch (type) {
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

export const List = styled<ListProps>(ListGenerator)`
  ${reset};
  margin: 0;
  padding: 0 0 0
    ${props => (props.nomarker || !props.type ? 0 : props.theme.spacing.m)};
  ${props =>
    props.nomarker ? listStyleType(undefined) : listStyleType(props.type)};
`
