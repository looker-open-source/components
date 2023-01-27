/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import * as MaterialIcons from '@styled-icons/material'
import { Space, SpaceVertical, Icon, Heading } from '../..'

export default function PairedWithText() {
  return (
    <SpaceVertical>
      <Space gap="u2">
        <Heading fontSize="xxsmall">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xsmall">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="small">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="medium">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="large">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="small" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="small" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="medium" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxxxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="medium" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxxxxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="large" icon={<MaterialIcons.Create />} />
      </Space>
    </SpaceVertical>
  )
}
