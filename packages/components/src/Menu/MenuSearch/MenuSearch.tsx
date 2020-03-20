/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FC, RefObject } from 'react'
import { HotKeys, ObserveKeys } from 'react-hotkeys'
import { palette } from '@looker/design-tokens'
import { InputSearch, InputSearchProps } from '../../Form/Inputs'
import { moveFocus } from '../moveFocus'

export interface MenuSearchProps extends Omit<InputSearchProps, 'as'> {
  /**
   * Specify ref of the Menu element that MenuSearch is related to.
   */
  menuRef?: RefObject<HTMLElement>
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
          hideSearchIcon
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
