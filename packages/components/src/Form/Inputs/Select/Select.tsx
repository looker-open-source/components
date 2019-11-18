/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  forwardRef,
  Ref,
  RefObject,
  FormEvent,
  MouseEvent,
  useRef,
  useState,
} from 'react'
import { HotKeys } from 'react-hotkeys'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  CompatibleHTMLProps,
  CustomizableAttributes,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  Theme,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'
import { MenuList } from '../../../Menu'
import { usePopover } from '../../../Popover'
import { SelectContext } from './SelectContext'
import { useIndexNavigation } from '../../../utils/useIndexNavigation'

export const CustomizableSelectAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export interface SelectProps
  extends BorderProps,
    Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'onChange'> {
  /**
   * Use when Select is not controlled
   */
  defaultValue?: any
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
  /**
   * Callback function fired when a SelectOption is selected
   */
  onChange?: (event: FormEvent<{ value: any }>) => void
  /**
   * Use value 'error' for error styling
   */
  validationType?: ValidationType
  /**
   * Use when Select is controlled
   */
  value?: any
}

const StyledInput = styled.input`
  ${reset}
  border: none;
  outline: none;
  background-color: transparent;
`

const SelectComponent = forwardRef(
  (
    {
      children,
      placeholder,
      defaultValue: propsDefault,
      value: propsValue,
      onChange,
      onClick,
      ...props
    }: SelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [stateValue, setStateValue] = useState(propsDefault)
    const { index, gotoNext, gotoPrev } = useIndexNavigation()
    const innerRef = useRef<null | HTMLElement>(null)

    const menu = <MenuList>{children}</MenuList>

    const { popover, open, ref: triggerRef } = usePopover({
      arrow: false,
      content: menu,
    })

    function handleClick(event: MouseEvent<HTMLDivElement>) {
      open(event)
      onClick && onClick(event)
    }
    function handleChange(event: FormEvent<{ value: any }>) {
      onChange && onChange(event)
    }

    function handleTextChange(e: FormEvent<HTMLInputElement>) {
      setStateValue(e.currentTarget.value)
    }

    return (
      <SelectContext.Provider value={{ onChange: handleChange }}>
        <HotKeys
          innerRef={innerRef}
          keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
          handlers={{
            MOVE_DOWN: () => moveFocus(1, 0, innerRef),
            MOVE_UP: () => moveFocus(-1, -1, innerRef),
          }}
        >
          <SelectBase
            borderColor="palette.charcoal300"
            display="inline-flex"
            onClick={handleClick}
            {...props}
            ref={triggerRef as RefObject<HTMLDivElement>}
          >
            <StyledInput
              type="text"
              readOnly
              value={propsValue || stateValue}
              placeholder={placeholder}
              onChange={handleTextChange}
              ref={ref}
            />
            {popover}
          </SelectBase>
        </HotKeys>
      </SelectContext.Provider>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

//
// @TODO - Should be properly imported from `Caret Down.svg`
// import caretDownIcon from '../../../../icons/svg/Caret Down.svg'
//
const indicatorRaw = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.41 8L12 12.58L16.59 8L18 9.41L12 15.41L6 9.41L7.41 8Z" fill="#1C2125"/>
</svg>`
const indicatorSize = '1rem'
const indicatorPadding = '.25rem'
const indicator = ({ theme }: { theme: Theme }) =>
  typeof window !== 'undefined' &&
  window.btoa(indicatorRaw.replace('#1C2125', theme.colors.palette.charcoal500))

const SelectBase = styled.div.attrs((props: SelectProps) => ({
  borderRadius: props.borderRadius || CustomizableSelectAttributes.borderRadius,
  fontSize: props.fontSize || CustomizableSelectAttributes.fontSize,
  height: props.py || props.p ? undefined : CustomizableSelectAttributes.height,
  px: props.p || CustomizableSelectAttributes.px,
  py: props.p || CustomizableSelectAttributes.py,
}))<SelectProps>`
  ${reset}
  display: inline-flex;
  align-items: stretch;

  background-color: ${props =>
    props.validationType === 'error'
      ? props.theme.colors.palette.red000
      : props.theme.colors.palette.white};
  border: solid 1px;

  background-image:
    url('data:image/svg+xml;base64,${indicator}'),
    linear-gradient(to bottom, white 0%, white 100%);

  background-repeat: no-repeat, repeat;
  background-position: right ${indicatorPadding} center, 0 0;
  background-size: ${indicatorSize}, 100%;

  ${border}
  ${layout}
  ${typography}
  ${space}
  padding-right: calc(2 * ${indicatorPadding} + ${indicatorSize});

`

export const Select = styled(SelectComponent)``
