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

import React from 'react'
import { ConstitutionShort } from '../../__mocks__/Constitution'
import { Box } from '../../Layout'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import { PopoverLayout } from '.'

const extraButton = (
  <ButtonTransparent color="neutral" size="small">
    Cancel
  </ButtonTransparent>
)

export const Basic = () => (
  <Box bg="ui1">
    <PopoverLayout header="Header Text" footer>
      <ConstitutionShort />
    </PopoverLayout>
  </Box>
)

export const HeaderHideHeading = () => (
  <Box bg="ui1">
    <PopoverLayout hideHeading footer>
      <ConstitutionShort />
    </PopoverLayout>
  </Box>
)

export const HeaderCloseButton = () => (
  <Box bg="ui1">
    <PopoverLayout headerCloseButton header="Header Text" footer>
      <ConstitutionShort />
    </PopoverLayout>
  </Box>
)

export const FooterExtraValue = () => (
  <Box bg="ui1">
    <PopoverLayout header="Header Text" footer={extraButton}>
      <ConstitutionShort />
    </PopoverLayout>
  </Box>
)

export default {
  component: PopoverLayout,
  title: 'PopoverLayout',
}
