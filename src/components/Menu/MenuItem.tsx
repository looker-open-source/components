import * as React from 'react'
import { IconNames } from '../../icons/build/IconNames'
import { palette } from '../../style'
import { Box, BoxProps } from '../Box'
import { Icon } from '../Icon'
import { ModalContextProps, withModal } from '../Modal'
import { MenuContextProps, withMenu } from './MenuContext'

export interface MenuItemProps
  extends BoxProps<HTMLAnchorElement>,
    ModalContextProps,
    MenuContextProps {
  detail?: React.ReactNode
  icon?: IconNames
  active?: boolean

  onClick?: () => void
}

const MenuItemInternal: React.SFC<MenuItemProps> = ({
  active,
  canActivate,
  closeModal,
  children,
  detail,
  icon,
  onClick,
  ...props
}) => {
  const formatDetail = (content?: React.ReactNode) =>
    content ? (
      <Box pl="large" ml="auto" fontSize="xsmall" color={palette.charcoal300}>
        {content}
      </Box>
    ) : null

  const click = () => {
    onClick && onClick()
    closeModal && closeModal()
  }

  const itemIcon = () => {
    const placeholder = <Box width="1.5rem" />
    const iconComponent = (name: IconNames) => (
      <Icon name={name} width="1rem" height="1rem" mr="xsmall" />
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

export const MenuItem = withModal(withMenu(MenuItemInternal))
