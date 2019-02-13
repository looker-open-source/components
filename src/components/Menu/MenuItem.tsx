import * as React from 'react'
import { IconNames } from '../../icons/build/IconNames'
import { css, palette, styled } from '../../style'
import { Box, BoxProps, BoxPropsWithout } from '../Box'
import { Icon } from '../Icon'
import { ModalContextProps, withModal } from '../Modal'

export interface CustomizableProps extends BoxProps<HTMLDivElement> {
  backgroundColor: string
  backgroundColorHover: string
  backgroundColorCurrent: string
  iconSize: number
  iconColor: string
  iconColorHover: string
  iconColorCurrent: string
  iconColorActivated: string
  textColor: string
  textColorHover: string
  textColorCurrent: string
  textColorActivated: string
  currentMarkerColor: string
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
  customizableProps?: CustomizableProps

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
    backgroundColor: palette.white,
    backgroundColorHover: palette.charcoal100,
    backgroundColorCurrent: palette.charcoal100,
    iconSize: 20,
    iconColor: palette.charcoal300,
    iconColorHover: palette.charcoal900,
    iconColorCurrent: palette.charcoal900,
    iconColorActivated: palette.blue500,
    textColor: palette.charcoal600,
    textColorHover: palette.charcoal900,
    textColorCurrent: palette.charcoal900,
    textColorActivated: palette.blue500,
    currentMarkerColor: palette.charcoal900,
    // tslint:enable:object-literal-sort-keys
  },
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
      <Icon name={name} mr="xsmall" size={customizableProps.iconSize} />
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
        active
          ? customizableProps.textColorActivated
          : customizableProps.textColor
      }
      display="flex"
      flexWrap="wrap"
      fontSize="small"
      py="small"
      px="medium"
      onClick={click}
      tabIndex={0}
      bg={customizableProps.backgroundColor}
      activeStyle={{ color: customizableProps.textColorActivated }}
      focusStyle={{
        boxShadow: `0 0 .25rem 0.125rem ${palette.blue400}`,
        outline: 'none',
      }}
      hoverStyle={{
        backgroundColor: customizableProps.backgroundColorHover,
        color: customizableProps.textColorHover,
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
      background: ${
        props.customizableProps &&
        props.customizableProps.backgroundColorCurrent
          ? props.customizableProps.backgroundColorCurrent
          : palette.charcoal100
      };

      color: ${
        props.customizableProps && props.customizableProps.textColorCurrent
          ? props.customizableProps.textColorCurrent
          : palette.charcoal900
      };

      ${Icon} {
        color: ${
          props.customizableProps && props.customizableProps.iconColorCurrent
            ? props.customizableProps.iconColorCurrent
            : palette.charcoal900
        };
      }
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
        width: 4px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: ${props.customizableProps &&
        props.customizableProps.currentMarkerColor
          ? props.customizableProps.currentMarkerColor
          : palette.charcoal900};
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
        props.customizableProps.iconColorActivated
          ? props.customizableProps.iconColorActivated
          : palette.blue500};
      }
    `
  } else if (props.current) {
    return css`
      ${Icon} {
        color: ${props.customizableProps &&
        props.customizableProps.iconColorCurrent
          ? props.customizableProps.iconColorCurrent
          : palette.charcoal900};
      }
    `
  } else {
    return css`
      ${Icon} {
        color: ${props.customizableProps && props.customizableProps.iconColor
          ? props.customizableProps.iconColor
          : palette.charcoal300};
      }
    `
  }
}

export const MenuItem = styled<MenuItemProps>(withModal(MenuItemInternal))`
  position: relative;

  ${iconColor};

  :hover {
    ${Icon} {
      color: ${props =>
        props.customizableProps && props.customizableProps.iconColorHover
          ? props.customizableProps.iconColorHover
          : palette.charcoal900};
    }
  }

  ${currentStyles};
  ${currentBorder};
`
