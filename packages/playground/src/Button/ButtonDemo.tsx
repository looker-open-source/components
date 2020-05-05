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

import React, { FC } from 'react'

import {
  Box,
  Button,
  ButtonOutline,
  ButtonTransparent,
  Confirm,
  Heading,
  Space,
  SpaceVertical,
} from '@looker/components'

export const ButtonDemo: FC = () => {
  return (
    <Box p="xlarge">
      <SpaceVertical gap="xlarge">
        <Heading>Filled Buttons</Heading>
        <Box bg="#f5f5f5" p="xlarge">
          <Space gap="small">
            <Button size="xsmall">Button</Button>
            <Button iconBefore="Account" size="xsmall">
              Button
            </Button>
            <Button iconAfter="Account" size="xsmall">
              Button
            </Button>
          </Space>
        </Box>
        <Box bg="#f5f5f5" p="xlarge">
          <Space gap="small">
            <Button size="small">Button</Button>
            <Button iconBefore="Plus" size="small">
              Button
            </Button>
            <Button iconAfter="Plus" size="small">
              Button
            </Button>
          </Space>
        </Box>
        <Box bg="#f5f5f5" p="xlarge">
          <Space gap="small">
            <Button>Button</Button>
            <Button iconBefore="Plus">Button</Button>
            <Button iconAfter="Plus">Button</Button>
          </Space>
        </Box>
        <Box bg="#f5f5f5" p="xlarge">
          <Space gap="small">
            <Button size="large">Button</Button>
            <Button iconBefore="Plus" size="large">
              Button
            </Button>
            <Button iconAfter="Plus" size="large">
              Button
            </Button>
          </Space>
        </Box>

        <Space gap="small">
          <Button size="xsmall">OK</Button>
          <Button size="small">OK</Button>
          <Button>OK</Button>
          <Button size="large">OK</Button>
        </Space>

        <Heading>Outline Buttons</Heading>
        <Space>
          <ButtonOutline size="xsmall">ButtonOutline</ButtonOutline>
          <ButtonOutline size="small">ButtonOutline</ButtonOutline>
          <ButtonOutline>ButtonOutline</ButtonOutline>
          <ButtonOutline size="large">ButtonOutline</ButtonOutline>.
        </Space>
        <Heading>Transparent Buttons</Heading>
        <Space>
          <ButtonTransparent size="xsmall">ButtonTransparent</ButtonTransparent>
          <ButtonTransparent size="small">ButtonTransparent</ButtonTransparent>
          <ButtonTransparent>ButtonTransparent</ButtonTransparent>
          <ButtonTransparent size="large">ButtonTransparent</ButtonTransparent>.
        </Space>
      </SpaceVertical>

      <SpaceVertical gap="large">
        <Heading>Open this dialog</Heading>
        <Confirm
          title="Confirm Something"
          message="Is this what you want to do?"
          onConfirm={(close) => {
            alert('You did something')
            close()
          }}
        >
          {(open) => <Button onClick={open}>Default</Button>}
        </Confirm>
      </SpaceVertical>
    </Box>
  )
}
