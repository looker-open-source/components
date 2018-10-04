import * as React from 'react'
import { css, styled } from '../../style'
import { Box, BoxProps } from '../Box'

export interface FlexProps extends BoxProps {
  alignItems?:
    | 'center'
    | 'baseline'
    | 'start'
    | 'end'
    | 'selfStart'
    | 'selfEnd'
    | 'flexStart'
    | 'flexEnd'
    | 'stretch'
  flexWrap?: 'nowrap' | 'wrap' | 'wrapReverse'
  flexDirection?: 'row' | 'rowReverse' | 'column' | 'columnReverse'
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flexStart'
    | 'flexEnd'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly'
    | 'stretch'
  className?: string
}

const InternalFlex: React.SFC<FlexProps> = ({ ...props }) => {
  return <Box {...props}>{props.children}</Box>
}

function alignItems(align: FlexProps['alignItems'] | undefined) {
  switch (align) {
    case 'center':
      return css`
        align-items: center;
      `
    case 'baseline':
      return css`
        align-items: baseline;
      `
    case 'start':
      return css`
        align-items: start;
      `
    case 'end':
      return css`
        align-items: end;
      `
    case 'selfStart':
      return css`
        align-items: self-start;
      `
    case 'selfEnd':
      return css`
        align-items: self-end;
      `
    case 'flexStart':
      return css`
        align-items: flex-start;
      `
    case 'flexEnd':
      return css`
        align-items: flex-end;
      `
    case 'stretch':
      return css`
        align-items: stretch;
      `
    default:
      return false
  }
}

function flexWrap(wrap: FlexProps['flexWrap'] | undefined) {
  switch (wrap) {
    case 'nowrap':
      return css`
        flex-wrap: nowrap;
      `
    case 'wrap':
      return css`
        flex-wrap: wrap;
      `
    case 'wrapReverse':
      return css`
        flex-wrap: wrap-reverse;
      `
    default:
      return false
  }
}

function flexDirection(direction: FlexProps['flexDirection'] | undefined) {
  switch (direction) {
    case 'row':
      return css`
        flex-direction: row;
      `
    case 'rowReverse':
      return css`
        flex-direction: row-reverse;
      `
    case 'column':
      return css`
        flex-direction: column;
      `
    case 'columnReverse':
      return css`
        flex-direction: column-reverse;
      `
    default:
      return false
  }
}

function justifyContent(justify: FlexProps['justifyContent'] | undefined) {
  switch (justify) {
    case 'center':
      return css`
        justify-content: center;
      `
    case 'start':
      return css`
        justify-content: start;
      `
    case 'end':
      return css`
        justify-content: end;
      `
    case 'flexStart':
      return css`
        justify-content: flex-start;
      `
    case 'flexEnd':
      return css`
        justify-content: flex-end;
      `
    case 'spaceBetween':
      return css`
        justify-content: space-between;
      `
    case 'spaceAround':
      return css`
        justify-content: space-around;
      `
    case 'spaceEvenly':
      return css`
        justify-content: space-evenly;
      `
    case 'stretch':
      return css`
        justify-content: stretch;
      `
    default:
      return false
  }
}

export const Flex = styled<FlexProps>(InternalFlex)`
  display: flex;
  ${props => alignItems(props.alignItems)};
  ${props => flexWrap(props.flexWrap)};
  ${props => flexDirection(props.flexDirection)};
  ${props => justifyContent(props.justifyContent)};
`
