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

import React from 'react'
import {
  Chip,
  ChipButton,
  ButtonGroup,
  ButtonToggle,
  ButtonItem,
  InputChips,
  Space,
  SpaceVertical,
} from '@looker/components'

export default {
  title: 'ControlColors',
}

export const ControlColors = () => (
  <SpaceVertical m="xxxlarge">
    <InputChips
      values={['apples']}
      onChange={() => {
        return null
      }}
    />

    <Space gap="xxsmall">
      <Chip disabled>Disabled</Chip>
      <Chip>Resting</Chip>
      <Chip className="hover">Hover</Chip>
      <Chip className="focus">Focus</Chip>
      <Chip className="active">Active</Chip>
    </Space>
    <Space gap="xxsmall">
      <ChipButton disabled>Disabled</ChipButton>
      <ChipButton>Resting</ChipButton>
      <ChipButton className="hover">Hover</ChipButton>
      <ChipButton className="focus">Focus</ChipButton>
      <ChipButton className="active">Active</ChipButton>
    </Space>
    <Space>
      <ButtonItem value="boo">Hello</ButtonItem>
      <ButtonGroup value={['CA', 'WA']}>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
        <ButtonItem disabled value="WA">
          Washington
        </ButtonItem>
        <ButtonItem disabled value="OR">
          Oregon
        </ButtonItem>
      </ButtonGroup>
      <ButtonToggle value="CA">
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem disabled value="UT">
          Utah
        </ButtonItem>
      </ButtonToggle>
    </Space>
  </SpaceVertical>
)
