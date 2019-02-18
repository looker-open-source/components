import * as React from 'react'
import { IconNames } from '../../icons/build/IconNames'
import { css, easings, palette, styled, transitions } from '../../style'
import { Box, BoxProps, BoxPropsWithout } from '../Box'
import { Icon } from '../Icon'
import { ModalContextProps, withModal } from '../Modal'

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

export interface MenuItemCustomizableProps extends BoxProps<HTMLDivElement> {
  bg?: string
  color?: string
  marker?: MenuMarkerCustomizations
  icon?: MenuIconCustomizations
  hover?: MenuInteractiveCustomizations
  current?: MenuInteractiveCustomizations
  activated?: MenuInteractiveCustomizations
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
    ModalContextProps {
  detail?: React.ReactNode
  icon?: IconNames
  active?: boolean
  canActivate?: boolean
  current?: boolean
  currentMarker?: boolean
  customizableProps?: MenuItemCustomizableProps

  onClick?: () => void
}

const MenuItemInternal: React.SFC<MenuItemProps> = ({
  active,
  current,
  currentMarker,
  canActivate,
  closeModal,
  children,
  detail,
  icon,
  customizableProps = {
    // tslint:disable:object-literal-sort-keys
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
  },
  // tslint:enable:object-literal-sort-keys
  ...props
}) => {
  const formatDetail = (content?: React.ReactNode) =>
    content ? (
      <Box pl="large" ml="auto" fontSize="xsmall" color={palette.charcoal300}>
        {content}
      </Box>
    ) : null

  const click = () => {
    props.onClick && props.onClick()
    closeModal && closeModal()
  }

  const itemIcon = () => {
    const placeholder = <Box width="1.5rem" />
    const iconComponent = (name: IconNames) => (
      <Icon name={name} mr="xsmall" size={customizableProps.icon!.size} />
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
    <Box
      alignItems="center"
      color={
        active ? customizableProps.activated!.color : customizableProps.color
      }
      display="flex"
      flexWrap="wrap"
      fontSize="small"
      py="small"
      px="medium"
      onClick={click}
      tabIndex={0}
      bg={customizableProps.bg}
      activeStyle={{ color: customizableProps.activated!.color }}
      focusStyle={{
        boxShadow: `0 0 .25rem 0.125rem ${palette.blue400}`,
        outline: 'none',
      }}
      style={{ textDecoration: 'none' }}
      {...props}
    >
      {itemIcon()}
      {children}
      {formatDetail(detail)}
    </Box>
  )
}

function currentStyles(props: MenuItemProps) {
  if (props.current) {
    return `
      background: ${props.customizableProps!.current!.bg};
      color: ${props.customizableProps!.current!.color};
    `
  }
  return false
}

function currentBorder(props: MenuItemProps) {
  if (props.current && props.currentMarker) {
    return css`
      ::before {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: ${props.customizableProps!.marker!.color};
        width: ${`${props.customizableProps!.marker!.size}px`};
      }
    `
  }

  return false
}

function iconColor(props: MenuItemProps) {
  if (props.active) {
    return css`
      ${Icon} {
        color: ${props.customizableProps &&
        props.customizableProps.activated!.color
          ? props.customizableProps.activated!.color
          : palette.blue500};
      }
    `
  } else if (props.current) {
    return css`
      ${Icon} {
        color: ${props.customizableProps &&
        props.customizableProps.current!.icon!.color
          ? props.customizableProps.current!.icon!.color
          : palette.charcoal900};
      }
    `
  } else {
    return css`
      ${Icon} {
        color: ${props.customizableProps && props.customizableProps.icon!.color
          ? props.customizableProps.icon!.color
          : palette.charcoal300};
      }
    `
  }
}

function hoverStyles(props: MenuItemProps) {
  if (props.current) {
    return false
  } else {
    return css`
      :hover {
        background: ${props.customizableProps &&
        props.customizableProps.hover!.bg
          ? props.customizableProps.hover!.bg
          : palette.charcoal100};
        color: ${props.customizableProps && props.customizableProps.hover!.color
          ? props.customizableProps.hover!.color
          : palette.charcoal900};

        ${Icon} {
          color: ${props.customizableProps &&
          props.customizableProps.hover!.icon!.color &&
          !props.current
            ? props.customizableProps.hover!.icon!.color
            : palette.charcoal900};
        }
      }
    `
  }
}

export const MenuItem = styled<MenuItemProps>(withModal(MenuItemInternal))`
  position: relative;
  transition: background ${transitions.durationQuick} ${easings.ease},
    color ${transitions.durationQuick} ${easings.ease};
  ${hoverStyles};
  ${Icon} {
    transition: color ${transitions.durationQuick} ${easings.ease};
  }
  ${iconColor};
  ${currentStyles};
  ${currentBorder};
`
