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

import {
  Chip,
  ChipButton,
  Heading,
  Space,
  SpaceVertical,
} from '@looker/components'
import React, { useState } from 'react'

export const All = () => (
  <SpaceVertical align="start">
    <ClickAndDelete />
    <ChipButtons />
    <Removable />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Chips',
}

export const ClickAndDelete = () => {
  const handleClick = () => alert('Clicked!')
  const handleDelete = () => alert('Deleted!')
  return (
    <>
      <Heading>Chip</Heading>
      <Space>
        <Chip onClick={handleClick}>Click Me</Chip>
        <Chip disabled onClick={handleClick}>
          Click Me (nothing happens)
        </Chip>
        <Chip onClick={handleClick} onDelete={handleDelete}>
          Delete Me
        </Chip>
        <Chip disabled onClick={handleClick} onDelete={handleDelete}>
          Delete Me (nothing happens)
        </Chip>
      </Space>
    </>
  )
}

export const ChipButtons = () => {
  const handleClick = () => alert('Clicked!')
  const handleDelete = () => alert('Deleted!')
  return (
    <>
      <Heading>ChipButton</Heading>
      <Space>
        <ChipButton onClick={handleClick}>Click Me</ChipButton>
        <ChipButton disabled onClick={handleClick}>
          Click Me (nothing happens)
        </ChipButton>
        <ChipButton onClick={handleClick} onDelete={handleDelete}>
          Delete Me
        </ChipButton>
        <ChipButton disabled onClick={handleClick} onDelete={handleDelete}>
          Delete Me (nothing happens)
        </ChipButton>
      </Space>
    </>
  )
}

export const Removable = () => {
  const [values, setValues] = useState(['Cheddar', 'Gouda', 'Swiss'])
  function getDeleteHandler(item: string) {
    return () => {
      const newValues = values.filter((value) => value !== item)
      setValues(newValues)
    }
  }
  return (
    <>
      <Heading>Remove chips</Heading>
      <Space>
        {values.map((item) => (
          <Chip onDelete={getDeleteHandler(item)} role="option" key={item}>
            {item}
          </Chip>
        ))}
      </Space>
    </>
  )
}
