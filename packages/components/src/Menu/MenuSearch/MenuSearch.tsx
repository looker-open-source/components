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

import React, {
  FC,
  RefObject,
  MouseEvent,
  useState,
  useEffect,
  FormEvent,
} from 'react'
import { HotKeys, ObserveKeys } from 'react-hotkeys'
import { palette } from '@looker/design-tokens'
import {
  InputSearchBase,
  InputSearchBaseProps,
  InputSearchControls,
} from '../../Form/Inputs'
import { moveFocus } from '../moveFocus'

export interface MenuSearchProps extends InputSearchBaseProps {
  /**
   * Specify ref of the Menu element that MenuSearch is related to.
   */
  menuRef?: RefObject<HTMLElement>
  hideControls?: boolean
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const MenuSearch: FC<MenuSearchProps> = ({
  menuRef,
  summary,
  hideControls = false,
  value: valueProp,
  defaultValue,
  onClear,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<string | undefined>()

  const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
    setValue('')
    onClear && onClear(e)
    onChange &&
      onChange({
        currentTarget: { value: '' },
      } as FormEvent<HTMLInputElement>)
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = (e.target as HTMLInputElement).value
    setValue(newValue)
    onChange && onChange(e)
  }

  // only update when valueProp changes, but not defaultValue
  useEffect(() => {
    setValue(valueProp || defaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueProp])

  return (
    <HotKeys
      keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
      handlers={{
        MOVE_DOWN: () => moveFocus(1, 0, menuRef),
        MOVE_UP: () => moveFocus(-1, -1, menuRef),
      }}
    >
      <ObserveKeys except={[]} only={['down', 'up']}>
        <InputSearchBase
          searchIcon={false}
          borderRadius={0}
          border="none"
          borderBottom={`1px solid ${palette.charcoal200}`}
          width="100%"
          p="large"
          height="auto"
          value={value}
          onChange={handleChange}
          searchControls={
            !hideControls ? (
              <InputSearchControls
                onClear={handleClear}
                summary={summary}
                showClear={!!(value && value.length >= 0)}
              />
            ) : undefined
          }
          {...props}
        />
      </ObserveKeys>
    </HotKeys>
  )
}
