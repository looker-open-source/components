import { CompatibleHTMLProps, color, typography } from 'looker-design-tokens'
import styled, { css } from 'styled-components'
import { Icon } from '../../Icon'
import { MenuItemStyle } from './menuItemStyle'

export interface MenuListItemProps extends CompatibleHTMLProps<HTMLLIElement> {
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

export const MenuItemListItem = styled.li<MenuListItemProps>`
  ${color}
  ${typography}

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-decoration: none;
  transition: ${props =>
    `background ${props.theme.transitions.durationQuick} ${props.theme.easings.ease},
    color ${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`};

  &:focus-within {
    box-shadow: ${props => `0 0 3px 1px ${props.theme.colors.palette.blue400}`};
    z-index: 1;
  }

  ${currentBorder};
  ${hoverStyles};

  ${Icon} {
    color: ${iconColor};
    transition: color
      ${props =>
        `${props.theme.transitions.durationQuick} ${props.theme.easings.ease}`};
  }
`
