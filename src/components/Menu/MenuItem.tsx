import * as React from 'react'
import { IconNames } from '../../icons/build/IconNames'
import { css, palette, styled } from '../../style'
import { Box, BoxProps, BoxPropsWithout } from '../Box'
import { Icon } from '../Icon'
import { ModalContextProps, withModal } from '../Modal'

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
  iconProps?: MenuIconProps

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
  iconProps,
  icon,
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
      <Icon name={name} mr="xsmall" {...iconProps} />
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
      color={active ? palette.blue500 : palette.charcoal600}
      display="flex"
      flexWrap="wrap"
      fontSize="small"
      py="small"
      px="medium"
      onClick={click}
      tabIndex={0}
      activeStyle={{ color: palette.blue500 }}
      focusStyle={{
        boxShadow: `0 0 .25rem 0.125rem ${palette.blue400}`,
        outline: 'none',
      }}
      hoverStyle={{
        background: palette.charcoal000,
        color: palette.charcoal900,
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
    return css`
      background: ${palette.charcoal100};

      ${Icon} {
        color: ${props.iconProps && props.iconProps.currentColor
          ? props.iconProps.currentColor
          : palette.charcoal800};
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
        background: ${palette.charcoal800};
      }
    `
  }

  return false
}

export const MenuItem = styled<MenuItemProps>(withModal(MenuItemInternal))`
  position: relative;
  ${currentStyles};
  ${currentBorder};

  :hover {
    ${Icon} {
      color: ${props =>
        props.iconProps && props.iconProps.hoverColor
          ? props.iconProps.hoverColor
          : false};
    }
  }
`
