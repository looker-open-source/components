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
import React, { FC } from 'react'
import { Box, BoxProps } from '../Box'
import { Grid, GridProps } from './Grid'

export default {
  component: Grid,
  title: 'Grid',
}

const Placeholder: FC<BoxProps> = (props) => (
  <Box
    color="white"
    bg="key"
    justifyContent="center"
    alignItems="center"
    height="100%"
    width="100%"
    display="flex"
    minHeight="3rem"
    {...props}
  />
)

const Template: Story<GridProps & { children: JSX.Element }> = ({
  children,
  ...args
}) => <Grid {...args}>{children}</Grid>

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <>
      <Placeholder minHeight="5rem">A</Placeholder>
      <Placeholder>B</Placeholder>
      <Placeholder>C</Placeholder>
      <Placeholder>D</Placeholder>
    </>
  ),
}

export const Columns = Template.bind({})
Columns.args = { ...Basic.args, columns: 4 }

export const GapSize = Template.bind({})
GapSize.args = {
  children: (
    <>
      <Placeholder>C</Placeholder>
      <Placeholder>D</Placeholder>
    </>
  ),
  gap: 'xxlarge',
}

export const VerticalGrid = () => (
  <Grid columns={4}>
    <Grid columns={1} gap="xxlarge">
      <Placeholder minHeight="5rem">A</Placeholder>
      <Placeholder>B</Placeholder>
      <Placeholder>C</Placeholder>
      <Placeholder>D</Placeholder>
    </Grid>
  </Grid>
)
