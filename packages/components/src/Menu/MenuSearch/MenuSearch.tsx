import React, { FC } from 'react'
import { HotKeys, ObserveKeys } from 'react-hotkeys'
import { palette } from 'looker-design-tokens'
import { InputSearch, InputSearchProps } from '../../Form/Inputs'
import { moveFocus } from '../moveFocus'

export interface MenuSearchProps extends Omit<InputSearchProps, 'as'> {
  /**
   * Specify ref of the Menu element that MenuSearch is related to.
   */
  menuRef?: React.RefObject<HTMLElement>
}

export const MenuSearch: FC<MenuSearchProps> = ({ menuRef, ...props }) => {
  return (
    <HotKeys
      keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
      handlers={{
        MOVE_DOWN: () => moveFocus(1, 0, menuRef),
        MOVE_UP: () => moveFocus(-1, -1, menuRef),
      }}
    >
      <ObserveKeys except={[]} only={['down', 'up']}>
        <InputSearch
          borderRadius={0}
          border="none"
          borderBottom={`1px solid ${palette.charcoal200}`}
          width="100%"
          p="large"
          height="auto"
          {...props}
        />
      </ObserveKeys>
    </HotKeys>
  )
}
