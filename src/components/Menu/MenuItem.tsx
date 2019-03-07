import deepmerge from 'deepmerge'
import * as React from 'react'
import { IconNames } from '../../icons/build/IconNames'
import { css, easings, palette, styled, transitions } from '../../style'
import { Box, BoxProps, BoxPropsWithout } from '../Box'
import { Icon } from '../Icon'
import { MenuContextProps, withMenu } from './MenuContext'

export interface MenuMarkerCustomizations {
  color?: string
  size?: number
}

export interface MenuIconCustomizations {
  color?: string
  size?: number
}

export interface MenuInteractiveCustomizations {
  bg?: string
  color?: string
  text?: string
  icon?: MenuIconCustomizations
}

export interface MenuItemCustomizationProps extends BoxProps<HTMLDivElement> {
  bg: string
  color: string
  marker: MenuMarkerCustomizations
  icon: MenuIconCustomizations
  hover: MenuInteractiveCustomizations
  current: MenuInteractiveCustomizations
  activated: MenuInteractiveCustomizations
}

export interface MenuIconProps
  extends BoxPropsWithout<HTMLDivElement, 'name' | 'color' | 'size'> {
  color: string
  size: number
  hoverColor: string
  currentColor: string
  activeColor: string
}

export interface MenuItemProps
  extends BoxProps<HTMLAnchorElement>,
    MenuContextProps {
  detail?: React.ReactNode
  icon?: IconNames
  active?: boolean
  canActivate?: boolean
  current?: boolean
  currentMarker?: boolean
  customizationProps?: MenuItemCustomizationProps
  onClick?: () => void
}

const MenuItemInternal: React.SFC<MenuItemProps> = ({
  active,
  current,
  currentMarker,
  canActivate,
  children,
  detail,
  icon,
  customizationProps,
  onClick,
  ...props
}) => {
  // tslint:disable:object-literal-sort-keys
  const defaultcustomizationProps: MenuItemCustomizationProps = {
    bg: palette.white,
    color: palette.charcoal600,
    icon: {
      color: palette.charcoal300,
      size: 20,
    },
    marker: {
      size: 4,
      color: palette.charcoal900,
    },
    hover: {
      bg: palette.charcoal100,
      color: palette.charcoal900,
      icon: {
        color: palette.charcoal900,
      },
    },
    current: {
      bg: palette.charcoal100,
      color: palette.charcoal900,
      icon: {
        color: palette.charcoal900,
      },
    },
    activated: {
      color: palette.blue500,
      icon: {
        color: palette.blue500,
      },
    },
  }
  // tslint:enable:object-literal-sort-keys

  const customProps: MenuItemCustomizationProps = customizationProps
    ? deepmerge(defaultcustomizationProps, customizationProps)
    : defaultcustomizationProps

  const formatDetail = (content?: React.ReactNode) =>
    content ? (
      <Box
        pl="large"
        ml="auto"
        fontSize="xsmall"
        color={palette.charcoal300}
        zIndex={1}
      >
        {content}
      </Box>
    ) : null

  const itemIcon = () => {
    const placeholder = <Box width="1.5rem" />
    const iconComponent = (name: IconNames) => (
      <MenuIcon name={name} mr="xsmall" size={customProps.icon.size} />
    )

    if (canActivate) {
      return active ? iconComponent('Check') : placeholder
    } else if (icon) {
      return iconComponent(icon)
    } else {
      return
    }
  }

  return (
    <MenuItemStyle
      alignItems="center"
      color={active ? customProps.activated.color : customProps.color}
      display="flex"
      flexWrap="wrap"
      fontSize="small"
      py="small"
      px="medium"
      onClick={onClick}
      tabIndex={0}
      bg={customProps.bg}
      focusStyle={{
        boxShadow: `0 0 .25rem 0.125rem ${palette.blue400}`,
        outline: 'none',
        zIndex: 1,
      }}
      style={{ textDecoration: 'none' }}
      active={active}
      activeStyle={{ color: customProps.activated.color }}
      current={current}
      currentMarker={currentMarker}
      customizationProps={customProps}
      {...props}
    >
      {itemIcon()}
      {children}
      {formatDetail(detail)}
    </MenuItemStyle>
  )
}

function currentStyles(props: StyleProps) {
  if (props.current) {
    return `
      background: ${props.customizationProps.current.bg};
      color: ${props.customizationProps.current.color};
    `
  }
  return false
}

function currentBorder(props: StyleProps) {
  if (props.current && props.currentMarker) {
    return css`
      ::before {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: ${props.customizationProps.marker.color};
        width: ${props.customizationProps.marker.size}px;
      }
    `
  }

  return false
}

function iconColor(props: StyleProps) {
  if (props.active) {
    return css`
      ${MenuIcon} {
        color: ${props.customizationProps.activated.icon!.color};
      }
    `
  } else if (props.current) {
    return css`
      ${MenuIcon} {
        color: ${props.customizationProps.current.icon!.color};
      }
    `
  } else {
    return css`
      ${MenuIcon} {
        color: ${props.customizationProps.icon.color};
      }
    `
  }
}

function hoverStyles(props: StyleProps) {
  if (props.current) {
    return false
  } else {
    return css`
      :hover {
        background: ${props.customizationProps.hover.bg};
        color: ${props.customizationProps.hover.color};

        ${MenuIcon} {
          color: ${props.customizationProps.hover.icon &&
            props.customizationProps.hover.icon.color};
        }
      }
    `
  }
}

interface StyleProps extends MenuItemProps {
  customizationProps: MenuItemCustomizationProps
}

//
// All of this  drama is to not auto-spread bad props onto Box and cause React run-time warnings
//
const MenuItemStyleFactory = (props: StyleProps) => {
  const {
    active,
    current,
    currentMarker,
    customizationProps,
    ...boxProps
  } = props
  return <Box {...boxProps} />
}

const MenuIcon = styled(Icon)``

const MenuItemStyle = styled(MenuItemStyleFactory)`
  position: relative;
  transition: background ${transitions.durationQuick} ${easings.ease},
    color ${transitions.durationQuick} ${easings.ease};
  ${hoverStyles};
  ${MenuIcon} {
    transition: color ${transitions.durationQuick} ${easings.ease};
  }
  ${iconColor};
  ${currentStyles};
  ${currentBorder};
`

export const MenuItem = withMenu(MenuItemInternal)
