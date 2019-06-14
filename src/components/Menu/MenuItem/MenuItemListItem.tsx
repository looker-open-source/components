import * as React from 'react'
import { css, easings, styled, transitions } from '../../../style'
import { Box, BoxProps } from '../../Box'
import { Icon } from '../../Icon'
import { MenuItemButton } from './MenuItemButton'
import { MenuItemStyle } from './menuItemStyle'

interface MenuListItemProps extends BoxProps<HTMLElement> {
  current?: boolean
  currentMarker?: boolean
  itemStyle: MenuItemStyle
}

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
const MenuItemStyleFactory = (props: MenuListItemProps) => {
  const { current, currentMarker, itemStyle, ...boxProps } = props
  return <Box {...boxProps} />
}

export const MenuItemListItem = styled<MenuListItemProps>(MenuItemStyleFactory)`
  position: relative;
  text-decoration: none;
  transition: background ${transitions.durationQuick} ${easings.ease},
    color ${transitions.durationQuick} ${easings.ease};

  &:focus-within {
    background: ${props => !props.current && props.itemStyle.hover.bg};

    ${MenuItemButton} {
      text-decoration: underline;
    }
  }

  ${currentBorder};
  ${hoverStyles};

  ${Icon} {
    color: ${iconColor};
    transition: color ${transitions.durationQuick} ${easings.ease};
  }
`
