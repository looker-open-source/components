import React, { FunctionComponent } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { easings, transitions } from '@looker/design-tokens'
import { Box, BoxProps } from '../../Box'
import { Icon } from '../../Icon'
import { MenuItemStyle } from './menuItemStyle'

export interface MenuListItemProps extends Omit<BoxProps<HTMLElement>, 'as'> {
  current?: boolean
  currentMarker?: boolean
  itemStyle: MenuItemStyle
}
export type ListItemComponentType = FunctionComponent<MenuListItemProps>
export type StyledListItemComponentType = StyledComponent<
  ListItemComponentType,
  MenuListItemProps
>

const currentBorder = (props: MenuListItemProps) => {
  if (!props.current || !props.currentMarker) return false

  return css`
    ::before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: ${props.itemStyle.marker.color};
      width: ${props.itemStyle.marker.size}px;
    }
  `
}

const hoverStyles = (props: MenuListItemProps) => {
  if (props.current) return false

  return css`
    &:hover {
      background: ${props.itemStyle.hover.bg};
      color: ${props.itemStyle.hover.color};
      font-size: ${props.itemStyle.hover.color};
      font-weight: ${props.itemStyle.hover.color};

      ${Icon} {
        color: ${props.itemStyle.hover.iconColor};
      }
    }
  `
}

const iconColor = (props: MenuListItemProps) =>
  props.current
    ? props.itemStyle.current.iconColor
    : props.itemStyle.initial.iconColor

//
// All of this  drama is to not auto-spread bad props onto Box and cause React run-time warnings
//
const MenuItemStyleFactory: ListItemComponentType = (
  props: MenuListItemProps
) => {
  const { current, currentMarker, itemStyle, ...boxProps } = props
  return <Box {...boxProps} />
}

export const MenuItemListItem: StyledListItemComponentType = styled<
  ListItemComponentType
>(MenuItemStyleFactory)`
  position: relative;
  text-decoration: none;
  transition: background ${transitions.durationQuick} ${easings.ease},
    color ${transitions.durationQuick} ${easings.ease};

  &:focus-within {
    box-shadow: ${props => `0 0 3px 1px ${props.theme.colors.palette.blue400}`};
    z-index: 1;
  }

  ${currentBorder};
  ${hoverStyles};

  ${Icon} {
    color: ${iconColor};
    transition: color ${transitions.durationQuick} ${easings.ease};
  }
`
