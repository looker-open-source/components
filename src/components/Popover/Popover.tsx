import * as React from 'react'
import { reset, styled } from '../../style'

export interface PopoverProps {
  title?: string
}

const PopoverTitle = styled.div`
  ${reset};
  padding: ${props => props.theme.space.small};
  background-color: ${props => props.theme.colors.palette.charcoal400};
  font-weight: bold;
`

const PopoverBody = styled.div`
  ${reset};
  padding: ${props => props.theme.space.small};
  background-color: ${props => props.theme.colors.palette.charcoal100};
`

const PopoverWrapper = styled.div`
  ${reset};
  position: absolute;
  overflow: hidden;
  border-radius: ${props => props.theme.radius[2]};
  background-color: ${props => props.theme.colors.palette.charcoal500};
  box-shadow: ${props => props.theme.shadows[3]};
`

export const Popover: React.SFC<PopoverProps> = ({ ...props }) => {
  return (
    <PopoverWrapper {...props}>
      {props.title ? <PopoverTitle>{props.title}</PopoverTitle> : undefined}
      <PopoverBody>{props.children}</PopoverBody>
    </PopoverWrapper>
  )
}
