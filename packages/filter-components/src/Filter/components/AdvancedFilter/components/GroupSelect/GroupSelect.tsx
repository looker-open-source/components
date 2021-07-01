/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import type { SelectProps, ValidationMessageProps } from '@looker/components'
import { InputText, Select } from '@looker/components'
import omit from 'lodash/omit'
import React from 'react'
import styled from 'styled-components'
import type { PlacementProps } from '../../../../utils/filter_styles'
import {
  inputPlacementStyle,
  inputErrorStyle,
} from '../../../../utils/filter_styles'

export interface GroupSelectProps extends SelectProps, PlacementProps {
  validationMessage?: ValidationMessageProps
}

export const GroupSelect = styled((props: GroupSelectProps) => (
  <Select autoResize {...omit(props, 'placement')} />
))`
  ${InputText} {
    ${inputPlacementStyle}
    ${inputErrorStyle}
  }
`
