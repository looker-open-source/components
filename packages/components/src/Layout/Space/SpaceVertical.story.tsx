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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Button } from '../../Button'
import { SpaceVertical, SpaceVerticalProps } from './SpaceVertical'

export default {
  component: SpaceVertical,
  title: 'SpaceVertical',
}

interface WithChildren {
  children: JSX.Element
}

const Template: Story<SpaceVerticalProps & WithChildren> = (args) => (
  <SpaceVertical {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
    </>
  ),
}

export const Reverse = Template.bind({})
Reverse.args = { ...Basic.args, reverse: true }

export const Stretch = Template.bind({})
Stretch.args = { ...Basic.args, align: 'stretch' }
