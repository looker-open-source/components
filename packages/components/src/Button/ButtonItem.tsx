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

import { parseToHsl } from 'polished'
import React, { ChangeEvent, forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'

export interface ButtonItemProps
  extends SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLLabelElement | HTMLInputElement> {
  /**
   * Internal use only
   */
  isControlled?: boolean
}

export const ButtonItemLabelText = styled.span``

export const ButtonItemLabel = styled.label<ButtonItemProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.space.small};
  user-select: none;
  border-radius: 4px;
  background: ${(props) =>
    props.selected
      ? `hsla(${
          parseToHsl(props.theme.colors.palette.purple400).hue
        }, 100%, 98%, 1)`
      : 'transparent'};
  border-color: ${(props) =>
    props.selected
      ? `hsla(${
          parseToHsl(props.theme.colors.palette.purple400).hue
        }, 100%, 98%, 1)`
      : `hsla(${
          parseToHsl(props.theme.colors.palette.purple400).hue
        }, 25%, 90%, 1)`};
  transition: background ${(props) => props.theme.transitions.durationQuick}
    ease;

  &:hover {
    background: ${(props) =>
      !props.selected
        ? `hsla(${
            parseToHsl(props.theme.colors.palette.purple400).hue
          }, 25%, 97%, 0.7)`
        : false};
  }

  &:active {
    background: ${(props) =>
      `hsla(${
        parseToHsl(props.theme.colors.palette.purple400).hue
      }, 50%, 96%, 0.9)`};
  }

  &:focus-within {
    box-shadow: ${(props) =>
      `0 0 .5px 1px ${props.theme.colors.palette.purple200}`};
  }

  ${ButtonItemLabelText} {
    color: ${(props) => props.theme.colors.palette.charcoal600};
  }

  input:checked + ${ButtonItemLabelText} {
    color: ${(props) => props.theme.colors.palette.purple400};

    /* stylelint-disable */
    text-shadow: -0.025ex 0 currentColor, 0.025ex 0 currentColor;
    /* stylelint-enabled */
  }
  ${space}
  ${typography}
`

const ButtonInput = styled.input`
  display: none;
`

const ButtonItemComponent = forwardRef(
  (
    {
      children,
      disabled,
      isControlled,
      name,
      onChange,
      selected = false,
      value,
      ...props
    }: ButtonItemProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [uncontrolledSelected, setUncontrolledSelected] = useState(selected)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      if (onChange) {
        onChange(e)
      }
      if (!isControlled) {
        setUncontrolledSelected(!uncontrolledSelected)
      }
    }

    const showSelected = isControlled ? selected : uncontrolledSelected

    return (
      <ButtonItemLabel
        disabled={disabled}
        fontFamily="brand"
        py="small"
        selected={showSelected}
        {...props}
      >
        <ButtonInput
          type={props.type}
          disabled={disabled}
          name={name}
          onChange={handleChange}
          checked={showSelected}
          value={value}
          ref={ref}
        />
        <ButtonItemLabelText>{children}</ButtonItemLabelText>
      </ButtonItemLabel>
    )
  }
)

ButtonItemComponent.displayName = 'ButtonItemComponent'

export const ButtonItem = styled(ButtonItemComponent)``
